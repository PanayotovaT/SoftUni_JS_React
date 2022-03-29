const TodoListItem = (props) => {
    return (
        <li style={{color: props.color}}>{props.text}</li>
    );
}

export default TodoListItem;