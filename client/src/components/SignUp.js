import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { setAxiosHeaders } from '../util';

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
        email: '',
       password: '',
       password_confirmation: '',
       birthday: '',
       name: '',
       image: '',
       redirect: false
   }
 }
 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }
 _handleSubmit = (e) => {
  e.preventDefault();
  const payload = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      birthday: this.state.birthday,
      name: this.state.name,
      image: this.state.image
  }
  console.log(payload)
  axios.post("/auth", payload).then((res) => {

      console.log("Success!");
      setAxiosHeaders(res.headers);
      const redirect = !this.state.redirect
      this.setState({redirect})
  })
      .catch(err => console.log(err));
};


 render() {
  const buttonStyles = {
    borderRadius: "5px",
    fontSize: "15px",
    textDecoration: "none",
    margin: "20px",
    color: "#000",
    position: "relative",
    display: "flex",
    backgroundColor: "#fff",
    alignContent: "center"
}

   if (this.state.redirect){
     return <Redirect to="/users/:id" />
   }
   return (
     <div>
                <form>
                    <div>
                        <label htmlFor="email">email: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">password: </label>
                        <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">password confirmation: </label>
                        <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
                    </div>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="image">profile picture: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.image} />
                    </div>
                    <div>
                        <label htmlFor="birthday">birthday: </label>
                        <input onChange={this._handleChange} type="text" name="birthday" value={this.state.birthday} />
                    </div>
                    <button onClick={this._handleSubmit}>Submit</button>
                </form>
                <br />
            </div>
   );
 }
}

export default SignUp;