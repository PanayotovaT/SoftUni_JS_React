import React, { useState} from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {
    // let todoState = React.useState(['Clean your room', 'Go Shooping', 'Learn React', 'Read a book']);
    // let todos = todoState[0];
    // let setTodos = todoState[1];

    let [todos, setTodos] = useState(['Clean your room', 'Go Shooping', 'Learn React', 'Read a book'])

    console.log(todos);

    return (

        <React.Fragment>
            <h2>Tasks</h2>
            <ul>
                {todos.map(x => <TodoListItem text={x} />)}
            </ul>
            <button onClick={()=> setTodos([...todos, 'Modified'])}>Modify</button>
        </React.Fragment>

    )

}

export default TodoList;