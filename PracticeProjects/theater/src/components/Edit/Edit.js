const Edit = () => {

    return (
        <form class="theater-form" method="POST">
            <h1>Edit Theater</h1>
            <div>
                <label for="title">Theater Title:</label>
                <input type="text" placeholder="Theater name" name="name" />
            </div>
            <div>
                <label for="description">Theater Description:</label>
                <textarea placeholder="Description" name="description" />
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input type="text" placeholder="Image Url" name="imageUrl" />
            </div>
            <div class="check">
                <input type="checkbox" id="check-box" name="check" />
                    <label for="check-box">Public</label>
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    );
}

export default Edit;