import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.scss';
import Button from '../UI/button';

interface MatchParams{
    eventId: string;
}

interface IState{
    eventId: string;
}

interface IProps extends RouteComponentProps<MatchParams>{}

const creditCardInputs = [
    {
        type: 'number',
        className: 'card-number-input'
    },
    {
        type: 'number',
        className: 'card-number-input'
    },
    {
        type: 'number',
        className: 'card-number-input'
    },
    {
        type: 'number',
        className: 'card-number-input'
    }
]

export default class extends Component<IProps, IState>{

    state = {
        eventId: this.props.match.params.eventId
    }

    componentDidMount(){
        console.log(this.state.eventId);
    }

    creditCardNumberChange = (event: React.FormEvent<HTMLInputElement>, index: number): void => {
        const { value } = event.currentTarget;
        const inputs: any = document.getElementsByClassName('card-number-input');
        if(value.length >= 4 && index < 3){
            inputs[index + 1].focus();
        }
    }

    creditCardMonthChange = (event: React.FormEvent<HTMLInputElement>): void => {
        console.log(event.currentTarget.value);
    }

    render(){
        return(
            <div className="purchase-page-container">
                <div className="purchase-card">
                    <div className="event-info">

                    </div>
                    <div className="credit-card">
                        <div className="credit-card-number-container">
                            {creditCardInputs.map((input, index) => (
                                <input
                                    className={input.className}
                                    onChange={e => this.creditCardNumberChange(e, index)}
                                    type="number"
                                    key={index}
                                    placeholder="0000"
                                />
                            ))}
                        </div>
                        <div className="credit-card-month-code-container">
                            <input onChange={this.creditCardMonthChange} placeholder="MM/YY" /> <input maxLength={3} placeholder="CVV" />
                        </div>
                    </div>
                    <Button>Purchase</Button>
                </div>
            </div>
        )
    }
}