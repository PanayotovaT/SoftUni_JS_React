const TodoListItem = (props) => {
    let color = 'black';

    if (props.count > 3) {
        color = 'darkblue';

    } else if (props.count > 0) {
        color = 'darkred';
    }

    return (
        <li style={{ color }}>{props.count} - {props.name}</li>
    );
}

export default TodoListItem;