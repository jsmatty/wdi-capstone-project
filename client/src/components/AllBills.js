import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      const res = await axios.get('/api/bills');
      await this.setState({bills: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
}

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        <h1>Bills</h1>
        {this.state.bills.map(bill => (
          <div key={bill.id}>
            <Link to={`/bill/${bill.id}`}>{bill.type}</Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default AllBills;