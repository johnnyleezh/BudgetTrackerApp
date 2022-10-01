import React, { Component } from 'react';

export default class AddExpenseForm extends Component {
    render() {
        return (
            <form>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='row'>
                    <div className='col-sm'>
                        <label for='name'>Name</label>
                        <input
                            required='required'
                            type='text'
                            className='form-control'
                            id='name'
                        ></input>
                        <label for='cost'>Cost</label>
                        <input
                            required='required'
                            type='text'
                            className='form-control'
                            id='cost'
                        ></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm mt-3'>
                        <button className='btn btn-dark'>Save</button>
                    </div>
                </div>
            </form>
        )
    }
}