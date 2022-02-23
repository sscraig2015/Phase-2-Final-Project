import './App.css';
import React, {useState, useEffect} from "react"
import HomepageRender from './HomepageRender';



function App() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data))
        
        
  }, [])
  
  return (
    <div>
      
      <h2>Homepage</h2>
      <HomepageRender movies={movies}/>
      
    </div>
    
  );
}

export default App;
