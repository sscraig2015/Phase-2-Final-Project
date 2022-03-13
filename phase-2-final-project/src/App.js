import './App.css';
import React, {useState, useEffect} from "react"
import {Route , Switch, NavLink, useRouteMatch} from "react-router-dom"

import Homepage from './Homepage';
import SelectedMovie from './SelectedMovie';
import NewMovieForm from './NewMovieForm';

const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function App() {
  const [movies, setMovies] = useState([])
  const match = useRouteMatch()
  console.log(movies)

  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data)) 
       
  }, [])

function handleNewMovie(e){
  e.preventDefault()
  
  let data = {
    id: movies.length + 1,
    title: e.target.title.value,
    urltitle: e.target.title.value,
    synopsis: e.target.synopsis.value,
    director: e.target.director.value,
    release: e.target.release.value,
    starring: [e.target.starring.value],
    poster: e.target.poster.value,
    upvote: 0,
    downvote: 0,
  }

  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })

  setMovies([...movies,data])
}

  return (
    <div>      
      <NavLink to ="/" style={linkStyles}>Homepage</NavLink>
      <NavLink to ="/addNewMovie">Add New Movie</NavLink>
      <Switch>
        <Route  path="/addNewMovie/">
          <NewMovieForm handleNewMovie={handleNewMovie}/>
        </Route>
        <Route  path={`${match.url}:movieId`}>
          <SelectedMovie movie={movies} />
        </Route>
        <Route  path="/">
          <Homepage movies={movies}/>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
