import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import HelpApplication from '../HelpApplication/HelpApplication';
import PricingTable from '../PricingTable/PricingTable';
import ServiceArea from '../ServiceArea/ServiceArea';
import Services from '../Services/Services';
import UsersReviews from './../UsersReviews/UsersReviews';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <ServiceArea />
            <HelpApplication />
            <PricingTable />
            <Services />
            <UsersReviews />
            <Footer />
        </div>
    );
};

export default Home;