import { useState, useEffect } from 'react';
import * as postService from '../services/postService';

const usePost = (postId) => {
    const [ state, setState ] = useState({});

    useEffect(() => {
        postService.getOne(postId)
            .then(data => {
                setState(data);
            })
    }, [postId]);


    return [state, setState]
}

export default usePost;