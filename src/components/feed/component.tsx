import React, { Component } from 'react';
import Events from './events';
import { getEvents } from '../../api/event';

interface State{

}

interface Props{

}

class Feed extends Component<State, Props>{

    state = {
        isLoading: true,
        events: []
    }

    async componentDidMount() {
        try {
            const { data } = await getEvents();
            console.log(data);
        }catch(e) {
            console.log('Error' + e);
        }
    }

    render(){
        return(
            <div>
                <Events events={[{}]} />
            </div>
        )
    }
}
export default Feed;