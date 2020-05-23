import React from 'react';
import './style.scss';

export default ({
    children,
    ...rest
}: any) => {
    return(
        <button className="default-button" {...rest}>{children}</button>
    )
}