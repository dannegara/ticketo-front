import React, { Component } from 'react';
import Events from './events';

interface State{

}

interface Props{

}

class Feed extends Component<State, Props>{

    render(){
        return(
            <div>
                <Events events={[{}]} />
            </div>
        )
    }
}
export default Feed;