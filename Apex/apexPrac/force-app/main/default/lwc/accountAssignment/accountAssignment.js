import { api, LightningElement, track } from 'lwc';
import getAccount from '@salesforce/apex/accountSearch.accountSearch';

export default class AccountAssignment extends LightningElement {
    searchKey;
    @track showContact = false;
    @api copyId;

    data = []; //empty list

    connectedCallback() {
        this.columns = [
            { label: 'Name', fieldName: 'Name' },
            {
                type: 'button', 
                typeAttributes: { 
                    label: 'View',
                    name: 'View', 
                    title: 'View', 
                    disabled: false, 
                    variant: 'base',
                    value: 'View',
                    iconPosition: 'left'
                }
            }
        ];
    }

    handleSearchKey(e) {
        this.searchKey = e.target.value;

        getAccount({ accountId: this.searchKey })
            .then(result => {
                this.data = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleAction(event) {
        this.showContact = true;

        const conId = event.detail.row.Id;
        this.copyId = conId;

        console.log('account Id: ' + this.copyId + ' action:' + event.detail.action.name);
    }
}
