import { LightningElement,wire } from "lwc";
import { publish, MessageContext } from "lightning/messageService";
import COUNT_UPDATED_CHANNEL from "@salesforce/messageChannel/Counting_Update__c";

export default class PublishLWC extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleIncrement() {
        const payload = { operator: "add", Constant: 1 }
        publish(this.messageContext, COUNT_UPDATED_CHANNEL, payload);
    }

    handleDecrement() {
        const payload = { operator: "subtract", Constant: 1 }
        publish(this.messageContext, COUNT_UPDATED_CHANNEL, payload);
    }

    handleMultiply() {
        const payload = { operator: "multiply", Constant: 2 }
        publish(this.messageContext, COUNT_UPDATED_CHANNEL, payload);
    }
}