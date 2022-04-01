import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

// function TodoList() {
//     // let todoState = React.useState(['Clean your room', 'Go Shooping', 'Learn React', 'Read a book']);
//     // let todos = todoState[0];
//     // let setTodos = todoState[1];

//     let [todos, setTodos] = useState(['Clean your room', 'Go Shooping', 'Learn React', 'Read a book'])

//     console.log(todos);

//     return (

//         <React.Fragment>
//             <h2>Tasks</h2>
//             <ul>
//                 {todos.map(x => <TodoListItem text={x} />)}
//             </ul>
//             <button onClick={()=> setTodos([...todos, 'Modified'])}>Modify</button>
//         </React.Fragment>

//     )

// }


function TodoList() {

    let [count, setCount] = useState(0);
    let [name, setName] = useState('');

    const addButtonHandler = () => {
        setCount(count + 1);
        setName('Alex')
    }

    const subtractButtonHandler = () => {
        setCount(count - 1);
        setName('Sofi')
    }

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            {name && <h2>Counter - {name}</h2>}
            {
            name 
                ? name == 'Alex'
                    ? <h3>Alex is a boy!</h3>
                    : <h3>Sofi is a girl!</h3>
                : ''
            }

            <ul>
                <TodoListItem count={count} name={name}></TodoListItem>
            </ul>
            {/* <input type="text" onChange={inputChangeHandler} /> */}
            <input type="text" onBlur={inputChangeHandler} />
            <button onClick={addButtonHandler}>+</button>
            <button onClick={subtractButtonHandler}>-</button>
            {/* <button onClick={setCount.bind(null, count + 1)}>+</button> */}
        </>

    )

}
export default TodoList;