import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BoltIcon from '@mui/icons-material/Bolt';
import { Link } from 'react-router-dom';

import axios from 'axios';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  opacity: ${({ disabled }) => (disabled ? '40%' : '100%')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 40%;
    opacity: ${({ disabled }) => (disabled ? '40%' : '70%')};
  }
`;

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

const SuccessMessage = styled.p`
  color: #94f28b;
`;



const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const checkUsername = async (username) => {
    try {
      const response = await axios.post("http://localhost:3000/api/authentication/check-username", {
        username,
      });
  
      return response.data.exists;
    } catch (error) {
      console.error(error);
    }
  };

  const [passwordRequirementsError, setPasswordRequirementsError] = useState(false);

  const checkPasswordRequirements = (password) => {
    const lengthRequirement = password.length >= 8;
    const uppercaseRequirement = /[A-Z]/.test(password);
    const numberRequirement = /\d/.test(password);

    return lengthRequirement && uppercaseRequirement && numberRequirement;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setPasswordRequirementsError(false);

    const usernameExists = await checkUsername(formData.username);

    if (usernameExists) {
      setErrorMessage("Username already taken");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    if (!checkPasswordRequirements(formData.password)) {
      setPasswordRequirementsError(true);
      return;
    } else {
      setPasswordRequirementsError(false);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/authentication/register",
        formData
      );
      if (response.status === 201) {
        setIsSubmitted(true);

        // Clear the input fields
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== '');

  

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

        <Form onSubmit={handleRegister}>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="FIRST NAME"
          />
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="LAST NAME"
          />
          <Input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="USERNAME"
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="EMAIL"
          />
          <Input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="PASSWORD"
          />
          <Input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            placeholder="CONFIRM PASSWORD"
          />

          {passwordMatchError && (
            <p style={{ color: "red" }}>PASSWORDS DO NOT MATCH</p>
          )}

          {passwordRequirementsError && (
            <div style={{ color: "red", marginBottom: "20px" }}>
              <p>THE PASSWORD MUST MATCH THESE REQUIREMENTS:</p>
              <ul>
                <li>PASSWORD MUST CONTAIN A NUMBER</li>
                <li>PASSWORD MUST CONTAIN AN UPPERCASE LETTER</li>
                <li>PASSWORD MUST HAVE A LENGTH GREATER 8</li>
              </ul>
            </div>
          )}

          <Button type="submit" disabled={!allFieldsFilled}>
            CREATE ACCOUNT
          </Button>

        </Form>

        {isSubmitted && (
          <SuccessMessage>ACCOUNT SUCCESSFULLY CREATED</SuccessMessage>
        )}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <BottomText>ALREADY HAVE AN ACCOUNT?</BottomText>
        <SignIn> <Link Link to="/login">SIGN-IN </Link></SignIn>
      </RightSide>
    </Container>
  );
};

export default RegisterPage;

