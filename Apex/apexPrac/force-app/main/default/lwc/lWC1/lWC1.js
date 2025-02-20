import { LightningElement, track } from 'lwc';
 
export default class LWC1 extends LightningElement {
    @track inputTextValue;
    submitTest(event){
        console.log(document.getElementById('form-element-03'));
        this.inputTextValue = document.getElementById('form-element-03');
    }
 
}
 