import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import TodoItem from "./TodoITem";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room', isDone: false },
        { id: 2, text: 'Learn React', isDone: false },
        { id: 3, text: 'Go shopping', isDone: false },
    ]);
    console.log('render');

    useEffect(() => {
        console.log('mounted')
    }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }

        setTodos((state) => [
            ...state,
            todo
        ]);
        e.target.value = '';
    }

    const deleteTodoItemClickHandler = (id) => {
        console.log('Delete ', id);
        setTodos(oldTodos => oldTodos.filter(x => x.id != id));
    }

    const toggleTodoItemClickHandler = (id) => {
        console.log(id, ' - Toggle');
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x =>x.id == id);
            let toggledTodo = {...selectedTodo, isDone: !selectedTodo.isDone};
            let restTodos = oldTodos.filter(x => x.id  != id);

            return [...restTodos, toggledTodo];
        })
    }
    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo-name" />
            <ul>
                {todos.map(x =>
                    <TodoItem
                        key={x.id}
                        todo={x}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />)}
            </ul>
        </>
    );

}