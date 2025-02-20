import { LightningElement,api } from 'lwc';

export default class Q1 extends LightningElement {

    val = ' ';

    handleChange(e)
    {
        this.val= e.target.value;
    }
}