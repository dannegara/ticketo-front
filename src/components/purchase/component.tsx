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

export default class extends Component<IProps, IState>{

    state = {
        eventId: this.props.match.params.eventId
    }

    componentDidMount(){
        console.log(this.state.eventId);
    }

    render(){
        return(
            <div className="purchase-page-container">
                <div className="purchase-card">
                    <div className="event-info">

                    </div>
                    <div className="credit-card">

                    </div>
                    <Button>Purchase</Button>
                </div>
            </div>
        )
    }
}