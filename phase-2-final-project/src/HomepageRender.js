import React from "react" 
import { Link } from 'react-router-dom';
function HomepageRender({movies}){
   
    return (
     <div className="Homepage">
        {movies.map((movie) => {
        return <Link key={movie.id} to={`/${movie.urltitle}`}><img key={movie.id} className="Homepage-poster" src={movie.poster} alt={movie.title} /></Link>
      })}
    </div> 
    ) 
}

export default HomepageRender