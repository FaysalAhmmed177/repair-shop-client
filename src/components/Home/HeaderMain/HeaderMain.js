import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="headerMain d-flex align-items-center">
           <div className="container">
           <h1 className="pb-4 text-white"> <b>Fastest repair your <br/> Smartphones</b> </h1>
           <button className="btn btn-primary">Read More</button>
           </div>
        </main>
    );
};

export default HeaderMain;