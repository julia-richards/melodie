import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import SearchInput from "./SearchInput";

const NavBar = ({ setAuthenticated }) => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" exact={true} activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/login" exact={true} activeClassName="active">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-up"
						exact={true}
						activeClassName="active"
					>
						Sign Up
					</NavLink>
				</li>
				<li>
					<NavLink to="/users" exact={true} activeClassName="active">
						Users
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/songs/upload"
						exact={true}
						activeClassName="active"
					>
						Upload New Song
					</NavLink>
				</li>
				<li>
					<SearchInput />
				</li>
				<li>
					<LogoutButton setAuthenticated={setAuthenticated} />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
