import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Budget Tracker Application',
      budget: 2000,
      remaining: 1000,
      expenseTotal: this.budget - this.remaining
    }

  }
  render() {
    return (
      <div className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col mt-3'>
            <Budget budget={this.state.budget}></Budget>
          </div>
          <div className='col mt-3'>
            <Remaining remaining={this.state.remaining}></Remaining>
          </div>
          <div className='col mt-3'>
            <ExpenseTotal expenseTotal={this.state.budget - this.state.remaining}></ExpenseTotal>
          </div>
        </div>
      </div>
    )
  }
}
