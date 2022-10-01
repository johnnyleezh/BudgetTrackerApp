import React, { Component } from 'react';

export default class ExpenseTotal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenseTotal: this.props.expenseTotal
        }
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <span>Spent so far: ${this.state.expenseTotal}</span>
            </div>
        )
    }
}