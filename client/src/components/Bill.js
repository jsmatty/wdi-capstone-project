import React, { Component } from 'react'


class Bill extends Component{
  constructor(){
    super();
    this.state = {
      bill: []
    }
  }

  componentWillMount(){
    this._fetchBills();
  }

  _fetchBill = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/bills/${id}`)
    this.setState({
      bill: res.data.bill
    })
  }

  render(){
    return (
      <BillStyles>
        <h3>{this.state.bill.type}</h3>
        <h1>{this.state.}
      </BillStyles>
    )
  }
}
