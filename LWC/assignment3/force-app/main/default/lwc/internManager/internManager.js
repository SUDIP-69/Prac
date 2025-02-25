import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getInterns from '@salesforce/apex/internManager.getInterns';
import checkUniqueName from '@salesforce/apex/internManager.checkUniqueName';
import createIntern from '@salesforce/apex/internManager.createIntern';
 
export default class InternManager extends LightningElement {
    @track internName = '';
    @track department = '';
    @track project = '';
    @track internList = [];
 
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Department', fieldName: 'Department__c' },
        { label: 'Project', fieldName: 'Project__c' }
    ];
 
    // Fetch existing interns
    @wire(getInterns)
    wiredInterns({ data, error }) {
        if (data) {
            this.internList = data;
        } else if (error) {
            console.error(error);
        }
    }
 
    handleChange(event) {
        const field = event.target.dataset.id;
        if (field === 'internName') {
            this.internName = event.target.value;
        } else if (field === 'department') {
            this.department = event.target.value;
        } else if (field === 'project') {
            this.project = event.target.value;
        }
    }
 
    handleSubmit() {
        if (this.internName === '' || this.department === '' || this.project === '') {
            this.showToast('Error', 'All fields are required', 'error');
            return;
        }
 
        checkUniqueName({ name: this.internName })
            .then(isUnique => {
                if (isUnique) {
                    createIntern({
                        name: this.internName,
                        department: this.department,
                        project: this.project
                    }).then(() => {
                        this.showToast('Success', 'Intern added successfully', 'success');
                        this.clearFields();
                        return refreshApex(this.internList);
                    }).catch(error => {
                        console.error(error);
                        this.showToast('Error', 'Failed to add intern', 'error');
                    });
                } else {
                    this.showToast('Error', 'Intern name must be unique', 'error');
                }
            }).catch(error => {
                console.error(error);
            });
    }
 
    clearFields() {
        this.internName = '';
        this.department = '';
        this.project = '';
    }
 
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}
 