import React, { useState } from 'react';
import styled from "styled-components"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import {sliderContent} from "../data"

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    position: relative; // doing position absolute requires the parent to have position relative
    overflow: hidden;
`

const Wrapper = styled.div`
    display: flex; // organises the slider content horizontally
    height: 100%;
    transform: translateX(${props => props.slideIndex * -100}vw); // using props to move the slider content so the next content is displayed
    transition: all 1s ease;
`

const Slider = styled.div`
    align-items: center;
    display: flex;
    width: 100vw;
    height: 100vh;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Header = styled.h1`
    font-size: 80px;
`

const Description = styled.p`
    margin: 50px 0px;
    letter-spacing: 3px;
    font-size: 30px;
    font-weight: 350;
`

const Button = styled.button`
    border-color: transparent;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
    opacity: 70%;
    // transition effect for transform and opacity
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1); // increases the size by 10% (1.1 times the original size) when hovered
        opacity: 100%; // increases the opacity to 100% when hovered
    }
`


const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    margin-top: 10px;
`

const Image = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover; // gets rid of the stretched effect to maintain high image quality
`

const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%; // makes the background a circle
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    // to centre the positioning of the slider arrows
    top: 0;
    bottom: 0;
    margin: auto;
    // using props to seperate the arrows to the left and right side
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    opacity: 60%;
    cursor: pointer;
    z-index: 2;
`

const LandingPageSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [disableArrow, setDisableArrow] = useState(false);
    const animationDuration = 1000; // animation duration in milliseconds, prevents button spamming

    const handleClick = (direction) => {
        if (disableArrow) {
            return;
        }
        
        setDisableArrow(true);

        const numberOfSlides = sliderContent.length;

        if (direction === "left") {
            setSlideIndex((prevSlideIndex) => (prevSlideIndex - 1 + numberOfSlides) % numberOfSlides);
        } else {
            setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % numberOfSlides);
        }

        setTimeout(() => {
            setDisableArrow(false);
        }, animationDuration);
    };

  return (
    <Container>

        <Wrapper slideIndex={slideIndex}>

        {sliderContent.map((item) => (

            <Slider key={item.id}>

                <ImageContainer>
                  <Image src={item.image}/>
                </ImageContainer>

                <InfoContainer>
                    <Header>
                        {item.header}
                    </Header>
                    <Description>
                        {item.description}
                    </Description>
                    <Button>
                        EXPLORE
                    </Button>
                </InfoContainer>

            </Slider>

        ))}

        </Wrapper>

        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <KeyboardArrowLeftOutlinedIcon/>
        </Arrow>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <KeyboardArrowRightOutlinedIcon/>
        </Arrow>

    </Container>
  )
}

export default LandingPageSlider
