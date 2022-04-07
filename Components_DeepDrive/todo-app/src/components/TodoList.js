import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import TodoItem from "./TodoITem";
import { createTodo, deleteTodo } from '../services/todoService';

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
                let arrayTodos = Object.entries(todosResult);
                const todos = arrayTodos.map(([key, value]) => Object.assign({}, { _id: key}, value));
                console.log(todos);
                setTodos(todos);
            })
    }, []);

    const onTodoInputBlur = async (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }

        const createdTodo = await createTodo(todo);
        console.log(createTodo);
 
        setTodos((state) => [
            ...state,
            createdTodo
        ]);
        e.target.value = '';
    }

    const deleteTodoItemClickHandler = async (e, _id) => {
        e.stopPropagation();
        console.log(e);
        console.log('Delete ', _id);
        try {
            await deleteTodo(_id);
        } catch (err) {
            console.log(err);
        }
        setTodos(oldTodos =>{ 
            let updatedTodos = oldTodos.filter(x => x._id != _id);
            return [...updatedTodos];
        });
    }

    const toggleTodoItemClickHandler = (id) => {
        console.log(id, ' - Toggle');
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x => x._id == id);
            let selectTodoIndex = oldTodos.findIndex(x => x._id == id);
            let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };


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
                        key={x._id}
                        todo={x}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />)}
            </ul>
        </>
    );

}