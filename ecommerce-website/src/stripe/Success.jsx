import React from 'react';
import styled from 'styled-components';
import { clearCart } from '../redux/shoppingCartRedux';
import {useDispatch } from "react-redux" // import useDispatch
import { Link } from 'react-router-dom';

const SuccessContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SuccessTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const ConfirmButton = styled.button`
  border-color: transparent;
  padding: 10px 20px; // changed the padding to make the height smaller
  font-size: 20px;
  cursor: pointer;
  opacity: 70%;
  background-color: green;
  color: white;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  margin-top: 20px; // added margin-top

  &:hover {
    transform: scale(1.1);
    opacity: 100%;
  }
`;


const Success = () => {

  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    dispatch(clearCart()); // clears cart
  };

  return (
    <SuccessContainer>
      <SuccessTitle>Payment Successful</SuccessTitle>
      <SuccessMessage>
        Your transaction has been completed. Thank you for choosing to shop with Pazar.
      </SuccessMessage>
      
      <Link to="/" onClick={handleConfirmClick}>
        <ConfirmButton>CONFIRM</ConfirmButton>
      </Link>
    </SuccessContainer>
  );
};

export default Success;