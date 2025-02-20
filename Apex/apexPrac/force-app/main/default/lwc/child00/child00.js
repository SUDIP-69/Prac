import { api, LightningElement } from 'lwc';

export default class Child00 extends LightningElement {
    handleAdd()
    {
        this.dispatchEvent(new CustomEvent('add'));
    }
    handleSubtract()
    {
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event)
    {
        const  val = event.target.value;
        alert("Value received from HTML"+val);
        this.dispatchEvent(new CustomEvent('multiply', {detail: val}));
    }
}