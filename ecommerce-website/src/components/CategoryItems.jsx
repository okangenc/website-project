import styled from "styled-components"
import React from 'react'
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    height: 60vh;
    margin: 10px;
    position: relative; // parent must be "position relative" for child to be "position absolute"
`

const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column; // stacks the content horizontally
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    // centre the content within the images
    align-items: center;
    justify-content: center;
`

const Header = styled.h1`
    margin-bottom: 20px;
    color: white;
`

const Button = styled.button`
    cursor: pointer;
    background-color: white;
    color: black; // font color
    padding: 10px;
    border: none;
    font-weight: 70%;
    opacity: 50%;
    width: 80px;
    transition: width 0.3s ease-in-out; // transition effect to smoothly change the width

    &:hover {
        width: 100px; // increases the width by 20px when hovered over
        opacity: 70%; // increases the opacity by 20% when hovered over
    }
`

const CategoryItems = ({item}) => {
  return (
    <Container>
        <Link to = {`/category/${item.category}`}>
            <Image src = {item.image}/>
            <Info>
                <Header>
                    {item.header}
                </Header>
                <Button>
                    SHOP
                </Button>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItems