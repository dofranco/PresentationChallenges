import { LightningElement, api } from 'lwc';
import deleteAccount from '@salesforce/apex/AccountHelper.deleteAccount';

export default class AccountDetails extends LightningElement {

    @api record;

    async deleteAccount(event) {
        await deleteAccount({ accId: event.target.dataset.recordid });
        this.dispatchEvent(new CustomEvent('accountdeleted'));
    }

    handleEditSuccess() {
        this.dispatchEvent(new CustomEvent('accountedited'));
    }
}