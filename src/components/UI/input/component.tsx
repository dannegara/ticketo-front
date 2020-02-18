import React, { HTMLProps } from 'react';
import './style.scss';

export default (props: HTMLProps<HTMLInputElement>) => (
    <input {...props} />
)