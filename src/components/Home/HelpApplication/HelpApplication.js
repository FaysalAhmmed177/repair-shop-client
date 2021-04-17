import React from 'react';
import mobilePhone from '../../../images/mobilephone.png'

const HelpApplication = () => {
    return (
        <section className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-sm-12">
                    <h1>We can help you now, fill <br /> out an application!</h1><br />
                    <h6>Let us help! If your phone has a broken front glass, non-responsive buttons</h6>
                    <p className="text-secondary">Non eget orci, pretium wisi maecenas eu, adipiscing nulla quisque maecenas pellentesque, ac placerat parturient. Vitae urna orci tortor, eu integer. Fringilla ut sed. Ut phasellus suspendisse ut amet, animi scelerisque, arcu mauris mauris euismod ornare elit felis. Voluptatibus enim dolor, sem quisque turpis, ut vitae, vel dui lectus.</p><br />
                    <a href="#"><button className="btn btn-primary btn-lg">about us</button></a>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img style={{ width: '100%', height: '500px' }} src={mobilePhone} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HelpApplication;