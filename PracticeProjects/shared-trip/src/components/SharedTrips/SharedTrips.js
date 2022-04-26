import { Link } from 'react-router-dom';

const SharedTrips = () => {

    return (
        <section className="container" id="shared-trips-page">
            <header className="trip">
                <h1>Welcome Sharetripers!</h1>
                <p className="lead">Sharedtrip is the best way to road across the country.</p>
                <p className="lead">Find yours Sharedtrip's buddies, when you share with us yours trip plans and let the
                    exploration begin!</p>
            </header>
            <div className="row text-center">

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top"
                            src="https://www.audi.bg/media/Theme_Menu_Model_Dropdown_Item_Image_Component/root-bg-model-modelMenu-editableItems-20246-dropdown-92336-image/dh-487-a0e9a6/9896f0b2/1585833686/audi-a5-sportback-2020.jpg"
                            alt="" />
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-route"></i> <span>Sofia</span> -
                                    <span>Haskovo</span></h5>
                                <h5 className="mt-4 card-info"><i className="far fa-calendar-alt"></i> Date: <span>2021-06-14</span>
                                </h5>
                                <h5 className="mt-4 card-info"><i className="far fa-clock"></i> Time: <span>14:03</span></h5>
                                <h5 className="mt-4"><i className="fas fa-hand-holding-usd"></i> Price: <span>25</span> BGN</h5>
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Details</a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top"
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cybertruck-1-1574399754.jpeg"
                            alt="" />
                            <div className="card-body">
                                <h5><i className="fas fa-route"></i> <span>Plovdiv</span> - <span>Sofia</span></h5>
                                <h5 className="mt-4 card-info"><i className="far fa-calendar-alt"></i> Date: <span>2021-06-16</span>
                                </h5>
                                <h5 className="mt-4 card-info"><i className="far fa-clock"></i> Time: <span>21:47</span></h5>
                                <h5 className="mt-4"><i className="fas fa-hand-holding-usd"></i> Price: <span>22</span> BGN</h5>
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Details</a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top"
                            src="https://www.nastarta.com/wp-content/uploads/2017/12/2018-mercedes-benz-cls-8.jpg"
                            alt="" />
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-route"></i> <span>Svilengrad </span> -
                                    <span>Sofia</span></h5>
                                <h5 className="mt-4 card-info"><i className="far fa-calendar-alt"></i> Date: <span>2021-06-16</span>
                                </h5>
                                <h5 className="mt-4 card-info"><i className="far fa-clock"></i> Time: <span>20:40</span></h5>
                                <h5 className="mt-4"><i className="fas fa-hand-holding-usd"></i> Price: <span>30</span> BGN</h5>
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Details</a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top"
                            src="https://www.nastarta.com/wp-content/uploads/2018/04/Mercedes-Benz-A-Class-2019-1280-3d.jpg"
                            alt="" />
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-route"></i> <span>Plovdiv</span> -
                                    <span>Burgas</span></h5>
                                <h5 className="mt-4 card-info"><i className="far fa-calendar-alt"></i> Date: <span>2021-07-07</span>
                                </h5>
                                <h5 className="mt-4 card-info"><i className="far fa-clock"></i> Time: <span>10:40</span></h5>
                                <h5 className="mt-4"><i className="fas fa-hand-holding-usd"></i> Price: <span>40</span> BGN</h5>
                            </div>
                            <div className="card-footer">
                                <a href="" className="btn btn-primary">Details</a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top"
                            src="https://autobild.bg/wp-content/uploads/2018/01/Mercedes-AMG-CLS-53-2018-Preis-Motor-Infos-1200x800-dffb5975c6d73154.jpg"
                            alt="" />
                            <div className="card-body">
                                <h5 className="card-title"><i className="fas fa-route"></i> <span>Sofia</span> -
                                    <span>Nesebur</span></h5>
                                <h5 className="mt-4 card-info"><i className="far fa-calendar-alt"></i> Date: <span>2021-08-01</span>
                                </h5>
                                <h5 className="mt-4 card-info"><i className="far fa-clock"></i> Time: <span>09:00</span></h5>
                                <h5 className="mt-4"><i className="fas fa-hand-holding-usd"></i> Price: <span>25</span> BGN</h5>
                            </div>
                            <div className="card-footer">Link
                                <Link to="/details" className="btn btn-primary">Details</Link>
                            </div>
                    </div>
                </div>

                <div className="no-trips">
                    <img src="https://www.stagweb.co.uk/img/activities/big/sexyhitchhiker1.jpg" />
                    <p className="lead">Hitchhiker time...</p>
                </div>

            </div>
        </section>
    );
}

export default SharedTrips;