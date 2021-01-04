import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "../styles/NavBar.css"
import SearchInput from "../components/SearchInput";

const NavBar = ({ setAuthenticated }) => {
	return (
		<nav className="navbar">
			<ul className="linkList">
				<li className="left">
					<NavLink to="/landing" exact={true} className="links" activeClassName="active">
						Home
					</NavLink>
				</li>
				<div className="middle">
					<SearchInput/>
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

export default NavBar;
