import React, { Component } from 'react'

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
     const response = await axios.get(`/api/bills/`)
   }
 }
}
