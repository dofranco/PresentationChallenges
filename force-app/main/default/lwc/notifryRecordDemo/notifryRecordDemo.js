import { api, LightningElement } from 'lwc';
import closeCase from '@salesforce/apex/CaseHelper.closeCase';
import notifyRecordUpdateAvailable from 'lightning/uiRecordApi';

export default class NotifryRecordDemo extends LightningElement {

    @api
    recordId;

    async closeCase() {
        await closeCase({caseId: this.recordId});
        await notifyRecordUpdateAvailable([{recordId: this.recordId}]);
    }
}