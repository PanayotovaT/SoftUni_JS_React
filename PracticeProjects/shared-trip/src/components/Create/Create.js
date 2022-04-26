const Create = () => {

    return (
        <section className="py-5" id="offer-trip-page">
            <div className="container offer-trip">
                <h1>Offer trip</h1>
                <div>
                    <form action="" method="">
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
                                name="descritpion"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Create;