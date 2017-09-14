import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserStyles = styled.div`
  width: 30%;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 200px;
  }
  h3{
    padding: 5px 0;
  }
`;

const UserCard = (props) => {
  const user = props.user;
  return (
    <UserStyles>
      <Link to={`/user/${user.id}`}>
        <img src={user.image} alt={user.name} />
        <h3>{user.name}</h3>
      </Link>
    </UserStyles>
  );
};

export default UserCard;