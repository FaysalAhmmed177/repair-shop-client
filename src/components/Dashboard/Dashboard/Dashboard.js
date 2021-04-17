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
import BookList from '../BookList/BookList';
import ManageService from '../ManageService/ManageService';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { path, url } = useRouteMatch();

    return (
        <div className="row dashboardStyle">
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8 dashboardRightSide">
                <Switch>

                    <Route path={`${path}/book`}>
                        <Book />
                    </Route>
                    <Route path={`${path}/bookList`}>
                        <BookList />
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
                        <AddService />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;