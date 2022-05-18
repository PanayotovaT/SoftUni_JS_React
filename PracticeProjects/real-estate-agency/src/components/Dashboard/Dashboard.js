import DashboardCard from './DashboardCard';
import useEstates from '../../hooks/useEstates';

const Dashboard = () => {
    const [ estates ] = useEstates();
    
    return (
        <section id="all-listings">
            <h1>Apartments for recents</h1>
            {estates.length > 0
                ? estates.map(x => <DashboardCard key={x._id} card={x} />)
                : (
                    <div className="no-data-listing">
                        <p className="no-offer">There are no housing offers found...</p>
                    </div>
                )

            }

        </section>
    );
}

export default Dashboard;