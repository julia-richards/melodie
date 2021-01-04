import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import Input from './Input'
import styled from 'styled-components'
import cropped from '../../assets/cropped.png'
import "../../styles/SignUpForm.css";

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
		<div className="signup-form__outer">
			<div className="signup-form__container">
				<Form onSubmit={onSignUp}>
					<LogoWrapper>
						<img src={cropped} alt="Melodie Logo" />
					</LogoWrapper>

					<Input
						type="text"
						placeholder="username"
						name="username"
						onChange={updateUsername}
						value={username}
					></Input>

					<Input
						type="text"
						placeholder="email address"
						name="email"
						onChange={updateEmail}
						value={email}
					></Input>

					<Input
						type="password"
						placeholder="password"
						name="password"
						onChange={updatePassword}
						value={password}
					></Input>

					<Input
						type="password"
						placeholder="confirm password"
						name="repeat_password"
						onChange={updateRepeatPassword}
						value={repeatPassword}
						required={true}
					></Input>

					<button type="submit">Sign Up</button>
				</Form>
			</div>
		</div>
	);
};


const LogoWrapper = styled.div`
	img {
		height: 6rem;
		margin: 2rem auto 1rem;
	}
`;

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

export default SignUpForm;
