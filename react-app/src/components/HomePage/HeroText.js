import React from "react";
import styled from "styled-components";
import cropped from '../../assets/cropped.png'

const HeroText = () => {
  return (
		<Container>
			<LogoWrapper>
				<img src={cropped} alt="" />
			</LogoWrapper>
			<h5>Music Simplified.</h5>
			<h1>
				Rediscover
				<br />
				Your
				<br />
				Favorite
				<br />
				Tracks.
			</h1>
			<BtnContainer>
				<button
					className="github"
					onClick={(e) => {
						e.preventDefault();
						window.location.href = "https://github.com/julia-richards/melodie";
					}}
				>
					github
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						window.location.href = "/login";
					}}
				>
					login
				</button>
			</BtnContainer>
		</Container>
	);
};



const LogoWrapper = styled.div`
  img {
    height: 5rem;
  }
  h3 {
    color: #FFF0F0;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;
const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #0BDDFA;
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

  .github {
    color: #0BDDFA;
    background: transparent;
    border: 3px solid #0BDDFA;
    &:hover {
      box-shadow: 0px 17px 16px -11px #0BDDFA;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  font-family: "Raleway", sans-serif;
  h5 {
    color: #3bc9f5;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 500;

    &:nth-of-type(1) {
      color: #0BDDFA;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #0BDDFA;
    }
    &:nth-of-type(3) {
      color: #0BDDFA;
    }
    &:nth-of-type(4) {
      color:#0BDDFA;
    }
  }
`;

export default HeroText;
