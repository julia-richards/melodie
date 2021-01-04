import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "../styles/NavBar.css"
import SearchInput from "../components/SearchInput";
import cropped from "../assets/1.png"
import styled from 'styled-components'

const NavBar = ({ setAuthenticated }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav>
				<ul className="linkList">
					<li className="left">
						<NavLink to="/landing" exact={true} className="links" activeClassName="active">
							Home
						</NavLink>
					</li>
					<div className="middle">
						<SearchInput />
					</div>
					<div className="right">
						<li>
							<NavLink to="/login" exact={true} className="links" activeClassName="active">
								Log In
						</NavLink>
						</li>
						<li>
							<NavLink
								to="/sign-up"
								exact={true}
								className="links"
								activeClassName="active"
							>
								Sign Up
						</NavLink>
						</li>
						{/* <li>
						<NavLink to="/users" exact={true} className="links" activeClassName="active">
							Users
						</NavLink>
					</li> */}
						<li>
							<NavLink
								to="/songs/upload"
								exact={true}
								className="links"
								activeClassName="active"
							>
								Upload
						</NavLink>
						</li>
						<li>
							<LogoutButton setAuthenticated={setAuthenticated} />
						</li>
					</div>
				</ul>
			</nav>
	);
};


const LogoWrapper = styled.div`
  img {
    height: 5rem;
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


const Button = styled.button`
  font-size: 0.8rem;
  background: #0BDDFA;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #858586;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;

  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 2rem;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
      color: #7781d4;
      background: #e7e9fc;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default NavBar;
