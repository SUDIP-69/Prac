import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'Sudip';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
}