import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteBill from './DeleteBill'

import BillFormEdit from './BillFormEdit';


class Bill extends Component {
  constructor(){
    super();
    this.state = {
      bills: [],
    }
  }

 componentWillMount() {
   const billId = this.props.match.params.id;
   this.fetchBills(billId)
 }

 _fetchBills = async (billId) => {
   try {
     const response = await axios.get(`/api/bills/${billId}`)
     console.log(response.data)
     await this.setState({ bills: response.data.bills });
     return response.data;
   }
   catch (err) {
     await this.setState({error: err.message})
     return err.message
   }
 }

render() {
  const id = this.props.match.params.id
  return (
    <div>
      <h1>{this.state.bills.type}</h1>
      <h3>{this.state.bills.company}</h3>
      <h3>{this.state.bills.company_phone_number}</h3>
      <h3>{this.state.bills.account_number}</h3>
      <h3>{this.state.bills.name_on_account}</h3>
      <h3>{this.state.bills.email_on_account}</h3>
      <h3>{this.state.bills.household_address}</h3>
    <Link to={`/bill/${id}/BillFormEdit`}><button>Edit Bill</button></Link>
    <DeleteBill billId = {this.props.match.params.id} billId = {bill.id}/>
    </div>
      })}
    <Link to={``}  
  )
}
 
 }
