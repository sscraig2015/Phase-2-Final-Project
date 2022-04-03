import React from "react" 
import { Link } from 'react-router-dom';

function Homepage({movies, deleteMovie}){

    return (
     <div className="Homepage">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movieObj">
              <Link className="movieLink" key={movie.id} to={`/${movie.Title}`}>
                <img key={movie.id} className="Homepage-poster" src={movie.Poster} alt={movie.Title} />
              </Link>
              <button onClick={deleteMovie} name={movie.id} key={movie}>Delete</button>
            </div>  
        )})}
    </div> 
    ) 
}

export default Homepage