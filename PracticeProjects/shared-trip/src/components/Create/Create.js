import  { useNavigate } from 'react-router-dom';

import isAuth from '../../hoc/isAuth';
import * as tripService from '../../services/tripService';

const Create = () => {
    const navigate = useNavigate();

    const createHandler = (e) => {
        e.preventDefault();

        const formData =  new FormData(e.currentTarget);

        const startPoint = formData.get('startPoint').trim();
        const endPoint = formData.get('endPoint').trim();
        const date = formData.get('date').trim();
        const time = formData.get('time').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const brand = formData.get('brand').trim();
        const seats = Number(formData.get('seats').trim());
        const price = Number(formData.get('price').trim());
        const description = formData.get('description').trim();

        const trip = {
            startPoint,
            endPoint,
            date,
            time,
            imageUrl,
            brand,
            seats,
            price,
            description,
            buddies: [],

        }

     tripService.create(trip)
        .then(result => {
            navigate('/shared-trips');
        })

    }
    return (
        <section className="py-5" id="offer-trip-page">
            <div className="container offer-trip">
                <h1>Offer trip</h1>
                <div>
                    <form  method="POST" onSubmit={createHandler}>
                        <div className="offer-label">
                            <label htmlFor="startPoint"> <i className="fas fa-map-marker-alt"></i> Starting Point </label>
                            <label htmlFor="endPoint"> <i className="fas fa-map-marker-alt"></i> End Point</label>
                        </div>
                        <div className="form-group offer-input">
                            <input type="text" className="form-control-2" id="startPoint" placeholder="Studentski grad"
                                name="startPoint" />
                            <input type="text" className="form-control-2" id="endPoint" placeholder="Pamporovo" name="endPoint"
                                />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="date"> <i className="far fa-calendar-alt"></i> Date</label>
                            <label htmlFor="time"> <i className="far fa-clock"></i> Time</label>
                        </div>
                        <div className="form-group offer-input">
                            <input type="date" className="form-control-2" id="date" placeholder="18 May 2021" name="date"
                               />
                            <input type="time" className="form-control-2" id="time" placeholder="19:00 PM" name="time"
                                />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="carImage">Car Image</label>
                            <label htmlFor="carBrand">Car Brand</label>
                        </div>
                        <div className="form-group offer-input">
                            <input type="text" className="form-control-2" id="carImage" placeholder="https://..." name="imageUrl"
                               />
                            <input type="text" className="form-control-2" id="carBrand" placeholder="Audi" name="brand" />
                        </div>
                        <div className="offer-label">
                            <label htmlFor="seats">Available Seats</label>
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="form-group offer-input">
                            <input type="text" className="form-control-2" id="seats" placeholder="4" name="seats" />
                            <input type="text" className="form-control-2" id="price" placeholder="25" name="price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="Information about the trip"
                                name="description"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default isAuth(Create);