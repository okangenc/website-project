import React from 'react';
import styled from 'styled-components';
// import header components
import BannerBar from '../components/BannerBar';
import NavigationBar from '../components/NavigationBar';
import CategoriesBar from '../components/CategoriesBar';
// import footer
import Footer from '../components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 40px 0;
  letter-spacing: 3px;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  width: 90%;
  margin-bottom: 40px;
`;

const PersonalDetails = styled.div`
  flex: 1;
`;

const SettingsSection = styled.div`
  flex: 1;
`;

const Location = styled.div`
  flex: 1;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  letter-spacing: 3px;
`;

const UserDetailRow = styled.div`
  display: flex;
  justify-content: center;
  // font-weight: bold;
  font-size: 20px;
  letter-spacing: 3px;
  // color: lightgray;
`;

const UserDetail = styled.div`
  margin: 20px;
`;

const HrWithTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
  width: 90%;
`;

const HrLine = styled.div`
  flex-grow: 1;
  border-top: 1px solid lightgray;
`;

const HrTitle = styled.span`
  font-size: 16px;
  color: lightgray;
  margin: 0 10px;
`;

const UserLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Address = styled.div`
  margin: 20px;
  font-size: 20px;
  letter-spacing: 3px;
  text-align: center;
`;

const PostCode = styled.div`
  margin: 20px;
  font-size: 20px;
  letter-spacing: 3px;
`;

const Settings = styled.div``;

const EmailNotifications = styled.div`
  text-align: center;
  margin: 20px;
  margin-top: 40px;
  font-size: 20px;
  letter-spacing: 3px;
`;

const ChangePasswordButton = styled.button`
  background-color: #77bce8b0;
  color: white;
  width: 200px;
  font-size: 16px;
  padding: 8px 16px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    opacity: 0.8;
  }
`;

const DeleteAccountButton = styled.button`
  background-color: #e95555c7;
  color: white;
  width: 200px;
  font-size: 16px;
  padding: 8px 16px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    opacity: 0.8;
  }
`;

const OrderHistory = styled.div`
    padding: 20px;
    font-size: 20px;
    letter-spacing: 3px;`;

const BookmarkedProducts = styled.div`
    padding: 20px;
    font-size: 20px;
    letter-spacing: 3px;
  `;

const ProfilePage = () => {
  return (
    <Container>
      <BannerBar />
      <NavigationBar />
      <CategoriesBar />

      <Wrapper>
        <Title>PROFILE AND SETTINGS</Title>

        <DetailsContainer>
            <PersonalDetails>
            <HrWithTitle>
                <HrLine /> <HrTitle>PERSONAL DETAILS</HrTitle> <HrLine />
            </HrWithTitle>
            <UserDetails>
                <UserDetailRow>
                <UserDetail>BRIAN</UserDetail>
                <UserDetail>GRAHAM</UserDetail>
                </UserDetailRow>
                <UserDetail>briangraham</UserDetail>
                <UserDetail>brian.g@gmail.com</UserDetail>
            </UserDetails>
            </PersonalDetails>

            <SettingsSection>
            <HrWithTitle>
                <HrLine /> <HrTitle>SETTINGS</HrTitle> <HrLine />
            </HrWithTitle>
            <Settings>
                <EmailNotifications> EMAIL NOTIFICATIONS </EmailNotifications>
                <ChangePasswordButton> CHANGE PASSWORD </ChangePasswordButton>
                <DeleteAccountButton> DELETE ACCOUNT </DeleteAccountButton>
            </Settings>
            </SettingsSection>

            <Location>
            <HrWithTitle>
                <HrLine /> <HrTitle>ADDRESS</HrTitle> <HrLine />
            </HrWithTitle>
            <UserLocation>
                <Address>11 Park Road, Loughborough, Leicestershire</Address>
                <PostCode>LE11 1AB</PostCode>
            </UserLocation>
            </Location>
        </DetailsContainer>

        <HrWithTitle>
            <HrLine /> <HrTitle>ORDER HISTORY</HrTitle> <HrLine />
        </HrWithTitle>

        <OrderHistory>YOU HAVE NOT NO ORDER HISTORY</OrderHistory>

        <HrWithTitle>
            <HrLine /> <HrTitle>BOOKMARKED PRODUCTS</HrTitle> <HrLine />
        </HrWithTitle>

        <BookmarkedProducts>YOU HAVE NO BOOKMARKED PRODUCTS</BookmarkedProducts>
    </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProfilePage;

