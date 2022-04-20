import { useState, useEffect} from 'react';


const useFetch = (url) => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
                .then(result => {
                    setLoading(false);
                    setState(result.results);
                }).catch(err => {
                    setError(err);
                })
    }, [url]);

    return {
        state,
        loading,
        error
    };
}

export default useFetch;