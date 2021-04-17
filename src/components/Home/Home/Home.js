import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ClientSay from '../ClientsSay/ClientSay';
import Header from '../Header/Header';
import HelpApplication from '../HelpApplication/HelpApplication';
import ServiceArea from '../ServiceArea/ServiceArea';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <ServiceArea />
            <HelpApplication />
            <ClientSay />
            <Footer />
        </div>
    );
};

export default Home;