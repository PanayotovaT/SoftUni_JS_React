import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        //check if exists
        try {
            let item = localStorage.getItem(key);

            return item ? JSON.parse(item)
                : initialValue;

        } catch (err) {
            console.error(err);
            return initialValue;
        }
    })

    const setItem = (value) => {
        //TODO: Add support for functions
        //save to localStorage
        //save to state
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);

        } catch (err) {
            console.error(err);

        }
    }
    return [
        state,
        setItem
    ];

}

export default useLocalStorage;