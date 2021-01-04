import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Songs from "./components/Songs";
import UsersList from "./components/UsersList";
import { authenticate } from "./services/auth";
import SongForm from "./components/SongForm";
import SearchResults from "./components/SearchResults";
import Profile from "./components/Profile";
import SongPage from "./components/SongPage";
import EditSongForm from "./components/EditSongForm";
import Footer from "./components/Footer";
import Homepage from "./components/HomePage/Homepage";

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
          <div className="pageContainer">
          <h1 className="heading">Featured</h1>
          <Songs />
        </div>
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

      <ProtectedRoute path="/songs/upload" authenticated={authenticated}>
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
      <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
        <UsersList />
      </ProtectedRoute>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
