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
        <Route path="/event/:eventId" exact component={Event} />
        <Route path="/purchase/:eventId" exact component={Purchase} />
        <Route path="/not-found" exact component={NotFound} />
        <Redirect to="/not-found" />
    </Switch>
)