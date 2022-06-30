const Create = () => {

    return (
        <form className="theater-form"  method="POST">
            <h1>Create Theater</h1>
            <div>
                <label htmlFor="title">Theater Title:</label>
                <input type="text" placeholder="Theater name" name="title" />
            </div>
            <div>
                <label htmlFor="description">Theater Description:</label>
                <textarea placeholder="Description" name="description" />
            </div>
            <div>
                <label htmlFor="imageUrl">Image url:</label>
                <input type="text" placeholder="Image Url" name="imgUrl"/>
            </div>
            <div className="check">
                <input type="checkbox" id="check-box" name="check" />
                    <label htmlFor="check-box">Public</label>
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default Create;