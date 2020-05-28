import React from 'react';
import {
    FaCheck
} from 'react-icons/fa';
import './style.scss';

export default () => (
    <div className="status">
        <FaCheck />
        <h1>Successfully paid</h1>
        <h3>Check your email!</h3>
    </div>
)