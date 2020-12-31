import React, { useState } from 'react'

const Hero = () => {
    return (
        <div>
            <Container>

                <h5>Rediscover your favorite artists with the click of a button.</h5>
                <h1>find</h1>
                <h1>your</h1>
                <h1>personal</h1>
                <h1>anthem.</h1>
                <BtnContainer>
                    <button className="readmore">Read More</button>
                    <button><a href="/sign-up">Sign Up Today</a></button>
                </BtnContainer>
            </Container>
        </div>
    )
}


const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #f2bc66;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #e4ebf7;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #b7cff7;
    }
    &:nth-of-type(3) {
      color: #89b1f5;
    }
    &:nth-of-type(4) {
      color:#337af5;
    }
  }
`;

export default Hero;