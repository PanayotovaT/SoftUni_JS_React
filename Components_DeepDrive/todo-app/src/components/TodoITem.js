// import styles from './TodoITem.module.css';
import './TodoITem.css';
import { useEffect } from 'react';

export default function TodoItem({
    todo,
    onDelete,
    onClick
}) {
    useEffect(() => {
        console.log(todo.id, ' - Mounted');

        return () => {
            console.log('Unmounted - ', todo.id);
        }
    }, [todo.id]);
    
    return (
        // <li onClick={() => onClick(todo.id)} className={styles['todo-item']}> --name.module.css
        <li onClick={() => onClick(todo.id)} className={todo.isDone ? 'todo-item-done': ''}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>[X]</button>
        </li>
    );
}