import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";

const ProfileButton = ({ user, setAuthenticated }) => {
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	const onLogoutClick = async () => {
		await logout().then(() => setAuthenticated(false));
	};;

	useEffect(() => {
		if (!showMenu) return;
		const closeMenu = () => {
			setShowMenu(false);
		};
		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	return (
		<div className="profile-button">
			<button
				className="profile-button__trigger"
				style={{
					color: "#4A4E69",
					fontSize: 14,
					backgroundColor: "transparent",
				}}
				onClick={openMenu}
			>
				<i className="fas fa-ellipsis-v"></i>
			</button>
			{showMenu && (
				<ul className="profile-button__dropdown">
					<li>
						<Link to={`/profile/${user.id}`}>{user.username}</Link>
					</li>
					<li>
						<button className="button" onClick={onLogoutClick}>
							Log Out
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default ProfileButton;
