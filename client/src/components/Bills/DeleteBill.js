import React, { Component } from 'react';
import axios from 'axios'

class DeleteBill extends Component {

  _handleDelete = async () => {
    const billId = this.props.billId;
    console.log(`/api/bills/${billId}`)
    const response = await axios.delete(`/api/bills/${billId}`)
    await this.setState({bills: response.bills})
}
  render() {

    return (
      <div>
        <button onClick={this._handleDelete}>Delete Bill</button>
      </div>
    );
  }
}

export default DeleteBill;