import React from "react"


function NewMovieForm({handleNewMovie}){

    return (
        <div className="Homepage">
            Add details and then hit submit to add new movie
            <form onSubmit={handleNewMovie}>
                Title: <input type="text" name="title"/><br/>
                Synopsis: <input type="text" name="synopsis"/><br/>
                Director: <input type="text" name="director"/><br/>
                Release: <input type="text" name="release"/><br/>
                Starring: <input type="text" name="starring"/><br/>
                Poster: <input type="text" name="poster"/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default NewMovieForm