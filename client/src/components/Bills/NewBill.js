import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class NewBill extends Component {
    constructor(){
        super();
        this.state = {
            bill: {
                type: '',
                company: '',
                company_phone_number:'',
                account_number: '',
                name_on_account: '',
                email_on_account: '',
                household_address: '',
                },
            redirect: false
        
        
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.bill};
        newState[e.target.name] = e.target.value;
        this.setState({
            bill: newState
        });
      }
    
    _addbill = async (e) => {
        e.preventDefault();
        const payload = this.state.bill

        const res = await axios.post('/api/bills', payload)
        this.setState({redirect: true});
    }
      
  render() {
    return (
      <div>
          {this.state.redirect? 
            <Redirect to={`/bills`}/>
            :
            <form onSubmit={this._addbill}>
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
            
            
            <button>Add New bill</button>
        </form>
          }

        
    </div>
    )
  }
}