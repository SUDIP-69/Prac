import { api, LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/accountSearch.getContact';

const col = [
    { label: 'First name', fieldName: 'FirstName' },
    { label: 'Last name', fieldName: 'LastName' }
];

export default class RelatedContact extends LightningElement {
    // @api copyId;
@api recordId;
    contactList = [];
    col=col;
    @wire(getContact, { recordId: '$recordId' })
    wiredContacts({ error, data }) {
        if (error) {
            console.error(error);
        } else {
            this.contactList = data;
            console.log(this.contactList);
        }
    }
}
