import React, { Component } from 'react';
import { getCart } from '../../api/cart';
import CartItem from '../UI/cart-item';
import './styles.scss';

export default class extends Component<any, any> {

    state = {
        cartItems: []
    }

    async componentDidMount() {
        const { data } = await getCart();
        this.setState({ cartItems: data });
    }

    render() {
        const { cartItems } = this.state;
        
        return (
            <div className="cart">
                {cartItems.map((item: any, index: number) => (
                    <CartItem 
                        key={index}
                        id={item.eventId}
                        src={item.poster}
                        title={item.title}
                        price={item.price}
                        date={item.eventDate}
                        myEvents={false}
                    />
                ))}
            </div>
        )
    }
}