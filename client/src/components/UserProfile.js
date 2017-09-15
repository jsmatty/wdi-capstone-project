import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UserProfile extends Component {
    constructor(){
        super()
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        const userId = this.props.match.params.id;
        this._fetchUsers(userId)
    }

     _fetchUsers = async (userId) => {
        try {
            const response = await axios.get(`/api/users/${userId}`)
            console.log(response.data)
            const user = response.data
            await this.setState({user});
            return response.data;
        }
        catch (err) {
            await this.setState({error: err.message})
            return err.message
        }
        
    }
    

    render () {
        const imageStyles = {
            width: "300",
            height: "300"
        }
        const id = this.props.match.params.id            
        return (
            <div>
            <img style={imageStyles} src={this.state.user.image} alt=''/>
            <h1>{this.state.user.name}</h1>
            <h3>Email: {this.state.user.email}</h3>
            <h3>Birthday: {this.state.user.birthday}</h3>
            <button><Link to="/household/:household_id">HouseHold</Link></button>
            </div>
        )
    }
}

export default UserProfile;