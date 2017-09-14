import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditUser extends Component {
    constructor() {
        super();
        this.state = {
            user: {
            image: '',
            name: '',
            username: '',
            email: '',
            phonenumber: '',
            
            }
        }
    }

    componentWillMount() {
        this._fetchUser()
    }
    
    _fetchUser = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/users/${id}`);
            await this.setState({user: res.data.user});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.user}
        newState[e.target.name] = e.target.value
        this.setState({user: newState})
    }

    _editUser = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.user
        try {
            const res = axios.patch(`/api/users/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.user.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="image">image: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.user.image} />
                    </div>
                    <div>
                        <label htmlFor="name">name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.user.name} />
                    </div>
                    <div>
                        <label htmlFor="username">username: </label>
                        <input onChange={this._handleChange} type="text" name="username" value={this.state.user.username} />
                    </div>
                    <div>
                        <label htmlFor="email">email: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.user.email} />
                    </div>
                    <div>
                        <label htmlFor="phonenumber">phone number: </label>
                        <input onChange={this._handleChange} type="text" name="phonenumber" value={this.state.user.phonenumber} />
                    </div>
                    <button onClick={this._editUser}>Submit</button>
                </form>
                <br />
            </div>
        );
    }
}

export default EditUser;