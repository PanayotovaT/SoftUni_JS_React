const Edit = () => {

    return (
        <section id="edit-page">
            <div className="editSection">
                <div className="info">
                    <h2>Edit your own post!</h2>
                </div>

                <form action="#" method="" className="editForm">
                    <h2>Edit Post</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="inputFields" id="title" name="title"  />
                        </li>
                        <li>
                            <label htmlFor="key-word">Keyword:</label>
                            <input type="text" className="inputFields" id="keyword" name="keyword"  />
                        </li>
                        <li>
                            <label htmlFor="location">Location:</label>
                            <input type="text" className="inputFields" id="location" name="location"  />
                        </li>
                        <li>
                            <label htmlFor="date">Date of creation:</label>
                            <input type="text" className="inputFields" id="date" name="date"  />
                        </li>
                        <li>
                            <label htmlFor="image">Wildlife image:</label>
                            <input type="text" className="inputFields" id="image" name="imageUrl"  />
                        </li>
                        <li>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" className="inputFields" name="description"></textarea>
                        </li>
                        <li id="center-btn">
                            <button id="edit-btn">Update</button>
                        </li>
                    </ul>
                </form>

            </div>
        </section>

    );
}

export default Edit;