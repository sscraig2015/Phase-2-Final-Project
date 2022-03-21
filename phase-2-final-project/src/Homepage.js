import React from "react" 
import { Link } from 'react-router-dom';

function Homepage({movies}){
   
    return (
     <div className="Homepage">
        {movies.map((movie) => {
        return <Link className="movieLink" key={movie.id} to={`/${movie.id}`}><img key={movie.id} className="Homepage-poster" src={movie.poster} alt={movie.title} /></Link>
      })}
    </div> 
    ) 
}

export default Homepage