import React from 'react';
import styled from 'styled-components';

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

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessTitle>Payment Successful</SuccessTitle>
      <SuccessMessage>
        Thank you for your payment. Your transaction has been completed.
      </SuccessMessage>
    </SuccessContainer>
  );
};

export default Success;