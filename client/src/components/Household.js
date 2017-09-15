import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'
// export {AllUsers, EditUser, UserProfile} from './components/User';


// const ImageStyles = styled.div`
// width: "300",
// height: "300"
//  `;

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
             <div>
                 {this.state.users.map(users => (
                   <div key={users.id}>
                     <Link to={`/users/${users.id}`}><img src ={users.image} alt=''/></Link>
              </div>      
                 ))}
                  </div>
         )
       }
     }
 

export default Household;