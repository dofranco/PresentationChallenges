import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
    
    @track
    todoItems = ['Jog', 'Take a walk'];
    
    newTodo = '';

    handleAddTodo() {
        this.todoItems.push(this.refs.input.value);
        this.refs.input.value = '';
    }
}