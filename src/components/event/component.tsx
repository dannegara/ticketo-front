import React, { Component } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { format } from 'date-fns';
import './style.scss';
import Button from '../UI/button';
import { getEvent } from '../../api/event';
import { addToCart } from '../../api/cart';
import { MAIN_URL } from '../../helpers/constants';

interface MatchParams{
    eventId: string;
}

interface Event {
    address: string
    city: string
    country_code: string
    country_id: number
    country_name: string
    description: string
    eventId: number
    event_date: Date
    event_time: string
    organizer_firstname: string
    organizer_id: number
    organizer_lastname: string
    poster?: string
    price: number
    title: string
}

interface IState{
    eventId: number
    event: Event
}

interface IProps extends RouteComponentProps<MatchParams>{
    isAuth: boolean
}

export default class extends Component<IProps, IState>{

    state = {
        eventId: +this.props.match.params.eventId,
        event: {
            address: "",
            city: "",
            country_code: "",
            country_id: 0,
            country_name: "",
            description: "",
            eventId: 0,
            event_date: new Date(),
            event_time: "",
            organizer_firstname: "",
            organizer_id: 0,
            organizer_lastname: "",
            poster: undefined,
            price: 0,
            title: ""
        }
    }

    async componentDidMount(){
        const { eventId } = this.state;
        try {
            const { data: event } = await getEvent(eventId);
            this.setState({ event });
        } catch (error) {
            console.log(error);
        }
    }

    addToCartHandler = async () => {
        const { eventId } = this.state
        const { isAuth } = this.props;
        if(!isAuth) this.props.history.push('/login');
        try {
            await addToCart(eventId);
            this.props.history.push('/cart');
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        const { eventId, event } = this.state;
        const { isAuth } = this.props;

        const link = isAuth ? `/purchase/${eventId}` : '/login';

        return(
            // hardcoded margin top
            <div style={{marginTop: 75}}>
                <div className="main-container">
                    <div className="poster-container">
                        <img src={event.poster ? `${MAIN_URL}${event.poster}` : ''} alt="Event Poster" />
                    </div>
                    <div className="info-container">
                        <div className="title-container">
                            <h1>{event.title}</h1>
                        </div>
                        <div className="where-when-container">
                            Where: { event.city }    When: {format(new Date(event.event_date), "dd.MM.yyyy")}
                        </div>
                        <div className="purchasing-container">
                            Price: <i>{event.price}$</i> 
                            <Link to={link}>
                                <Button>Buy</Button>
                            </Link>
                            <Button onClick={this.addToCartHandler}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{event.description}</p>
                </div>
            </div>
        )
    }
}