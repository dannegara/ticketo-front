import React, { HTMLProps } from 'react';
import './style.scss';

export default (props: HTMLProps<HTMLButtonElement>) => {
    return(
        <button className="default-button">{props.children}</button>
    )
}