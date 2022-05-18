import { useState } from 'react';

import SearchCard from './SearchCard';
import * as estateService from '../../services/estateService';


const Search = () => {
    const [estates, setEstates] = useState([]);

    const searchHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchedData = formData.get('searchedData');

        estateService.searchItems(searchedData)
            .then(res => {
                setEstates(res);
            })
            .catch(err => {
                console.error(err.message);
                return;
            })
    }

    return (
        <>
            <form className="search" method="POST" onSubmit={searchHandler}>
                <input type="search" name="searchedData" placeholder="Search here..." />
                <button type="submit" >Search</button>
            </form>
            <section id="find-section">
                {estates.length > 0
                    ? estates.map(x => <SearchCard key={x._id} card={x} />)
                    : (
                        <div className="no-data-listing">
                            <p className="no-offer">No match was found for the submitted type...</p>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default Search;