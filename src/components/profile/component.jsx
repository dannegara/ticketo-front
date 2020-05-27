import React, { Component } from 'react';

export default class extends Component {

    state = {
        userId: this.props.match.params.userId
    }

    render() {
        console.log(this.state.userId);
        return (
            <div>Profile page</div>
        )
    }
}