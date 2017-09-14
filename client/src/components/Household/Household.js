import React, { Component } from 'react';
import axios from 'axios';
import UserCard from '/components/User/UserCard';
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
      this.setState({users});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    return (
      <HouseholdStyles>
        {this.state.users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
        <Link to={`/users/new`}><button>Add a New Mate</button></Link>
        {/*find user by username*/}
        <Link to={'/bill/all'}><button>Utility Bills</button></Link>
      </HouseholdStyles>
      
    )
  }
}
// add link button to BILL index page

export default Household;