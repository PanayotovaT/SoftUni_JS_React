// import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import TodoItem from "./TodoITem";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room' },
        { id: 2, text: 'Learn React' },
        { id: 3, text: 'Go shopping' },
    ]);

    useEffect(() => {
        console.log('mounted')
    }, []);

  const onTodoInputBlur = (e) => {
    let todo = {
        id: todos.length + 1,
        text: e.target.value

    }

    setTodos([
        ...todos,
        todo
    ]);
  }
    return (
        <>
        <label htmlFor="todo-name">Add Todo</label>
        <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo-name" />
            <ul>
                {todos.map(x => <TodoItem key={x.id} todo={x} />)}
            </ul>
        </>
    );

}