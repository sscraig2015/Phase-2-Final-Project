import React from "react"

function MovieInfo({movie}){
    return (
        <div className="movieDetails">
            
            <span className="details">Director:</span> {movie.director}<br/>
            <span className="details">Released:</span> {movie.release}<br/>
            <span className="details">Starring:</span> {movie.starring.map((actor) => {
                        return (`${actor}, `)})}<br/>
        </div>
    )
}

export default MovieInfo