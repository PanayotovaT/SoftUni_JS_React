import { Routes, Route, Link } from 'react-router-dom';
import CategoryPetList from '../PetList/CategoryPetList';
import PetList from '../PetList/PetList';

const Home = () => {

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section className="type-section">
                <h3>Categories</h3>
                <Link className="button type" to="">All</Link>
                <Link className="button type" to="cat">Cat</Link>
                <Link className="button type" to="dog">Dog</Link>
                <Link className="button type" to="horse">Horse</Link>
            </section>
            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/dog" element={<CategoryPetList type="dog" />} />
                    <Route path="/horse" element={<CategoryPetList type="horse" />} />
                    <Route path="/cat" element={<CategoryPetList type="cat" />} />
                </Routes>
            </section>

        </section>
    );
};

export default Home;
