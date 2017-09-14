import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const UserProfileStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;


class UserProfile extends Component {
  constructor(){
      super();
      this.state = {
          user: {
            image: '',
            name: '',
            username: '',
            email: '',
            phonenumber: '',
            birthday: '',
          },
          redirect: false
      };
  }

componentWillMount(){
     const userId = this.props.match.params.id;
        this._fetchUsers(UserId)
  }

  _fetchUsers = async () => {
      try {
          const id = this.props.match.params.id;
          const res = await axios.get(`/api/users/${userId}`)
          await this.setState({bill});
            return response.data;
          }
        
          catch (err) {
            await this.setState({error: err.message})
            return err.message
      }
  }
  _deleteUser = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/users/${this.props.match.params.id}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :


            <div>
            <UserProfileStyles>
            <img src={this.state.user.image} />
            <h1><strong>Name: </strong> {this.state.user.name}</h1>
            <p><strong>Username: </strong> {this.state.user.username}</p>
            <p><strong>Email: </strong> {this.state.user.email}</p>
            <p><strong>Phone Number: </strong> {this.state.user.phonenumber}</p>
            <p><strong>Birthday: </strong> {this.state.user.birthday}</p>
            
            <Link to={`/users/${this.props.match.params.id}/edit`}><button>Edit user</button></Link>
            <button onClick={this._deleteuser}>Delete This user</button>
            </UserProfileStyles>
      </div>

    }
    </div>
    )
  }
}

export default UserProfile;