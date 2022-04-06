import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import TodoItem from "./TodoITem";

const API_URL = 'http://localhost:3030/jsonstore';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    console.log('render');

    useEffect(() => {
        console.log('mounted');
        fetch(`${API_URL}/todo`)
            .then(response => response.json())
            .then(todosResult => {
                console.log(todosResult);
                setTodos(Object.values(todosResult));
            })
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

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();
        console.log('Delete ', id);
        setTodos(oldTodos => oldTodos.filter(x => x.id != id));
    }

    const toggleTodoItemClickHandler = (id) => {
        console.log(id, ' - Toggle');
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x =>x.id == id);
            let selectTodoIndex = oldTodos.findIndex(x => x.id ==id);
            let toggledTodo = {...selectedTodo, isDone: !selectedTodo.isDone};
            

            return [
                ...oldTodos.slice(0, selectTodoIndex),
                toggledTodo,
                ...oldTodos.slice(selectTodoIndex + 1)
            ];
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