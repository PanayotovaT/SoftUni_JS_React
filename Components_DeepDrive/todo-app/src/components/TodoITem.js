export default function TodoItem({
    todo,
    onDelete
}) {

    return ( 
        <li >{todo.text} <button onClick={()=> onDelete(todo.id)}>[X]</button></li>
    );
}