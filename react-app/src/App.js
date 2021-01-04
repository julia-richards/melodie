import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./services/auth";
import SongForm from "./components/SongForm";
import SearchResults from "./components/SearchResults";
import Profile from "./components/Profile";
import SongPage from "./components/SongPage";
import EditSongForm from "./components/EditSongForm";
import Footer from "./components/Footer";
import HomeFeed from "./components/HomeFeed";
import Homepage from "./components/HomePage/Homepage";

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await authenticate();
			if (!res.errors) {
				setAuthenticated(true);
				setUser(res);
			}
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
		<BrowserRouter>
			<NavBar
				authenticated={authenticated}
				setAuthenticated={setAuthenticated}
				user={user}
			/>
			<Route path="/login" exact={true}>
				<LoginForm
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<Route path="/sign-up" exact={true}>
				<SignUpForm
					authenticated={authenticated}
					setAuthenticated={setAuthenticated}
				/>
			</Route>
			<Route path="/" exact={true}>
        {authenticated ? (
          <HomeFeed />
        ) : (
          <Homepage />
        )}
      </Route>
			<Route path="/search/:searchValue">
				<SearchResults />
			</Route>
			<Route path="/songs/:songId" exact={true}>
				<SongPage />
			</Route>
      <ProtectedRoute path="/upload" authenticated={authenticated}>
        <SongForm />
      </ProtectedRoute>
			<ProtectedRoute
				path="/profile/:id"
				exact={true}
				authenticated={authenticated}
			>
				<Profile />
			</ProtectedRoute>
      <ProtectedRoute
        path="/edit/songs/:songId"
        exact={true}
        authenticated={authenticated}
      >
        <EditSongForm />
      </ProtectedRoute>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
