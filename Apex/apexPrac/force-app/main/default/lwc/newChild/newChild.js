import { LightningElement,api } from 'lwc';

export default class NewChild extends LightningElement {
    @api counterVal = 0;

    @api maxminCounter()
    {
        this.counterVal+= 100;
    }

}