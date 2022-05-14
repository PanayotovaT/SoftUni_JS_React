import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as postService from '../services/postService';

const usePost = (postId) => {
    const [ state, setState ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOne(postId)
            .then(data => {
                setState(data);
            })
            .catch(err => {
                // console.error(err);
                navigate('/not-found');
                return;
            })
    }, [postId, navigate]);


    return [state, setState]
}

export default usePost;