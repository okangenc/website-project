// the content here will be placed within the "LandingProducts" file
// "LandinProducts" is the container which stores content from this file

import styled from "styled-components"
import React from 'react'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Link } from 'react-router-dom';

const Options = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; // sets the initial opacity to 0 (hidden)
    transition: opacity 0.3s ease-in-out; // transition effect for opacity
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: background-color 0.3s ease-in-out; // transition effect for background-color
`;

const Container = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    height: 350px;
    min-width: 280px;

    &:hover ${Options}, &:hover ${Overlay} {
        opacity: 1; // increases the opacity of options to 1 (visible) when hovered
        background-color: rgba(0, 0, 0, 0.15); // sets the back background with 50% opacity when hovered
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover; // gets rid of the stretched effect to maintain high image quality
`

const Icon = styled.div`
    display: flex;
    height: 50px;
    width: 50px;
    opacity: 50%;
    border-radius: 50%; // circle
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 16px;
    cursor: pointer;
    // transition effect for height, width, and opacity
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
        height: 70px; // increases the height to 70px when hovered
        width: 70px; // increases the width to 70px when hovered
        opacity: 70%; // increases the opacity to 70% when hovered
    }
`



const NewProducts = ({item}) => {
    return (
      <Container>
          <Image src={item.image}/>
          <Overlay /> {/* add the overlay component */}
          <Options>
              <Icon>
                  <AddShoppingCartOutlinedIcon/> 
              </Icon>
              <Icon>
                <Link to = { `/product/${item._id}` }>
                    <SearchOutlinedIcon/> 
                </Link>
              </Icon>
              <Icon>
                  <BookmarkAddOutlinedIcon/> 
              </Icon>
          </Options>
      </Container>
    )
  }

export default NewProducts