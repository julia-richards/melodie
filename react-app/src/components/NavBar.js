import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from 'styled-components'

const NavBar = ({ setAuthenticated }) => {
	return (
		<Nav>
				<MenuLink to="/" exact={true} activeClassName="active">
					Home
					</MenuLink>


				<MenuLink to="/login" exact={true} activeClassName="active">
					Login
					</MenuLink>


				<MenuLink
					to="/sign-up"
					exact={true}
					activeClassName="active"
				>
					Sign Up
					</MenuLink>


				<MenuLink to="/users" exact={true} activeClassName="active">
					Users
					</MenuLink>


				<MenuLink
					to="/songs/upload"
					exact={true}
					activeClassName="active"
				>
					Upload New Song
					</MenuLink>

				<LogoutButton setAuthenticated={setAuthenticated} />
		</Nav>
	);
};

const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
position: absolute;
top: 0;
left: 0;
right:0;
`;


const MenuLink = styled(NavLink)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #3bc9f5;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;


export default NavBar;
