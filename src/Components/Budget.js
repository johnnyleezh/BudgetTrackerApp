import React, { Component } from 'react';

export default class Budget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            budget: this.props.budget
        }
    }
    render() {
        return (
            <div className='alert alert-secondary'>
                <span>Budget: ${this.state.budget}</span>
            </div>
        )
    }
}