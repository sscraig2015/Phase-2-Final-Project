import React from "react" 

function HomepageRender({movies}){
    return (
     <div className="Homepage">
         {console.log(movies)}
        {movies.map((movie) => {
        return <img key={movie.id} className="Homepage-poster" src={movie.poster} alt={movie.title} />
      })}
    </div> 
    ) 
}

export default HomepageRender