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
          <>
            <NavBar
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              user={user}
            />
            <HomeFeed />
          </>
        ) : (
          <Homepage />
        )}
      </Route>
      <Route path="/search/:searchValue" exact={true}>
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
        />
        <SearchResults />
      </Route>
      <Route path="/songs/:songId" exact={true}>
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
        />
        <SongPage />
      </Route>
      <ProtectedRoute path="/upload" authenticated={authenticated} exact={true}>
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
        />
        <SongForm />
      </ProtectedRoute>
      <ProtectedRoute
        path="/profile/:id"
        exact={true}
        authenticated={authenticated}
      >
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
        />
        <Profile />
      </ProtectedRoute>
      <ProtectedRoute
        path="/edit/songs/:songId"
        exact={true}
        authenticated={authenticated}
      >
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
        />
        <EditSongForm />
      </ProtectedRoute>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
