import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { isAuth } from '../../hoc/isAuth';
import './MyList.css';



const MyList = ({
    user
}) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/african/images/random/3')
            .then(data => {
                return data.json()
            })
            .then(result => {
                setDogs(result.message);
            })

    }, []);

    return (
        <>
            <h2>{user.email}</h2>
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
        </>


    );
}

export default isAuth(MyList);