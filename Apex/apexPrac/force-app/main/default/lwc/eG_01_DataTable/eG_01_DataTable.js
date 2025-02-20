import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/getAccount.func';

const COL = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Rating', fieldName: 'Rating' },
    { label: 'Fax', fieldName: 'Fax', type: 'string' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class EG_01_DataTable extends LightningElement {
    Mydata = [];
    myCLM = COL;


    @wire(getAccount) wiredAccounts({ error, data }) {
        if (data) { this.Mydata = data; }
        else if (error) { console.error(error); }
    }
}