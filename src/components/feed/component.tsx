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
            //Handling error
        }
    }

    render(){
        const { events } = this.state;
        
        return(
            <div>
                <Events events={events} />
            </div>
        )
    }
}
export default Feed;