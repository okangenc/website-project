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

// for stripe payments
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import React, { useCallback } from 'react';
// for stripe payments
console.log("Stripe public key:", process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);



// import StripeCheckout from "react-stripe-checkout"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
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
    // reactive button using props
    // if the cart is empty, button becomes transparent
    // if the cart is filled, button becomes coloured
    // border: ${props => props.type === "filled" && "none"};
    // background-color: ${props => props.type === "filled" ? "#a8e7f5" : "transparent"};
    // color: ${props => props.type === "filled" && "white"};
`

const TopTextContainer = styled.div`
    
`

const TopText = styled.span`
    // text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

// bottom wrapper
const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const InfoContainer = styled.div`
    flex: 3; // 3 units of space occupied
`

// summary section
const SummaryContainer = styled.div`
    flex: 1; // 1 unit of space occupied
    border: 1px solid lightgray;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`

`

const SummaryItem = styled.div`
    margin: 40px 0px;
    justify-content: space-between;
    display: flex;
    // props for total weight and size
    font-weight: ${props => props.type === "total" && "600" };
    font-size: ${props => props.type === "total" && "26px" };
`

const SummaryText = styled.span`
    
`

const SummaryPrice = styled.span`
    
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: black;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
`


// product image, details, quantity and price all within this
const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


const Product = styled.div`
    flex: 2;
    display: flex;
    // background-color: beige;
`

// styled componenets for the products displayed
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`

// for the details next to the image
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background-color: #18b02a;
`


const QuantityAndPrice = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background-color: #b0b52a;
    width: 100%;
`

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

/*
const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 1px;
`
*/

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

const Colour = styled.span``

const Size = styled.span``


const ShoppingCartPage = () => {

    const cart = useSelector((state) => state.cart);
    const shippingFee = 3;
    const grandTotal = cart.total + shippingFee;


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
                    <TopButton>
                        CONTINUE SHOPPING
                    </TopButton>
                    <TopTextContainer>
                        <TopText>
                            SHOPPING CART (2)
                        </TopText>
                        <TopText>
                            BOOKMARKED PRODUCTS (0)
                        </TopText>
                    </TopTextContainer>
                </TopWrapper>

                <BottomWrapper>
                    <InfoContainer>
                        <ProductContainer>
                            {cart.products.map(product => (

                            
                            <Product>
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

                                    <QuantityContainer>
                                        <RemoveCircleOutlineOutlinedIcon/>
                                        <Quantity> {product.quantity} </Quantity>
                                        <AddCircleOutlineOutlinedIcon/>
                                    </QuantityContainer>

                                    <Price> £ {product.price * product.quantity} </Price>

                                </QuantityAndPrice>

                            </Product>
                            ))}

                        </ProductContainer>

                        
                    </InfoContainer>

                    <SummaryContainer>
                        <SummaryTitle> ORDER SUMMARY </SummaryTitle>

                        <SummaryItem>
                            <SummaryText> SUBTOTAL </SummaryText>
                            <SummaryPrice> £ {cart.total} </SummaryPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryText> SHIPPING </SummaryText>
                            <SummaryPrice> £{shippingFee} </SummaryPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryText> TOTAL </SummaryText>
                            <SummaryPrice> £ {grandTotal} </SummaryPrice>
                        </SummaryItem>

                        <Button onClick={handleCheckout}>CHECKOUT</Button>

                    </SummaryContainer>

                </BottomWrapper>
            </Wrapper>

            <Footer/>

        </Container>
    )
}

export default ShoppingCartPage