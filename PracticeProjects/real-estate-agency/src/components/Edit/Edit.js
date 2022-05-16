const Edit = () => {

    return (
        <section id="edit-page">
            <div className="edit-container">
                <div className="box-image">

                </div>
                <h2 className="box-heading">
                    Edit Home
                </h2>

                <form className="form" method="POST">
                    <div className="input">
                        <input type="text" className="input-field" id="home-name" name="name" />
                        <label className="home-name">Name:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="type" name="type" />
                        <label className="type">Property Type:</label>
                    </div>
                    <div className="input">
                        <input type="number" className="input-field" id="year" name="year" />
                        <label className="year">Year Built:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="city" name="city" />
                        <label className="city">City</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="homeImage" name="imageUrl" />
                        <label className="homeImage">Home Image:</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="description" name="description" />
                        <label className="description">Property Description:</label>
                    </div>

                    <div className="input">
                        <input type="number" className="input-field" id="availablePieces" name="availablePieces" />
                        <label className="availablePieces">Available pieces:</label>
                    </div>

                    <div className="create-action">
                        <button className="create-button">Edit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Edit;