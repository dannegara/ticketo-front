import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.scss';

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
            <div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                Purchase page
            </div>
        )
    }
}