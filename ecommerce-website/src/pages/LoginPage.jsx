import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BoltIcon from '@mui/icons-material/Bolt';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

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
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSide = styled.div`
  flex: 1;
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

const SignUp = styled.span`
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

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  width: 20%;
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
`;

const TopLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
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

const LoginError = styled.span`
  color: red;
`

const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const {isFetching, error} = useSelector((state) => state.user);

  const handleClick = (event) => {
    event.preventDefault()
    login(dispatch, {username, password});
  }

    return (
      <Container>
        <LeftSide>
          <TopLogo>
            <LogoText>P A</LogoText>
            <AnimatedBoltIcon />
            <LogoText>A R</LogoText>
          </TopLogo>
          <Title>SIGN-IN TO YOUR ACCOUNT</Title>

          <Input type="text" placeholder="USERNAME" onChange = {(event) => setUsername(event.target.value)} />
          <Input type="password" placeholder="PASSWORD" onChange = {(event) => setPassword(event.target.value)} />
          <Button onClick = {handleClick} disabled = {isFetching}> SIGN-IN </Button>

          { error && <LoginError> INVALID LOGIN </LoginError>}

          <BottomText> DON'T HAVE AN ACCOUNT? </BottomText>
          <SignUp> SIGN-UP </SignUp>
        </LeftSide>
        <RightSide>
          <BackgroundImage />
        </RightSide>
      </Container>
    );
  };
  
  export default LoginPage;
  
  