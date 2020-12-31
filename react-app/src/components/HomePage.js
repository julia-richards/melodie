import React from 'react'
import styled from 'styled-components'
import wildandfree from '../assets/wildandfree.jpg'

const HomePage = () => {
    return (
        <div>
            <Container>

                <br></br>
                <Message>
                    <h1>
                        Rediscover your favorite artists with the click of a button.
                    </h1>
                </Message>
                <br></br>
                <br></br>
                <br></br>
              <Mariah>
            {/* <img src={wildandfree} alt='' /> */}
              </Mariah>
                <br></br>
                <br></br>
                <br></br>
                <BtnContainer>
                    <button className="readmore">Read More</button>
                    <button><a href="/sign-up">Sign Up Today</a></button>
                </BtnContainer>
            </Container>
        </div>
    )
}



const Mariah = styled.image`
background-image: url({wildandfree});
position: absolute;
width: 308px;
height: 135px;
left: 290px;
top: 92px;`

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

const Message = styled.div`

padding: 2rem;

h1{
color: #337af5;
margin-bottom: 1rem;

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 100px;

}
`;

const Container = styled.div`
background: linear-gradient(180deg, #6DD1DF 0%, rgba(255, 255, 255, 0) 83.85%), #2C3E50;
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

export default HomePage;
