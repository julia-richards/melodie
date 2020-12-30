import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Songs from "./components/Songs";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import SongForm from "./components/SongForm";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import SongPage from "./components/SongPage";

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
			<SearchInput />
			<Route path="/login" exact={true}>
				<LoginForm
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<Route path="/songs/upload">
				<SongForm />
			</Route>
			<Route path="/sign-up" exact={true}>
				<SignUpForm
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
			<Route path="/search/:searchValue">
				<SearchResults />
			</Route>
			<Route path="/songs/:songId">
				<SongPage />
			</Route>
		</BrowserRouter>
	);
}

export default App;
