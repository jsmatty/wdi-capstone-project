import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditBill extends Component {
    constructor() {
        super();
        this.state = {
            bill: {
            }
        }
    }

    componentWillMount() {
        this._fetchBill()
    }
    
    _fetchBill = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/bills/${id}`);
            await this.setState({bill: res.data.bill});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.bill}
        newState[e.target.name] = e.target.value
        this.setState({bill: newState})
    }

    _editBill = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.bill
        try {
            const res = axios.patch(`/api/bills/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.bill.id
        return (
            <div>
              <form>
                <div>

           <label htmlFor="type">Utility Type: </label>
           <input onChange={this._handleChange} type="text" name="type" value={this.state.type} />
         </div>
         <div>
           <label htmlFor="company">Company: </label>
           <input onChange={this._handleChange} type="text" name="company" value={this.state.company} />
         </div>
         <div>
           <label htmlFor="company_phone_number">Company Phone Number: </label>
           <input onChange={this._handleChange} type="text" name="company_phone_number" value={this.state.company_phone_number} />
         </div>
         <div>
           <label htmlFor="account_number">Account #: </label>
           <input onChange={this._handleChange} type="text" name="account_number" value={this.state.account_number} />
         </div>
         <div>
           <label htmlFor="name_on_account">>Name on Account: </label>
           <input onChange={this._handleChange} type="text" name="name_on_account" value={this.state.name_on_account} />
         </div>
         <div>
           <label htmlFor="email_on_account">Email on Account: </label>
           <input onChange={this._handleChange} type="text" name="email_on_account" value={this.state.email_on_account} />
         </div>
         <div>
           <label htmlFor="household_address">Current Address: </label>
           <input onChange={this._handleChange} type="text" name="household_address" value={this.state.household_address} />
         </div>
         
         
      <input onClick={this._handleSubmit} type="submit" />

       </form>
     </div>
   );
 }
}

export default EditBill;

