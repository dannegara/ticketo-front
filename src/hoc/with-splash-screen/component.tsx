import React, { Component } from 'react';
import SplashScreen from '../../components/splash-screen';

const withSplashScreen = (WrapperComponent: React.ComponentClass) => {
    return class extends Component{
        state = {
            loading: true
        }
         
        //Dummy async operation stimulation
        componentDidMount(){
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        }
        render(){
            const { loading } = this.state;
            
            if(loading) return <SplashScreen />

            return <WrapperComponent {...this.props} />
        }
    }
}

export default withSplashScreen;