const TodoListItem = (props) => {
    if(props.count > 0) {
         return (
            <li style={{color: 'darkred'}}>{props.count} - {props.name}</li>
         );
    }
    return (
        <li style={{color: props.color}}>{props.count} - {props.name}</li>
    );
}

export default TodoListItem;