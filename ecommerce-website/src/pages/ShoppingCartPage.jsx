import React from 'react'
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
    justify-content: space-between;
    // background-color: aqua;
`

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

const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 1px;
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

const Colour = styled.span``

const Size = styled.span``


const ShoppingCartPage = () => {
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

                        <Product>
                            <Image src = "https://images.unsplash.com/photo-1605235185922-7dccaf4ef5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
                            <Details>
                                <Name>
                                    <b>PRODUCT:</b> PURPLE SPORTS JACKET
                                </Name>
                                <ID>
                                    <b>ID:</b> 82374982678
                                </ID>
                                <Colour>
                                    <b>COLOUR:</b> PURPLE
                                </Colour>
                                <Size>
                                    <b>SIZE:</b> S
                                </Size>
                            </Details>

                            <QuantityAndPrice>

                                <QuantityContainer>
                                    <RemoveCircleOutlineOutlinedIcon/>
                                    <Quantity>2</Quantity>
                                    <AddCircleOutlineOutlinedIcon/>
                                </QuantityContainer>

                                <Price> £ 20 </Price>

                            </QuantityAndPrice>

                        </Product>

                    </ProductContainer>

                    <Hr/>

                    <ProductContainer>

                        <Product>
                            <Image src = "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                            <Details>
                                <Name>
                                    <b>PRODUCT:</b> WATER BOTTLES
                                </Name>
                                <ID>
                                    <b>ID:</b> 72638275631
                                </ID>
                                <Colour>
                                    <b>COLOUR:</b> ORANGE
                                </Colour>
                                <Size>
                                    <b>SIZE:</b> ONE SIZE
                                </Size>
                            </Details>

                            <QuantityAndPrice>

                                <QuantityContainer>
                                    <RemoveCircleOutlineOutlinedIcon/>
                                    <Quantity>2</Quantity>
                                    <AddCircleOutlineOutlinedIcon/>
                                </QuantityContainer>

                                <Price> £ 20 </Price>

                            </QuantityAndPrice>

                        </Product>

                    </ProductContainer>

                </InfoContainer>

                <SummaryContainer>

                    <SummaryTitle> ORDER SUMMARY </SummaryTitle>

                    <SummaryItem>
                        <SummaryText> SUBTOTAL </SummaryText>
                        <SummaryPrice> £40 </SummaryPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryText> SHIPPING </SummaryText>
                        <SummaryPrice> £3 </SummaryPrice>
                    </SummaryItem>

                    <SummaryItem type = "total">
                        <SummaryText> TOTAL </SummaryText>
                        <SummaryPrice> £43 </SummaryPrice>
                    </SummaryItem>

                    <Button> CHECKOUT </Button>

                </SummaryContainer>

            </BottomWrapper>
        </Wrapper>

        <Footer/>

    </Container>
  )
}

export default ShoppingCartPage