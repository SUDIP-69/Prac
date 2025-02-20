import { LightningElement,track,api,wire } from 'lwc';
import accounts from'@salesforce/apex/forEachDemo.getforEachDemo';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Rating', fieldName: 'Rating' },
    { label: 'Fax', fieldName: 'Fax', type: 'string' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];

export default class WireDemo extends LightningElement {

    @track col = columns;
    @track d = [];

    @wire(accounts)
    accountList({data,error})
    {
        if(data)
            this.d = data;
        if(error)
            console.log(error);
            
    }
}