import React from 'react';
import './styles.scss';

interface IProps {
    content: string
}

export default (props: IProps) => (
    <div className="snackbar">
        <span>{props.content}</span>
    </div>
)