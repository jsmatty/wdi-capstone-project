import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserCardStyles = styled.div`
  img {
    width: 100%;
    max-height: 200px;
  }
  h1{
    padding: 5px 0;
  }
`;

const UserCard = (props) => {
  const user = props.user;
  console.log(user);
  return (
    <UserCardStyles>
      <div>

      <Link to={`/users/${user.id}`}>
        <img src={this.state.image} alt=''/>
            <h1>{user.name}</h1>
            {/*<h3>Email: {this.state.user.email}</h3>
            <h3>Birthday: {this.state.user.birthday}</h3>*/}
      </Link>
      </div>
    </UserCardStyles>
  );
};

export default UserCard;