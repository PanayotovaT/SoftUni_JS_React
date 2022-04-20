import { useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const Counter =({
    // value
}) => {
    const {count: value} = useContext(AuthContext);
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