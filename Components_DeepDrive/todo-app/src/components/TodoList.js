// import uniqid from 'uniqid';
import TodoItem from "./TodoITem";

export default function TodoList() {

    const todos = [
        {id:1,text: 'Clean my room'},
        {id:2, text: 'Learn React'},
       { id:3, text:'Go shopping'}
    ]
    return (
        <ul>
           {todos.map(x => <TodoItem key={x.id} todo={x} />)} 
        </ul>
    );

}