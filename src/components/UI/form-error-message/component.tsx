import React from 'react';
import './style.scss';

interface Props {
    text: string
}

export default (props: Props) => {
    return (
        <div className="error-message-container">
            <p>{props.text}</p>
        </div>
    )
}