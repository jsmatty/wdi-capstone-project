import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
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
  axios.post("/auth", this.state).then((res) => {

      console.log("Success!");
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
     return <Redirect to="/" />
   }
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
                    <div>
                        <label htmlFor="birthday">birthday: </label>
                        <input onChange={this._handleChange} type="text" name="birthday" value={this.state.user.birthday} />
                    </div>
                    <button onClick={this._handleSubmit}>Submit</button>
                </form>
                <br />
            </div>
   );
 }
}

export default SignUp;