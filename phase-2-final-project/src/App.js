import './App.css';
import React, {useState, useEffect} from "react"
import {Route , Switch, NavLink, useRouteMatch} from "react-router-dom"

import Homepage from './Homepage';
import SelectedMovie from './SelectedMovie';
import NewMovieForm from './NewMovieForm';


function App() {
 
  const [alert, setAlert] = useState(false)
  
  const [movies, setMovies] = useState([])
  const match = useRouteMatch()

  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data))      
  }, [])


function validatesUserMovie(e){
  e.preventDefault()
 
  const doesMatch = (film) => !(film.Title === e.target.movieTitle.value)
  console.log(movies.every(doesMatch))

  if (movies.every(doesMatch)) {
        handleNewMovie(e)
        console.log('new movie')
    } else {
        console.log('already entered')
    }
  }


function handleNewMovie(e){
  e.preventDefault()
  
  let movieTitle = e.target.movieTitle.value.split(' ').join('+')
  let soundcloud = e.target.soundcloud.value
  
  fetch(`http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=b4d7d7b5`)
        .then((resp) => resp.json())
        .then((searchedMovie) => {
            searchedMovie.soundcloud = soundcloud
            searchedMovie.id = movies.length + 1
            
            return searchedMovie
          })
        .then((movie) => {
          fetch("http://localhost:3000/movies",{

              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(movie)
          })  
          setMovies([...movies, movie]) 
          document.getElementById("newMovieForm").reset() 
        })
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
          <NewMovieForm alert={alert} validatesUserMovie={validatesUserMovie}/>
        </Route>
        <Route  path={`${match.url}:movieTitle`}>
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
