import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      this._isSignedIn();
    }

    componentWillRecieveProps() {
      this._isSignedIn();
    }

    _isSignedIn = async () => {
      const response = await axios.get("/auth/validate_token");
      this.setState({
        user: response.data.data,
        signedIn: response.data.success
      });
    };

    _logOut = async () => {
      const response = await axios.delete("/auth/sign_out")
      // need browser to refresh and take user back to splash page
      window.location.reload("/");
    };

  render() {  
  if(this.state.signedIn) {
    return (
      <Nav>
        <Link to="/household">
        <h1>PM</h1>
      </Link>
      <div>
        <span>Welcome {this.state.user.name}</span>
      </div> 
      <div> 
        {/*dropdown*/}
        <Link to="/household/:household_id/users/:id">Profile</Link>
        <Link to="/household/:id/AllBills">Bills</Link>
        <Link to="/auth/sign_out">Log Out</Link>
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
        <Link to="/auth/sign_in">Log In</Link>
        <Link to="/auth/sign_up">Sign Up</Link>
      </div>
    </Nav>
    );
  }
}

export default GlobalNav;
