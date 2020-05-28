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
            this.setState({ events: data });
        }catch(e) {
            console.log('Error' + e);
        }
    }

    render(){
        const { events } = this.state;
        console.log(events);
        
        return(
            <div>
                <Events events={[{}]} />
            </div>
        )
    }
}
export default Feed;