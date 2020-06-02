import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'
import './style.scss';
import { MAIN_URL } from '../../../helpers/constants';

interface IEventProps{
    logo: string,
    organizerName: string,
    organizerLink: string,
    eventName: string,
    eventDate: string,
    description: string,
    eventId: number,
    price: number,
    posterUrl: string
}

const EventPreview: SFC<IEventProps> = ({
    logo,
    organizerName,
    organizerLink,
    eventName,
    eventDate,
    description,
    eventId,
    price,
    posterUrl,
}) => {
    const style = posterUrl ? {backgroundImage: `url(${MAIN_URL}${posterUrl})`} : {backgroundColor: 'black'}
    return(
        <div className="event-preview-container" style={style}>
            <div className="organizer-info">
                <div className="organizer-logo">
                    <img src={logo} alt="organizer logo" />
                </div>
                <div className="organizer">
                    <div className="organizer-name">{organizerName}</div>
                    <div className="organizer-link">
                        <Link to={`/profile/1`}>@{organizerLink}</Link>
                    </div>
                </div>
            </div>
            <div className="main-info">
                <div className="event-info">
                    <span>{eventName}</span> 
                    <span>{format(new Date(eventDate), "dd.MM.yyyy")}</span>
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