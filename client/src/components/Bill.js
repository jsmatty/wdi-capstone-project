import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteBill from './DeleteBill'


class Bill extends Component {
    constructor(){
        super();
        this.state = {
            bill: {},
                       
        }
    }

    componentWillMount() {
        const billId = this.props.match.params.id;
        this._fetchBills(billId)
    }

     _fetchBills = async (billId) => {
        try {
            const response = await axios.get(`/api/household/:household_id/bills/bill/${bill.id}`)
            console.log(response.data)
            const bill = response.data
            await this.setState({bill});
            return response.data;
        }
        catch (err) {
            await this.setState({error: err.message})
            return err.message
        }
    }
    rrender() {
        const id = this.props.match.params.id    
        return (
         <div>
            <h1>Utility Type: {this.state.bill.type}</h1>
            <h3>Company: {this.state.bill.company}</h3>
            <h3>Company Phone Number: {this.state.bill.company_phone_number}ft</h3>
            <h3>Account #: {this.state.bill.account_number}</h3>
            <h3>Name on Account: {this.state.bill.name_on_account}</h3>
            <h3>Email on Account: <a href={this.state.bill.email_on_account}>{this.state.bill.linked_in}</a></h3>
            <h3>Current Address: {this.state.bill.household_address}</h3>
           <br/>
            <Link to={`./bills/bill/${id}/edit`}><button>Edit Bill</button></Link>
        </div> 
            
    
        )
    }
}

export default Bill;