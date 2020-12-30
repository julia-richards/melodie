import React from 'react'
import styled from 'styled-components';
import LoginForm from '../auth/LoginForm'



const LoginPage = () => {
    return (
        <Container>
            <LoginForm/>
        </Container>
    )
}

const Container = styled.div`
  background: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;




export default LoginPage
