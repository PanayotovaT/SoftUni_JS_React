import { useEffect } from 'react';

const Counter =({
    value
}) => {
    useEffect(() => {
        console.log(value);

        return () => {
            console.log('Unmount');
        }
    }, [value])
    return (
        <p>{value}</p>
    );
}

export default Counter;