import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/Sample__c";
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';

export default class Component2 extends LightningElement {

    receivedMessage;
    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {

        if ( this.subscription ) {
            return;
        }
        this.subscription = subscribe(
            this.messageContext,
            SAMPLEMC, ( message ) => {
                this.handleMessage( message );
            },
            {scope: APPLICATION_SCOPE}
        );

    }

    handleMessage( message ) {

        console.log( 'Message received is ' + JSON.stringify( message ) );
        this.receivedMessage = message ? JSON.stringify( message, null, '\t' ) : 'No Message Payload';

    }

}