import React from "react" 
import { Link } from 'react-router-dom';

function Homepage({movies}){

    return (
     <div className="Homepage">
        {movies.map((movie) => {
        return <Link className="movieLink" key={movie.id} to={`/${movie.Title}`}><img key={movie.id} className="Homepage-poster" src={movie.Poster} alt={movie.Title} /></Link>
      })}
    </div> 
    ) 
}

export default Homepage