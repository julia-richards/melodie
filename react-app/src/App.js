import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Songs from "./components/Songs";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import SongForm from "./components/SongForm";
import SignUpPage from './components/SignUpPage/SignUpPage'
import LoginPage from "./components/LoginPage/LoginPage"

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar setAuthenticated={setAuthenticated} />
			<Route path="/login" exact={true}>
				<LoginPage
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<Route path="/songs/upload">
				<SongForm />
			</Route>
			<Route path="/sign-up" exact={true}>
				<SignUpPage
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<ProtectedRoute
				path="/users"
				exact={true}
				authenticated={authenticated}
			>
				<UsersList />
			</ProtectedRoute>
			<ProtectedRoute
				path="/users/:userId"
				exact={true}
				authenticated={authenticated}
			>
				<User />
			</ProtectedRoute>
			<ProtectedRoute path="/" exact={true} authenticated={authenticated}>
				<h1>My Home Page</h1>
				<Songs />
			</ProtectedRoute>
		</BrowserRouter>
	);
}

export default App;
