import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorsListPage from "../ActorsListPage/ActorsListPage";
import { movies } from "../../data.js";

import NavBar from "../../components/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log('user',user)
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>  
            {/* Route components in here */}
            <Route path="/" element={<MoviesListPage movies={movies}/>} />
            <Route path="/movies/:movieTitle" element={<MovieDetailPage movies={movies}/>} />
            <Route path="/actors" element={<ActorsListPage  movies={movies}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
