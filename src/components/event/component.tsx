import React, { Component } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
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
        const { eventId } = this.state;
        return(
            // hardcoded margin top
            <div style={{marginTop: 75}}>
                <div className="main-container">
                    <div className="poster-container">
                        <img src={"https://www.wearethepit.com/wp-content/uploads/2019/08/Screen-Shot-2019-07-24-at-3.50.45-PM.png"} alt="Event Poster" />
                    </div>
                    <div className="info-container">
                        <div className="title-container">
                            <h1>Title</h1>
                        </div>
                        <div className="where-when-container">
                            Where: Bucharest    When: 10-10-2020
                        </div>
                        <div className="purchasing-container">
                            Price: <i>10.00$</i> 
                            <Link to={`/purchase/${eventId}`}>
                                <Button>Buy</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, expedita illo quod repellendus aperiam, error earum obcaecati pariatur ea dignissimos nesciunt culpa quis aliquam, accusantium iste asperiores. Quod, dolorum harum?</p>
                </div>
            </div>
        )
    }
}