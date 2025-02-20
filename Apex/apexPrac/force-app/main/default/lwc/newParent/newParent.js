import { LightningElement } from 'lwc';

export default class NewParent extends LightningElement {

    startCounter = 0;

    handleStartChange(e)
    {
        this.startCounter = parseInt(e.target.value);
    }

    handleMaxMinCounter()
    {
        const updateCounter = this.template.querySelector('c-new-child');
        updateCounter.maxminCounter();
    }
}