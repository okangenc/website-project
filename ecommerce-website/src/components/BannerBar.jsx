import React from 'react';
import styled, { keyframes } from "styled-components";

const changeColours = keyframes`
  0% { background-color: #a8e7f5; }
  33% { background-color: #b3a8f5; }
  66% { background-color: #94f28b; }
  100% { background-color: #a8e7f5; }
`;

const Container = styled.div`
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${changeColours} 15s linear infinite;
`;

const BannerBar = () => {
  return (
    <Container>
      NEW ARRIVALS! CHECK OUT OUR LATEST PRODUCTS
    </Container>
  );
};

export default BannerBar;

/*
original code without the colour change
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #b3a8f5;
    color: white;
    align-items: center; // centre vertically
    justify-content: center; // centre horizontally
    display: flex;
`

const BannerBar = () => {
  return (
    <Container>
        DON'T MISS OUT! 20% OFF SELECTED ITEMS ON ORDERS OVER £40
    </Container>
  )
}

export default BannerBar
*/