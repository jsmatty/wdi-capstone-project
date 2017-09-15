
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setAxiosHeaders } from '../util';
import styled from "styled-components";

const SignInPageStyles = styled.div`

display: flex;
width: 100%;
height: 100vh;
background-color: #362b8e;
background-size: cover;
justify-content: center;
align-items: center;
 

`;

const SignInContainer = styled.div`
  background: black;
  padding: 60px;
  border: 5px solid white;

`;

const InputGroup = styled.div`
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 15px;
`;

const GoButtonStyle = styled.div`
  background: white;
  
  border: 2px solid black;

`;

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       redirect: false
   }
 }

_signIn = async (e) => {
  e.preventDefault();
  const payload = {
    email: this.state.email,
    password: this.state.password,
  }
  const response = await axios.post('/auth/sign_in', payload);
  debugger;
  setAxiosHeaders(response.headers);
  this.setState({redirect: true})
}

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/users/:id" />
   }
   return (
     <SignInPageStyles>
    <div>
      <SignInContainer>
       <form onSubmit={this._signIn}>
         <InputGroup>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div class="input-group">
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         </InputGroup>
         
         <div class="sign-in-redirect"><Link to="//household/:household_id">GO</Link></div>
         
       </form>
       <div class="sign-up-redirect"><Link to="/signup">Sign Up</Link></div>
       </SignInContainer>
     </div>
     </SignInPageStyles>
   );
 }
}

export default SignUp;