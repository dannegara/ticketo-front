import React, { useEffect, useState } from 'react';
import './style.scss';
import { getEvent } from '../../../api/event';
import { MAIN_URL } from '../../../helpers/constants';

interface Props {
    eventId: string
}

const EventPreview = (props: Props) => {
    const { eventId } = props;
    const [event, setEvent] = useState({poster: '', title: '', price: 0});
    useEffect(() => {
        (async () => {
            const { data } = await getEvent(+eventId);
            setEvent(data);
        })()
    }, [eventId]);
    return(
        <div className="event-preview">
            <img src={`${MAIN_URL}${event.poster}`} alt="event" />
            <div>
                <h1>{event.title}</h1>
                <i>{event.price}$</i>
            </div>
        </div>
    )
}

export default EventPreview;