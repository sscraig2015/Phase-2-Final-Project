import './App.css';
import React, {useState, useEffect} from "react"
import {Route , Switch, Link} from "react-router-dom"
import HomepageRender from './HomepageRender';
import RenderMovie from './RenderMovie';




function App() {
  const [movies, setMovies] = useState([])
  console.log(movies)
  

  useEffect(() => {
    
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data)) 
       
  }, [])


  return (
    <div>      
      <Link to={"/"}><h2>Homepage</h2></Link>
      <Switch>
        <Route exact path="/">
          <HomepageRender movies={movies}/>
        </Route>
        <Route exact path="/the-thing">
          <RenderMovie movie={movies} />
        </Route>
        <Route exact path="/toy-story">
          <RenderMovie movie={movies} />
        </Route>
        <Route exact path="/the-treasure-of-the-sierra-madre">
          <RenderMovie movie={movies} />
        </Route>
        <Route exact path="/catwoman">
          <RenderMovie movie={movies} />
        </Route>
        <Route exact path="/jack-and-jill">
          <RenderMovie movie={movies} />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
