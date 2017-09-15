import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.div`
font-family: 'Fredericka the Great', cursive;
  width: 95%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: rgb(230, 243, 255);
  box-shadow: 0px 1px 6px black;
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`

class GlobalNav extends Component {
  constructor() {
    super();
    this.state = {
      user:{},
      signedIn: false
      };
    }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    console.log(response)
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };
  render() {  
  if(this.state.signedIn) {
    return (
      <Nav>
        <Link to="/household">
        <h1>PM</h1>
      </Link>
      <div>
        <span>Signed In As: <Link to={`/user/${this.state.user.id}`}>{this.state.user.email}</Link></span>
          <a href="#" onClick={this._logOut}> Log Out </a>
      </div> 
      <div> 
        {/*dropdown*/}
        <Link to="/household/:household_id/users/:id">Profile</Link>
        <Link to="/household/:id/AllBills">Bills</Link>
      </div>
      </Nav>
    );
  
  } 
  return (
    <Nav>
      <Link to="/">
        <h1>PM</h1>
      </Link>
      <div>
        <Link to="/signin">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </Nav>
    );
  }
}

export default GlobalNav;