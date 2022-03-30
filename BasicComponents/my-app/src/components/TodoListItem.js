const TodoListItem = (props) => {
    return (
        <li style={{color: props.color}}>{props.text} - {props.name}</li>
    );
}

export default TodoListItem;