import './App.css';
import React, {useState, useEffect} from "react"
import {Route , Switch, NavLink, useRouteMatch} from "react-router-dom"

import Homepage from './Homepage';
import SelectedMovie from './SelectedMovie';
import NewMovieForm from './NewMovieForm';


function App() {
 
  const [update, setUpdate] = useState(false)
  const [movies, setMovies] = useState([])
  const match = useRouteMatch()


  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data))      
  }, [update])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data))      
  }, [])


  function deleteMovie(e){
  
  const movieIndex = e.target.name
  
  // let newArray = movies
  // newArray.splice(movieIndex - 1, 1,)
  // setMovies(newArray)
  setUpdate(!update)   
    
  fetch(`http://localhost:3000/movies/${movieIndex}`, {
    method:'DELETE',
    body: JSON.stringify(null)
    })

    
}



function handleNewMovie(movieObj, soundcloud){

  movieObj.soundcloud = soundcloud
  movieObj.id = movies.length + 1

  fetch("http://localhost:3000/movies",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      },
    body: JSON.stringify(movieObj)
      })  
    
    setMovies([...movies, movieObj]) 
    document.getElementById("newMovieForm").reset() 

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
          <NewMovieForm handleNewMovie={handleNewMovie} movies={movies}/>
        </Route>
        <Route  path={`${match.url}:movieTitle`}>
          <SelectedMovie movie={movies} />
        </Route>
        <Route  path="/">
          <Homepage movies={movies} deleteMovie={deleteMovie}/>
        </Route>/
      </Switch>
    </div>
    
  );
}

export default App;
