import React from "react"

function MovieInfo({movie}){
    return (
        <div className="movieDetails">
            
            <span className="details">Director:</span> {movie.Director}<br/>
            <span className="details">Released:</span> {movie.Released}<br/>
            <span className="details">Starring:</span> {movie.Actors}<br/>
        </div>
    )
}

export default MovieInfo