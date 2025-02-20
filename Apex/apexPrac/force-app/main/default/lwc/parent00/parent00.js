import { LightningElement } from 'lwc';

export default class Parent00 extends LightningElement {
    countVal = 0;

    handleAdd()
    {
        this.countVal++;
    }
    handleSubtract()
    {
        this.countVal--;
    }
    handleMultiply(event)
    {
        const num = event.detail;
        this.countVal *= num;
    }
}