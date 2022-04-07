// import styles from './TodoITem.module.css';
import './TodoITem.css';
import { useEffect } from 'react';

export default function TodoItem({
    todo,
    onDelete,
    onClick,
    
}) {
    useEffect(() => {
        console.log(todo._id, ' - Mounted');

        return () => {
            console.log('Unmounted - ', todo._id);
        }
    }, [todo._id]);
    let todoItemClasses = ['todo-item'];
    if(todo.isDone) {

        todoItemClasses.push('todo-item-done');
        console.log(todo.isDone)
    }
    
    return (
        // <li onClick={() => onClick(todo.id)} className={styles['todo-item']}> --name.module.css
        <li onClick={() => onClick(todo._id)} className={todoItemClasses.join(' ')}>
            {todo.text}
            <button className="list-item-btn" onClick={(e) => onDelete(e, todo._id)}>[X]</button>
        </li>
    );
}