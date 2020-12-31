import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from 'styled-components'

const NavBar = ({ setAuthenticated }) => {
	return (
		<Nav>
				<li>
					<MenuLink to="/" exact={true} activeClassName="active">
						home
					</MenuLink>
				</li>
				<li>
					<MenuLink to="/login" exact={true} activeClassName="active">
						login
					</MenuLink>
				</li>
				<li>
					<MenuLink
						to="/sign-up"
						exact={true}
						activeClassName="active"
					>
						sign up
					</MenuLink>
				</li>
				<li>
					<MenuLink to="/users" exact={true} activeClassName="active">
						users
					</MenuLink>
				</li>
				<li>
					<MenuLink
						to="/songs/upload"
						exact={true}
						activeClassName="active"
					>
						upload new song
					</MenuLink>
				</li>
				<li>
					<LogoutButton setAuthenticated={setAuthenticated} />
				</li>

		</Nav>
	);
};


const Nav = styled.nav`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: black;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;


export default NavBar;
