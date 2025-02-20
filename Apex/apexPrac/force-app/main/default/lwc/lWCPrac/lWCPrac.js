import { LightningElement,track } from 'lwc';
import AccountList from '@salesforce/apex/forEachDemo.forEachDemo'

export default class LWCPrac extends LightningElement {

    @track property;

    constructor(){
        super();
        let name = 'Sudip';
        if(name)
        {
            this.property = "qwerty";
        }
        this.template.querySelector('lightning-button');

        AccountList().then(result => {
            this.Account = result;
        })
        .catch(error => {
            this.error = error;
        })
    }
}