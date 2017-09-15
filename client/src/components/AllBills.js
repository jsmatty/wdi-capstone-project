import React, { Component } from 'react';
import axios from 'axios';
import BillCard from './BillCard';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const AllBillStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class AllBills extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      bills: []
    }
  }

  componentWillMount(){
    this._fetchBills();
  }

  _fetchBills = async () => {
    try {
      const response = await axios.get('/api/bills');
      const bills = response.data;
      this.setState({bills});
    } catch (err) {
      // console.log(err)
     this.setState({error: err})
   }
 }

  render(){
    return (
      <AllBillStyles>  
        {this.state.bills.map((bill) => (
          <BillCard key={bill.type} />
        ))}
        <Link to={` /bills/new`}><button>Add +</button></Link> 
      </AllBillStyles>   
          
        )

    }
 
 }
    


export default AllBills;