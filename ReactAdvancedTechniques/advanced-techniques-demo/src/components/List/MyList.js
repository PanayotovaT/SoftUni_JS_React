import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './MyList.css';
import { useAuth } from '../../contexts/AuthContext';



const MyList = () => {
    const navigate = useNavigate();
    const [dogs, setDogs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/african/images/random/3')
            .then(data => {
                return data.json()
            })
            .then(result => {
                setDogs(result.message);
            })

    }, []);

    if(!user.email) {
        return navigate('/login');
    }

    return (
        <Carousel className="carousel-img">
            {dogs.map(x => (
                <Carousel.Item key={x} className="carousel-img-item" >
                    <img
                        className="d-block w-100"
                        src={x}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>


    );
}

export default MyList;