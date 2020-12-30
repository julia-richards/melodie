import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import Input from '../../components/Inputs/Input'
import styled from 'styled-components'

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Form onSubmit={onSignUp}>
        <Input
          placeholder='create username'
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        />
        <Input
          placeholder='whats your email?'
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        />
        <Input
          placeholder='make sure its a good password'
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        />

        <Input
          type="password"
          placeholder='it better be a good password'
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
        <button type="submit">Lets play some funky tunes</button>
        {/* implement the functionality for the demo user to login to the page without having to login */}
        <button type="submit">Ok Fine... be a demo user</button>
      </Form>
    </Container>
  );
};




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




export default SignUpForm;
