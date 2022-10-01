import React, { Component } from 'react';
import { TiDelete } from 'react-icons/ti';

export default class ExpenseItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            cost: this.props.cost
        }
    }
    render() {
        return (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                {this.state.name}
                <div>
                    <span className='badge badge-primary badge-pill mr-3 cost'>
                        ${this.state.cost}
                    </span>
                    <TiDelete size='1.5em'></TiDelete> {/*Delete button*/}
                </div>
            </li>
        )
    }
}