import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../auth/SignUpForm'

const SignUpPage = () => {
    return (
        <div>
        <SignUpForm/>
        </div>
    )
}



const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;






export default SignUpPage
