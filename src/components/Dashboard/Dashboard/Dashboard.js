import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import { Link, useRouteMatch } from 'react-router-dom';
import AddService from './../AddService/AddService';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import Book from './../Book/Book';
import ManageService from '../ManageService/ManageService';
import BookingList from '../BookingList/BookingList';
import PrivateRoute from './../../PrivateRoute/PrivateRoute';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { path, url } = useRouteMatch();

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Switch>
                    <PrivateRoute path={`${path}/book/:id`}>
                        <Book />
                    </PrivateRoute>
                    <Route path={`${path}/bookingList`}>
                        <BookingList />
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/orderList`}>
                        <OrderList />
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageService`}>
                        <ManageService />
                    </Route>
                    <Route path={`${path}/setting`}>

                    </Route>
                    <Route exact path={`${path}`}>
                        <BookingList />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;