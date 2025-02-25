import { LightningElement,wire } from "lwc";
import { subscribe, MessageContext } from "lightning/messageService";
import COUNT_UPDATED_CHANNEL from "@salesforce/messageChannel/Counting_Update__c";

export default class SubscribeLWC extends LightningElement {
    count = 0;

    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel(){
        this.subscription = subscribe(this.messageContext, COUNT_UPDATED_CHANNEL, (message) => {
            this.handleMessage(message);
        });
    }

    handleMessage(message){
        if(message.operator === "add"){
            this.count += message.Constant;
        } else if(message.operator === "subtract"){
            this.count -= message.Constant;
        } else if(message.operator === "multiply"){
            this.count *= message.Constant;
        }
    }
}