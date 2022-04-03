export default function TodoList() {

    const todos = [
        'Clean my room',
        'Learn React',
        'Go shopping'
    ]
    return (
        <ul>
           {todos.map(x => <li key={x}>{x}</li>)} 
        </ul>
    );

}