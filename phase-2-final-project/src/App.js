import './App.css';
import React, {useState, useEffect} from "react"
import {Route , Switch, NavLink, useRouteMatch} from "react-router-dom"

import Homepage from './Homepage';
import SelectedMovie from './SelectedMovie';
import NewMovieForm from './NewMovieForm';


function App() {

  const [movies, setMovies] = useState([])
  const match = useRouteMatch()


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
    synopsis: e.target.synopsis.value,
    director: e.target.director.value,
    release: e.target.release.value,
    starring: [e.target.starring.value],
    poster: e.target.poster.value,
    spotify: e.target.spotify.value,
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
      <img id="homepageLogo" alt='title' src='https://tinyurl.com/5n8r4rtz' />
      <div className="NavLink">
      <NavLink to ="/" className="NavLinkButton" style={{ textDecoration: 'none' }}>Homepage</NavLink>
      <NavLink to ="/addNewMovie" className="NavLinkButton" style={{ textDecoration: 'none' }}>Add New Movie</NavLink>
      </div>
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
