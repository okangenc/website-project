import React from 'react';
import styled from 'styled-components';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Link as RouterLink } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  background-color: #f4f4f4;
  margin-top: 120px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 32px;
  //font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Description = styled.div`
  margin: 20px 0px;
  width: 95%;
  letter-spacing: 3px;
  font-weight: 350;
`;

const Middle = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  letter-spacing: 3px;
  font-weight: 350;
  margin-top: 20px;
`;

const Link = styled(RouterLink)`
  width: 100%;
  cursor: pointer;
  text-decoration: none; // Optional: Add this line to remove the underline from links
  color: inherit; // Optional: Add this line to inherit the color from the parent component
`;

const RightSide = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  letter-spacing: 3px;
  font-weight: 350;
`;

const ContactIcons = styled.div`
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <Header>PAZAR</Header>
        <Description>
          WELCOME TO PAZAR, YOUR ONLINE DESTINATION FOR SPORTS GEAR AND APPAREL.
          WE PROVIDE HIGH-QUALITY PRODUCTS WITH A SEAMLESS SHOPPING EXPERIENCE FOR
          FITNESS AND SPORTS ENTHUSIASTS.
        </Description>
      </LeftSide>

      <Middle>
        <Header>LINKS</Header>
        <LinksContainer>
          <Link to="/"> HOME </Link>
          <Link to="/category/accessories"> ACCESSORIES </Link>
          <Link to="/category/mens"> MENS CLOTHING </Link>
          <Link to="/category/equipment"> EQUIPMENT </Link>
          <Link to="/category/womens"> WOMENS CLOTHING </Link>
          <Link to="/shoppingcart"> SHOPPING CART </Link>
        </LinksContainer>
      </Middle>

      <RightSide>
        <Header>CONTACT</Header>
        <ContactContainer>
          <ContactItem>
            <ContactIcons>
              <EmailOutlinedIcon />
            </ContactIcons>
            email@email.com
          </ContactItem>
          <ContactItem>
            <ContactIcons>
              <PlaceOutlinedIcon />
            </ContactIcons>
            Location
          </ContactItem>
          <ContactItem>
            <ContactIcons>
              <PhoneOutlinedIcon />
            </ContactIcons>
            +44 7515 118939
          </ContactItem>
        </ContactContainer>
      </RightSide>
    </Container>
  );
};

export default Footer;

