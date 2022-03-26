import React from "react" 
import { Link } from 'react-router-dom';

function Homepage({movies}){
   
  console.log(movies)
    return (
     <div className="Homepage">
        {movies.map((movie) => {
          console.log(movie.id)
        return <Link className="movieLink" key={movie.id} to={`/${movie.id}`}><img key={movie.id} className="Homepage-poster" src={movie.Poster} alt={movie.Title} /></Link>
      })}
    </div> 
    ) 
}

export default Homepage