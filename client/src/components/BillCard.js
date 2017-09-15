import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BillCardStyles = styled.div`
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

const BillCard = (props) => {
  const bill = props.bill;
  return (
    <BillCardStyles>
      <Link to={`/bill/${bill.id}`}>
        <h3>{bill.type}</h3>
      </Link>
    </BillCardStyles>
  );
};

export default BillCard;