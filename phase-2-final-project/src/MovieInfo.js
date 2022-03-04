import React from "react"

function MovieInfo({movie}){
    return (
        <div>
            
            Director: {movie.director}<br/>
            Released: {movie.release}<br/>
            Starring: {movie.starring.map((actor) => {
                        return (`${actor}, `)})}<br/>
        </div>
    )
}

export default MovieInfo