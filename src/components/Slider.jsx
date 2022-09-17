import React from 'react'
import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from "../responsive";
import { landScape } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    background-image: url('/images/design.jpg');
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
    ${landScape({ display: "none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    /* to center vertically */
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease;
   transform: translateX(${(props) => props.slideIndex * -100}vw);
   /* for the first item is : (0 *-100vw),  second item is: (1 *-100vw), third item is: (2 *-100vw)*/
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
   display: flex;
   align-items: center;
   background-color: #${props => props.bg}
`
const ImgContainer = styled.div`
   height: 100%;
   flex: 1;
`
const Image = styled.img`
   flex: 1;
   height: 80%;
   border-radius: 5px
`
const InfoContainer = styled.div`
   flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    const [slideIndex, setslideIndex] = useState(0)
   const handleClick = (direction) => {
    console.log('clicked', direction)
     if(direction === "left") {
        setslideIndex(slideIndex > 0 ? slideIndex - 1: 4)
     } else  {
        setslideIndex(slideIndex < 4 ? slideIndex + 1: 0)
     }
   };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => ( 
            <Slide bg={item.bg} key={item.id}> 
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW 🛒</Button>
                </InfoContainer>
            </Slide>))}

            /* <Slide bg="f5fafd"> 
                <ImgContainer>
                    <Image src='/images/omid.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>GREAT ACCESSORIES AND STYLES TO MAKE YOUR DAY COLORFUL 🤗...DON'T COMPROMISE , GET FLAT 30% OFF FOR YOUR NEW ARRIVALS!</Desc>
                    <Button>SHOP NOW 🛒</Button>
                </InfoContainer>
            </Slide>

            <Slide bg="f5fafd"> 
                <ImgContainer>
                    <Image src='/images/omid.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>BRAND SALE</Title>
                    <Desc>GREAT ACCESSORIES AND STYLES TO MAKE YOUR DAY COLORFUL 🤗...DON'T COMPROMISE , GET FLAT 30% OFF FOR YOUR NEW ARRIVALS!</Desc>
                    <Button>SHOP NOW 🛒</Button>
                </InfoContainer>
            </Slide>

            <Slide bg="f5fafd"> 
                <ImgContainer>
                    <Image src='/images/omid.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title>POPULAR SALE</Title>
                    <Desc>GREAT ACCESSORIES AND STYLES TO MAKE YOUR DAY COLORFUL 🤗...DON'T COMPROMISE , GET FLAT 30% OFF FOR YOUR NEW ARRIVALS!</Desc>
                    <Button>SHOP NOW 🛒</Button>
                </InfoContainer>
            </Slide> */
        </Wrapper >
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider