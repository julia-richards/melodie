import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Link to="https://github.com/julia-richards/melodie" activeClassName="active">
                melodie GitHub repo
            </Link>
            <Link to="https://github.com/julia-richards" activeClassName="active">
                Julia's GitHub
            </Link>
            <Link to="https://github.com/sal-wav" activeClassName="active">
                Salina's GitHub
            </Link>
            <Link to="https://github.com/monajain99" activeClassName="active">
                Rashmi's GitHub
            </Link>
            <Link to="https://github.com/hassanmt96" activeClassName="active">
                Hassan's GitHub
            </Link>
        </Container>
    );
}

const Container = styled.div`
padding: 5px 15px 5px 15px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: black;
position: relative;
left: 0;
right:0;
bottom: 0;
`;

const Link = styled(NavLink)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  transition: all 0.3s ease-in;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

export default Footer;
