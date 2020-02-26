import React, { Component } from 'react';

const withSplashScreen = (WrapperComponent: React.ComponentClass) => {
    return class extends Component{
        state = {
            loading: true
        }
        
        componentDidMount(){
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        }
        render(){
            const { loading } = this.state;
            
            if(loading) return <div>Loading...</div>

            return <WrapperComponent {...this.props} />
        }
    }
}

export default withSplashScreen;