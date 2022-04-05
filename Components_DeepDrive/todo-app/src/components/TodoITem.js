import  { useEffect } from 'react';

export default function TodoItem({
    todo,
    onDelete
}) {
    useEffect(() => {
        console.log(todo.id, ' - Mounted');

        return () => {
            console.log('Unmounted - ', todo.id);
        }
    }, [])
    return ( 
        <li >{todo.text} <button onClick={()=> onDelete(todo.id)}>[X]</button></li>
    );
}