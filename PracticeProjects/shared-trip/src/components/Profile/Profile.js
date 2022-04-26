
const Profile = () => {

    return (
        <section className="profile col-md-6 text-center col-lg" id="profile-page">
        <div className="profile-container">
            <img className="profile-img" src="../static/images/male.png" />
            <p>Email: <span>mihail_valkov@mail.bg</span></p>
        </div>
        <div className="profile-info">
            <p>Trips History: <span>3</span> counts</p>

            <div className="trips-info">
                <p>from <span>Svilengrad</span> to <span>Sofia</span> on <span>2021-06-16</span> at
                    <span>20:40</span></p>
                <p>from <span>Plovdiv</span> to <span>Burgas</span> on <span>2021-07-07</span> at <span>10:40</span>
                </p>
                <p>from <span>Sofia</span> to <span>Nesebur</span> on <span>2021-08-01</span> at <span>09:00</span>
                </p>

                <p>there are no offer trips yet...</p>
            </div>

        </div>
    </section>
    )
}

export default Profile;