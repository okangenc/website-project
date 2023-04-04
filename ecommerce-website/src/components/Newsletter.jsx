import React from 'react'
import SendSharpIcon from '@mui/icons-material/SendSharp';
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column; // organises content vertically
    align-items: center;
    justify-content: center;
    height: 60vh;
`;

const Header = styled.h1`
    font-size: 80px;
    margin-bottom: 30px;
`;

const Description = styled.div`
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: 200;
    letter-spacing: 3px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between; // separates the button from the input
    width: 40%;
    height: 40px;
    border: 1px solid lightgray;
    border-color: black;
    background-color: white;
`;

const EmailInput = styled.input`
    border: none;
    flex: 7;
    padding-left: 20px;
    font-size: 18px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: #a8e7f5;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  @keyframes bgChange {
    0% { background-color: #a8e7f5; }
    33% { background-color: #b3a8f5; }
    66% { background-color: #94f28b; }
    100% { background-color: #a8e7f5; }
  }

  animation: bgChange 15s linear infinite;
`;

const StyledSendSharpIcon = styled(SendSharpIcon)`
  transition: transform 0.3s ease-in-out !important; // increases icon size when cursor hovers over button

  ${Button}:hover & {
    transform: scale(1.4);
  }
`;




const Newsletter = () => {
  return (
    <Container>
        <Header>
            NEWSLETTER
        </Header>

        <Description>
            SIGN-UP TO THE NEWSLETTER TO RECEIVE UPDATES ON NEW PRODUCTS
        </Description>

        <InputContainer>
            <EmailInput placeholder = "ENTER YOUR EMAIL"/>
            <Button>
                <StyledSendSharpIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
