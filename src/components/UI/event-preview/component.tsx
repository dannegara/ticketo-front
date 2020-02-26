import React, { SFC } from 'react';
import { TiTicket } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import './style.scss';

interface IEventProps{
    logo: string,
    organizerName: string,
    organizerLink: string,
    eventName: string,
    eventDate: string,
    ticketCount: number,
    description: string,
    eventId: number,
    price: number
}

const EventPreview: SFC<IEventProps> = ({
    logo,
    organizerName,
    organizerLink,
    eventName,
    eventDate,
    ticketCount,
    description,
    eventId,
    price,
}) => {
    return(
        <div className="event-preview-container">
            <div className="organizer-info">
                <div className="organizer-logo">
                    <img src={logo} alt="organizer logo" />
                </div>
                <div className="organizer">
                    <div className="organizer-name">{organizerName}</div>
                    <div className="organizer-link">
                        <Link to={`/event/${eventId}`}>@{organizerLink}</Link>
                    </div>
                </div>
            </div>
            <div className="main-info">
                <div className="event-info">
                    <span>{eventName}</span> 
                    <span>{eventDate}</span>
                    <span>Tickets sold: {ticketCount} <TiTicket /></span>
                </div>
                <div className="description">
                    {description}
                </div>
                <div className="view-price">
                    <span>Price: <i>{price}$</i></span>
                    <Link to={`/event/${eventId}`}>View</Link>
                </div>
            </div>
        </div>
    )
}
export default EventPreview;