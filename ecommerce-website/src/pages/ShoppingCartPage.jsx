// import React from 'react'
import styled from 'styled-components'
// import header bars
import BannerBar from '../components/BannerBar'
import NavigationBar from '../components/NavigationBar'
import CategoriesBar from '../components/CategoriesBar'
// import footer
import Footer from '../components/Footer'
// MUI icons
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// for cart functionalities
import { clearCart, increaseQuantity, decreaseQuantity, removeProduct } from "../redux/shoppingCartRedux"; 
import { useDispatch } from "react-redux";

// for stripe payments 
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import React, { useCallback } from 'react';
// for stripe payments
console.log("Stripe public key:", process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// import StripeCheckout from "react-stripe-checkout"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-top: 20px;
`

// top wrapper
const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    color: black;
`

const TopTextContainer = styled.div``

const TopText = styled.span`
    // text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

// bottom wrapper
// BottomWrapper contains the InfoContainer and SummaryContainer
const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

// summary section
const SummaryContainer = styled.div`
    flex: 1; // 1 unit of space occupied
    border: 1px solid lightgray;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1``

const SummaryItem = styled.div`
    margin: 40px 0px;
    justify-content: space-between;
    display: flex;
    // props for total weight and size
    font-weight: ${props => props.type === "total" && "600" };
    font-size: ${props => props.type === "total" && "26px" };
`

const SummaryText = styled.span``

const SummaryPrice = styled.span``

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: black;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
`

const InfoContainer = styled.div`
    flex: 3; // 3 units of space occupied
`

const Products = styled.div`
    display: flex;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
    background-color: red;
`;

// for the details next to the image
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 20px;
`

const QuantityAndPrice = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    margin-bottom: 20px;
`;


const QuantityContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-bottom: 10px;
`

const Quantity = styled.div`
    font-size: 24px;
    margin: 16px;
`

const Price = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-top: 10px;
    font-size: 30px;
    font-weight: 350;
`

const Name = styled.span``

const ID = styled.span``

const Colour = styled.span`
    text-transform: uppercase;
`

const Size = styled.span`
    text-transform: uppercase;
`

const IconContainer = styled.div`
  cursor: pointer;
  display: inline-flex;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.3);
  }
`;

const DeleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

const StyledRemoveIcon = styled(RemoveCircleOutlineOutlinedIcon)`
  cursor: pointer;
  transition: transform 0.3s;
`;

const StyledAddIcon = styled(AddCircleOutlineOutlinedIcon)`
  cursor: pointer;
  transition: transform 0.3s;
`;

const StyledDeleteIcon = styled(DeleteOutlineOutlinedIcon)`
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.3);
    color: #e95555c7;
  }
`;

const EmptyCartMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const ShoppingCartPage = () => {

    const cart = useSelector((state) => state.cart);
    const regularDeliveryFee = 3;
    const deliveryThreshold = 40;
    const isFreeDelivery = cart.total >= deliveryThreshold;
    const deliveryFee = isFreeDelivery ? 0 : regularDeliveryFee;
    const grandTotal = cart.total + deliveryFee;

    // calculate the total number of items in the cart
    const totalItemsInCart = cart.products.reduce((total, product) => {
        return total + product.quantity;
    }, 0);

    const handleCheckout = useCallback(async () => {
        const stripe = await stripePromise;

        console.log('Fetching /create-checkout-session');

        const response = await fetch('http://localhost:3000/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart }),
        });

        console.log('Received response from /create-checkout-session');
        console.log('Response:', response);

        const sessionData = await response.json();
        console.log('Session Data:', sessionData);

        const sessionId = sessionData.sessionId; // Access sessionId from the sessionData object

        if (sessionId) {
            const result = await stripe.redirectToCheckout({
            sessionId: sessionId,
            });

            if (result.error) {
            console.error(result.error.message);
            }
        } else {
            console.error('Error: Session ID not found');
        }
    }, [cart]);

    // for clearing the cart
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // for changing the quantities
    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };
    
    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    };

    // removing product from cart
    const handleRemoveProduct = (id) => {
        dispatch(removeProduct(id));
      };
    
    return (
        <Container>

            <BannerBar/>
            <NavigationBar/>
            <CategoriesBar/>

            <Wrapper>

                <Title>
                    YOUR SHOPPING CART
                </Title>

                <TopWrapper>
                    
                    <TopButton onClick={handleClearCart}>CLEAR CART</TopButton>
                    
                    <TopTextContainer>
                        <TopText>
                            SHOPPING CART ({totalItemsInCart})
                        </TopText>
                        <TopText>
                            BOOKMARKED PRODUCTS (0)
                        </TopText>
                    </TopTextContainer>
                </TopWrapper>

                <BottomWrapper>
                    <InfoContainer>
                        
                            {cart.products.map(product => (

                            <Products>

                                <Image src = {product.image} />
                                <Details>
                                    <Name>
                                        <b>PRODUCT:</b> {product.name}
                                    </Name>
                                    <ID>
                                        <b>ID:</b> {product._id}
                                    </ID>
                                    <Colour>
                                        <b>COLOUR:</b> {product.colour}
                                    </Colour>
                                    <Size>
                                        <b>SIZE:</b> {product.size}
                                    </Size>
                                </Details>

                                <QuantityAndPrice>

                                    <DeleteContainer>
                                        <IconContainer>
                                            <StyledDeleteIcon onClick={() => handleRemoveProduct(product._id)} />
                                        </IconContainer>
                                    </DeleteContainer>
                                    <QuantityContainer>
                                        <IconContainer>
                                            <StyledRemoveIcon onClick={() => handleDecreaseQuantity(product._id)} />
                                        </IconContainer>
                                        <Quantity>
                                            {product.quantity}
                                        </Quantity>
                                        <IconContainer>
                                            <StyledAddIcon onClick={() => handleIncreaseQuantity(product._id)} />
                                        </IconContainer>
                                    </QuantityContainer>
                                    <Price>
                                        £ {product.price * product.quantity}
                                    </Price>

                                </QuantityAndPrice>

                            </Products>
                            ))}

                        
                        
                    </InfoContainer>

                    <SummaryContainer>
                        {cart.products.length === 0 ? (
                        <EmptyCartMessage>
                            THERE ARE NO PRODUCTS IN YOUR SHOPPING CART
                        </EmptyCartMessage>
                        ) : (
                        <>
                            <SummaryTitle> ORDER SUMMARY </SummaryTitle>

                            <SummaryItem>
                            <SummaryText> SUBTOTAL </SummaryText>
                            <SummaryPrice> £ {cart.total.toFixed(2)} </SummaryPrice>
                            </SummaryItem>

                            <SummaryItem>
                            <SummaryText> DELIVERY FEE </SummaryText>
                            <SummaryPrice>
                                {isFreeDelivery ? (
                                <s>£{regularDeliveryFee.toFixed(2)}</s>
                                ) : (
                                `£${regularDeliveryFee.toFixed(2)}`
                                )}
                            </SummaryPrice>
                            </SummaryItem>

                            {isFreeDelivery && (
                            <SummaryItem>
                                <SummaryText> FREE DELIVERY </SummaryText>
                                <SummaryPrice> - £{regularDeliveryFee.toFixed(2)} </SummaryPrice>
                            </SummaryItem>
                            )}

                            <SummaryItem type="total">
                            <SummaryText> TOTAL </SummaryText>
                            <SummaryPrice> £ {grandTotal.toFixed(2)} </SummaryPrice>
                            </SummaryItem>

                            <Button onClick={handleCheckout}>CHECKOUT</Button>
                        </>
                        )}
                    </SummaryContainer>

                </BottomWrapper>
            </Wrapper>

            <Footer/>

        </Container>
    )
}

export default ShoppingCartPage