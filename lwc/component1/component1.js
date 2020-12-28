import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/Sample__c";
import { publish, MessageContext } from 'lightning/messageService';

export default class Component1 extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleClick() {

        const message = {
            variable1: "Test"
        };
        publish( this.messageContext, SAMPLEMC, message );

    }

}