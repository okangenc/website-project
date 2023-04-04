import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import header bars
import BannerBar from '../components/BannerBar';
import NavigationBar from '../components/NavigationBar';
import CategoriesBar from '../components/CategoriesBar';
// import footer
import Footer from '../components/Footer';

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 30px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 75vh;
  width: 40vw;
  object-fit: cover;
`;

const Information = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Name = styled.div`
  font-size: 40px;
  letter-spacing: 2px;
  margin-top: 50px;
`;

const Description = styled.p`
  margin: 50px 0px;
  letter-spacing: 2px;
  font-weight: 350;
  font-size: 18px;
`;

const InfoTitle = styled.div`
  letter-spacing: 2px;
  font-weight: 350;
  font-size: 28px;
`;

const Price = styled.div`
  font-weight: 200;
  font-size: 28px;
  margin-left: 10px;
`;

const Colour = styled.div`
  font-weight: 200;
  font-size: 28px;
  margin-left: 10px;
`;

const Size = styled.div`
  font-weight: 200;
  font-size: 28px;
  margin-left: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Quantity = styled.span`
  font-size: 28px;
  margin: 0 10px;
`;

const AddToCartButton = styled.button`
  font-size: 20px;
  padding: 15px;
  background-color: #a8e7f5;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  animation: ${ keyframes`
    0% { background-color: #a8e7f5; }
    33% { background-color: #b3a8f5; }
    66% { background-color: #94f28b; }
    100% { background-color: #a8e7f5; }
    ` } 15s linear infinite;

  &:hover {
    transform: scale(1.1);
  }

  margin-left: auto;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const ButtonAndScaleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    return (
      <Container>
        <BannerBar />
        <NavigationBar />
        <CategoriesBar />
  
        <Wrapper>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1605235185922-7dccaf4ef5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
          </ImageContainer>
  
          <Information>
            <Name>Women's Purple BreezeLite Sports Jacket</Name>
  
            <InfoRow>
              <InfoContainer>
                <InfoTitle> PRICE: </InfoTitle>
                <Price> £ 20 </Price>
              </InfoContainer>
  
              <InfoContainer>
                <InfoTitle> COLOUR: </InfoTitle>
                <Colour> PURPLE </Colour>
              </InfoContainer>
  
              <InfoContainer>
                <InfoTitle> SIZE: </InfoTitle>
                <Size> S </Size>
              </InfoContainer>
            </InfoRow>
  
            <Description>
              Elevate your activewear game with the Women's Purple BreezeLite Sports Jacket,
              a perfect blend of cutting-edge technology and stunning design.
              Specially crafted for active women who seek both style and functionality,
              this lightweight and breathable jacket delivers ultimate comfort and performance
              during your workouts and outdoor activities.
            </Description>
  
            <ButtonAndScaleContainer>
              <QuantityControl>
                <IconWrapper onClick={handleDecrement}>
                  <RemoveCircleOutlineOutlinedIcon fontSize="large" />
                </IconWrapper>
                <Quantity>{quantity}</Quantity>
                <IconWrapper onClick={handleIncrement}>
                  <AddCircleOutlineOutlinedIcon fontSize="large" />
                </IconWrapper>
              </QuantityControl>
              <AddToCartButton>ADD TO CART</AddToCartButton>
            </ButtonAndScaleContainer>
          </Information>
        </Wrapper>
  
        <Footer/>
      </Container>
    );
  };
  
  export default ProductPage;
