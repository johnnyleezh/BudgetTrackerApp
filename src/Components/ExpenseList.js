import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

export default class ExpenseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: [
                {
                    id: 12,
                    name: 'Shopping',
                    cost: 40
                },
                {
                    id: 13,
                    name: 'Holiday',
                    cost: 400
                },
                {
                    id: 14,
                    name: 'Car Service',
                    cost: 50
                },
            ]
        }
    }
    render() {
        return (
            <ul className='list-group'>
                {}
            </ul>
        )
    }
}