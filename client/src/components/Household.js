import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'
import styled from "styled-components";
// export {AllUsers, EditUser, UserProfile} from './components/User';


const HouseholdPageStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100%;
background-image: url("https://i.imgur.com/DarybSb.jpg?1");
background-size: cover;
min-height: 100%;
min-width: 1024px;
position: fixed;
top: 0;
left: 0;

}`

class Household extends Component {
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
      const response = await axios.get('/api/users/:id');
      const users = response.data;
      this.setState({users});
     } catch (err) {
      this.setState({error: err})
    }
  }

    render () {
         return (
           <HouseholdPageStyle>
             <div>
                 {this.state.users.map(users => (
                   <div key={users.id}>
                     <Link to={`/users/${users.id}`}><img src ={users.image} alt=''/></Link>
              </div>      
                 ))}
                  </div>
                  </HouseholdPageStyle>
         )
       }
     }
 

export default Household;