
const Edit = () => {

    return (
        <section className="py-5" id="edit-trip-page">
        <div className="container edit">
            <h1>Edit trip</h1>
            <div>
                <form action="#" method="POST">
                    <div className="edit-label">
                        <label htmlFor="startPoint"> <i className="fas fa-map-marker-alt"></i> Starting Point</label>
                        <label htmlFor="endPoint"> <i className="fas fa-map-marker-alt"></i> End Point</label>
                    </div>
                    <div className="form-group edit-input">
                        <input type="text" className="form-control-2" id="startPoint" name="startPoint" />
                        <input type="text" className="form-control-2" id="endPoint" name="endPoint" />
                    </div>
                    <div className="edit-label">
                        <label htmlFor="date"> <i className="far fa-calendar-alt"></i> Date</label>
                        <label htmlFor="time"> <i className="far fa-clock"></i> Time</label>
                    </div>
                    <div className="form-group edit-input">
                        <input type="date" className="form-control-2" id="date" name="date" />
                        <input type="time" className="form-control-2" id="time" name="time" />
                    </div>
                    <div className="edit-label">
                        <label htmlFor="carImage">Car Image</label>
                        <label htmlFor="carBrand">Car Brand</label>
                    </div>
                    <div className="form-group edit-input">
                        <input type="text" className="form-control-2" id="carImage" name="imageUrl" />
                        <input type="text" className="form-control-2" id="carBrand" name="brand" />
                    </div>
                    <div className="edit-label">
                        <label htmlFor="seats">Available Seats</label>
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="form-group edit-input">
                        <input type="text" className="form-control-2" id="seats" name="seats" />
                        <input type="text" className="form-control-2" id="price" name="price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" name="description" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Edit;