import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [user, setUser] = useState(() => {
        try {
            let item  = localStorage.getItem(key);
            return item ? 
                JSON.parse(item) 
                : initialValue;

        } catch(err) {
            console.error(err)
            return initialValue;
        }
    })

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setUser(value);

        }catch(err) {
            console.error(err);
        }

    }
    return [
        user,
        setItem
    ]
}

export default useLocalStorage;