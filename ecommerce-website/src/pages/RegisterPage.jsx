import React from 'react';
import styled, { keyframes } from 'styled-components';
import BoltIcon from '@mui/icons-material/Bolt';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1608138278561-4b1ade407411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const LeftSide = styled.div`
  flex: 1;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 70%;
  border: none;
  border-bottom: 1px solid #ababab;
  background: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ababab;
  }
`;

const Title = styled.h1`
  margin-bottom: 40px;
`;

const BottomText = styled.p`
  margin-top: 20px;
`;

const SignIn = styled.span`
  cursor: pointer;
  color: #ababab;
  margin-top: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const changeColours = keyframes`
  0% { color: #a8e7f5; }
  33% { color: #b3a8f5; }
  66% { color: #94f28b; }
  100% { color: #a8e7f5; }
`;

// button
const Button = styled.button`
    padding: 10px 20px;
    border: none;
    width: 25%;
    background-color: #a8e7f5;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
    margin-top: 30px;
    opacity: 100%;
    transition: width 0.3s ease-in-out;

    &:hover {
        width: 40%; 
        opacity: 70%;
  }
`

const TopLogo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

const AnimatedBoltIcon = styled(BoltIcon)`
  transform: scaleX(2.6) scaleY(2.2);
  animation: ${changeColours} 15s linear infinite;
  margin-left: 10px;
  margin-right: 10px;
`;

const RegisterPage = () => {
    return (
      <Container>
        <LeftSide>
          <BackgroundImage />
        </LeftSide>
        <TopLogo>
            <LogoText>P A</LogoText>
            <AnimatedBoltIcon />
            <LogoText>A R</LogoText>
        </TopLogo>
        <RightSide>
          <Title>CREATE AN ACCOUNT</Title>
  
          <Input type="text" placeholder="FIRST NAME" />
          <Input type="text" placeholder="LAST NAME" />
          <Input type="text" placeholder="USERNAME" />
          <Input type="email" placeholder="EMAIL" />
          <Input type="password" placeholder="PASSWORD" />
          <Input type="password" placeholder="CONFIRM PASSWORD" />
  
          <Button> CREATE ACCOUNT</Button>
  
          <BottomText>ALREADY HAVE AN ACCOUNT?</BottomText>
          <SignIn>SIGN-IN</SignIn>
        </RightSide>
      </Container>
    );
  };
  
  export default RegisterPage;
