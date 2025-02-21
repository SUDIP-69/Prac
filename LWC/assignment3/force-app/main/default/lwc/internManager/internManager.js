import { LightningElement, track, wire } from 'lwc';
import getInterns from '@salesforce/apex/internManager.getInterns';
import addIntern from '@salesforce/apex/internManager.addIntern';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const col = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Department', fieldName: 'Department__c' },
    { label: 'Project', fieldName: 'Project__c' }
];

export default class InternManager extends LightningElement {
    data = [];
    columns = col;
    searchKey = '';
    @track name = '';
    @track department = '';
    @track project = '';
    error = '';

    handleNameChange(event) {
        this.name = event.target.value;
        console.log(this.name);
        
    }

    handleDepartmentChange(event) {
        this.department = event.target.value;
        console.log(this.department);
    }

    handleProjectChange(event) {
        this.project = event.target.value;
        console.log(this.project);
    }

    @wire(getInterns)
    interns;

    handleSearchKeyChange(e) {
        this.searchKey = e.target.value;

        getInterns({
            name: this.searchKey
        })
            .then(data => {
                this.data = data;
            })
            .catch(error => {
                console.log(error);
            }
            );
    }

    async handleSubmit() {
        this.error = '';
        if (!this.name || !this.department || !this.project) {
            this.error = 'Please enter all fields';
            return;
        }
        else
        {
            console.log(new List<Intern__c>(Name = this.name, Department__c = this.department, Project__c = this.project) + '----------------> line 63');
            
        }

        try {
            const result = await addIntern(new List<Intern__c>(Name = this.name, Department__c = this.department, Project__c = this.project));

            console.log(result + '----------------> line 70');
            

            if (result.startsWith('Error')) {
                this.error = result;
            }
            else {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Intern added successfully',
                        variant: 'success'
                    })
                );
                return refreshApex(this.interns);

            }
        }
        catch (error) {
            this.error = 'Error inserting record line ----------> 83';
        }
    }
}