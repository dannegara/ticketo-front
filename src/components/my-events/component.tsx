import React, { Component } from 'react';
import { getEvents } from '../../api/event';
import Card from '../UI/cart-item';
import './styles.scss';

interface Profile {
    email: string
    firstname: string
    id: number
    lastname: string
    username: string
}

interface Props {
    profile: Profile
}

export default class extends Component<Props> {

    state = {
        events: []
    }

    async componentDidMount() {
        const { data: events } = await getEvents(this.props.profile.id);
        this.setState({ events });
    }

    render() {
        const { events } = this.state;
        console.log(events);
        return (
            <div style={{marginTop: 100}} className="my-events">
                {events.map((item: any, index: number) => (
                    <Card 
                        key={index}
                        id={item.eventId}
                        src={item.poster}
                        title={item.title}
                        price={item.price}
                        date={item.event_date}
                    />
                ))}
            </div>
        )
    }
}