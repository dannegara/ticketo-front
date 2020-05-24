import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = (props) => {
    const { component, isAuth, requireAuth, ...rest } = props;
    if((requireAuth && isAuth) || (!requireAuth && !isAuth))
        return <Route component={component} {...rest} />
    else
        return <Redirect to="/" />
}

export default connect(
    (state) => ({
        isAuth: state.auth.isAuth
    })
)(ProtectedRoute);