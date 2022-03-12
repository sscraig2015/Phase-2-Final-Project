import './App.css';
import React, {useState, useEffect} from "react"
import {Route , Switch, NavLink} from "react-router-dom"
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
  
  
  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data)) 
       
  }, [])

function handleNewMovie(e){
  e.preventDefault()
  console.log(e.target.title.value)
  let data = {
    title: e.target.title.value,
    synopsis: e.target.synopsis.value,
    director: e.target.director.value,
    release: e.target.release.value,
    starring: e.target.starring.value,
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
      <NavLink to ="/newMovie">Add New Movie</NavLink>
      <Switch>
        <Route path="/newMovie">
          <NewMovieForm handleNewMovie={handleNewMovie}/>
        </Route>
        <Route exact path="/">
          <Homepage movies={movies}/>
        </Route>
        <Route exact path="/movies/:id">
          <SelectedMovie movie={movies} />
        </Route>
        <Route exact path="/the-thing">
          <SelectedMovie movie={movies} />
        </Route>
        <Route exact path="/toy-story">
          <SelectedMovie movie={movies} />
        </Route>
        <Route exact path="/the-treasure-of-the-sierra-madre">
          <SelectedMovie movie={movies} />
        </Route>
        <Route exact path="/catwoman">
          <SelectedMovie movie={movies} />
        </Route>
        <Route exact path="/jack-and-jill">
          <SelectedMovie movie={movies} /> 
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
