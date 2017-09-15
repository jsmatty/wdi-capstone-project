import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const HouseholdStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class Household extends Component{
  constructor(){
    super();
    this.state = {
      error: '',
      users: []
    }
  }

  componentWillMount(){
    this._fetchUsers();
  }

  _fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      const users = response.data;
      this.setState({Users: response.data});
     } 

     catch (err) {
           console.log(err)
           await this.setState({error: err.message})
           return err.message
       }
  }

    render () {
         if (this.state.error){
             return <div>{this.state.error}</div>
           }
           const imageStyles = {
             width: "300",
             height: "300"
         }
         return (
             <div>
                 {this.state.users.map(user => (
                     <div>
                         <Link to={`/user/${user.id}`}><img style={imageStyles} src={user.image} alt=''/></Link> 
                    </div>
                 ))}
             </div>
         )
     }
 }

export default Household;