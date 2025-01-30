import { LightningElement } from 'lwc';

export default class ShowIfTrue extends LightningElement {

    IsGreetingVisible=false;

    toggleGreetingVisibility() {
        this.IsGreetingVisible = !this.IsGreetingVisible;
    }
}