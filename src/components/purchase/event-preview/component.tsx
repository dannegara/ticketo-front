import React from 'react';
import './style.scss';

const EventPreview = () => {
    return(
        <div className="event-preview">
            <img src="https://www.wearethepit.com/wp-content/uploads/2019/08/Screen-Shot-2019-07-24-at-3.50.45-PM.png" alt="event" />
            <div>
                <h1>Title</h1>
                <i>12.00$</i>
            </div>
        </div>
    )
}

export default EventPreview;