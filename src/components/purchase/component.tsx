import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.scss';
import Button from '../UI/button';
import PurchaseForm from './purchase-form';
import EventPreview from './event-preview';

interface MatchParams{
    eventId: string;
}

interface ICreditCardForm{
    dayMonth: string;
}

interface IState{
    eventId: string;
    creditCardForm: ICreditCardForm
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
        eventId: this.props.match.params.eventId,
        creditCardForm: {
            dayMonth: ''
        }
    }

    componentDidMount(){
        console.log(this.state.eventId);
    }

    creditCardNumberChange = (event: React.FormEvent<HTMLInputElement>, index: number): void => {
        const { value } = event.currentTarget;
        //Adding any in order to avoid dom typescript typing errors
        const inputs: any = document.getElementsByClassName('card-number-input');
        //Auto focus to next inputs
        if(value.length >= 4 && index < 3){
            inputs[index + 1].focus();
        }
        if(index === 3 && value.length >= 4){
            document.getElementById('credit-card-month')?.focus();
        }
    }

    creditCardMonthChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;
        let dayMonthValue = value;
        if(value.length === 2){
            dayMonthValue+="/"
        }
        if(value.length === 5){
            document.getElementById('cvv')?.focus();
        }
        this.setState(prevState => ({
            creditCardForm:{
                ...prevState.creditCardForm,
                dayMonth: dayMonthValue
            }
        }));
    }

    render(){
        const { creditCardForm } = this.state;
        return(
            <div className="purchase-page-container">
                <div className="purchase-card">
                    <div className="event-info">
                        <EventPreview />
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
                            <input 
                                id="credit-card-month" 
                                onChange={this.creditCardMonthChange} 
                                placeholder="MM/YY"
                                value={creditCardForm.dayMonth}
                            /> 
                            <input id="cvv" maxLength={3} placeholder="CVV" />
                        </div>
                    </div>
                    <Button>Purchase</Button>
                    <PurchaseForm />
                </div>
            </div>
        )
    }
}