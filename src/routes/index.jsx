import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import Feed from '../components/feed';
import Event from '../components/event';
import Purchase from '../components/purchase';
import ProtectedRoute from '../helpers/ProtectedRoute';
import NotFound from '../components/not-found';
import Cart from '../components/cart';
import Profile from '../components/profile';
import PurchseStatus from '../components/purchase-status';
import AddEvent from '../components/add-event';
import MyEvents from '../components/my-events';

export default () => (
    <Switch>
        <Route path="/" exact>
            <Feed />
        </Route>
        <ProtectedRoute
            component={Login}
            exact
            requireAuth={false}
            path="/login"
        />
        <ProtectedRoute 
            component={Register}
            exact
            requireAuth={false}
            path="/register"
        />
        <ProtectedRoute 
            component={Cart}
            exact
            requireAuth={true}
            path="/cart"
        />
        <ProtectedRoute 
            component={Profile}
            exact
            requireAuth={true}
            path="/profile/:userId?"
        />
        <ProtectedRoute 
            component={AddEvent}
            exact
            requireAuth
            path="/add-event"
        />
        <ProtectedRoute 
            component={MyEvents}
            exact
            requireAuth
            path="/my-events"
        />
        <Route path="/event/:eventId" exact component={Event} />
        <Route path="/purchase/status" exact component={PurchseStatus} />
        <Route path="/purchase/:eventId" exact component={Purchase} />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect to="/not-found" />
    </Switch>
)