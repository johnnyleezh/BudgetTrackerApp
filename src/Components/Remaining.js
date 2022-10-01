import React, { Component } from 'react';

export default class Remaining extends Component {
    constructor(props) {
        super(props)
        this.state = {
            remaining: this.props.remaining
        }
    }
    render() {
        return (
            <div className='alert alert-success'>
                <span>Remaining: ${this.state.remaining}</span>
            </div>
        )
    }
}