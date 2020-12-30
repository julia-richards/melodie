import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import Input from '../../components/Inputs/Input'
import styled from 'styled-components';
import cropped from '../../assets/cropped.png'

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (

    <Container>
      <Form onSubmit={onLogin}>
      <LogoWrapper>
        <img src={cropped} alt='' />
      </LogoWrapper>
      <br></br>
      <br></br>
      <Welcome>
        <h1>Welcome Back.</h1>
        </Welcome>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
  
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};

const Welcome = styled.div`
h1{


font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: lighter;
font-size: 50px;
line-height: 12px;
color: #ffffff;
}`


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #3bc9f5;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;


const LogoWrapper = styled.div`
  img {
    height: 6rem;
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


const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  /* background-color: rgba(255, 255, 255, 0.8); */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;



export default LoginForm;
