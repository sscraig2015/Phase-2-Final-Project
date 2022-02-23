import './App.css';
import React, {useEffect, useState} from "react"


function App() {
  const [movies, setMovies] = useState(null)
  
  useEffect(() => {
    fetch("http://localhost:3000/movies")
        .then((resp) => resp.json())
        .then((data) => setMovies(data))
        
  }, [])
  
  return (
    <div>
      {movies.map((movie) => 
        console.log(movie)
      )}
    </div>
    
  );
}

export default App;
