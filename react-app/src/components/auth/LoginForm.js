import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../services/auth";
import Input from './Input.js'
import styled from 'styled-components'
import cropped from '../../assets/cropped.png'
import DemoButton from "./DemoButton";
import '../../styles/LoginForm.css'

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
    <div className="login-form__outer">
      <div className="login-form__container">
        <Form className="login-form" onSubmit={onLogin}>
      <LogoWrapper>
        <img src={cropped} alt='logo' />
      </LogoWrapper>
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
        <div className="login-form__redirect-text">Don't have an account?<br /> <Link to='/sign-up'>Sign Up</Link> or <DemoButton setAuthenticated={setAuthenticated} isLink /></div>
      </div>
    </div>
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
    max-width: 300px;
    min-width: 200px;
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
    margin: 2rem auto 1rem;
  }
`;

export default LoginForm;
