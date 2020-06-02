import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './styles.scss';
import Button from '../button';

interface Props {
    src?: string,
    title: string,
    price: number,
    id: number,
    date: string,
    myEvents: boolean
}

export default (props: Props) => (
    <div className="cart-item">
        {props.src ? (
            <div className="image-container">
                <img src={props.src} alt="event" />
            </div>
            ):
            (
                <div className="no-image">No image found</div>
            )    
        }
        <h3>{props.title}</h3>
        <h4>{format(new Date(props.date), 'MM.dd.yyyy')}</h4>
        <h4>{props.price}</h4>
        {!props.myEvents && (
            <Link to={`/purchase/${props.id}`}><Button>Buy</Button></Link>
        )}
    </div>
)