import { LightningElement } from 'lwc';
import createCase from '@salesforce/apex/CaseHelper.createCase';

export default class Challenge5 extends LightningElement {
    
    
    async handleCase() {
        try {
            // Await the response from the Apex method
            await createCase({
                caseOrigin: this.refs.origin.value,
                caseStatus: this.refs.status.value
            });
            this.dispatchEvent(new CustomEvent('casecreate'));
            this.refs.origin.value = '';
            this.refs.status.value = '';
        } catch (error) {
            // Handle any potential errors
            console.error('Error creating case:', error);
        }
    }
}