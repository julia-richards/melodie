
import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    return (
        <div>
            <Container>
                <StyledInput
                    {...props}
                    placeholder={props.placeholder && props.placeholder}
                    type={props.type ? props.type : "text"}
                    required
                    autocomplete="off"
                />
                <Status />
            </Container>
        </div>
    )
}


const StyledInput = styled.input`
  width: 80%;
  max-width: 300px;
  min-width: 200px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 5px;
  width: 5px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
`;


export default Input


