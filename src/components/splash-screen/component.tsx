import React from 'react';
import Spinner from '../UI/spinner';
import './style.scss';

const SplashScreen: React.SFC = () => {
    return(
        <div className="splash-screen">
            <Spinner />
        </div>
    )
}

export default SplashScreen;