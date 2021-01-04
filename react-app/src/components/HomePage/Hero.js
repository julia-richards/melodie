import React from "react";
import styled from "styled-components";
import image from "../../assets/thank.jpg";
import image2 from "../../assets/moon.jpg"
import image3 from "../../assets/ari.jpg"
import image4 from "../../assets/slow.jpg"
import image5 from "../../assets/folklore.jpeg"
import image6 from "../../assets/mccartney.png"
import bg from "../../assets/bg.png";
import HeroText from "./HeroText";
import Tilt from "react-tilt";

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt= "@gouthamgtronics" />
            <Img src={image2} alt="@gouthamgtronics" />
            <Img src={image3} alt="@gouthamgtronics" />
            <Img src={image4} alt="@gouthamgtronics" />
            <Img src={image5} alt="@gouthamgtronics" />
            <Img src={image6} alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 28%;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  /* background-color: rgba(255, 255, 255, 0.0); */
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    /* background-color: rgba(255, 255, 255, 0.5); */
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Hero;
