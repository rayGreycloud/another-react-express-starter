import React, { Component } from 'react';
import './customers.css'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }
  
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(
        customers => this.setState(
          { customers }, 
          () => console.log('Customers fetched...', customers))
      );
  }
  
  render() {
    return (
      <div className="customers">
        <h2 className="customers__heading">Customers</h2>
        <ul className="customers__list">
          { this.state.customers.map(customer => 
            <li key={customer.id} className="customers__list-item">
              { customer.firstName } { customer.lastName }
            </li>
          )}
        </ul>
        
      </div>
    );
  }
}

export default Customers;