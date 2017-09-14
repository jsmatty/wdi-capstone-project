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

const GlobalNav = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>PayMate</h1>
        <p>Description here</p>
      </Link>
      <div>
        <Link to="/household">Mates</Link>
        {/* <Link to="/signup">Sign Up!</Link> */}
      </div>
    </Nav>
  );
};

export default GlobalNav;
