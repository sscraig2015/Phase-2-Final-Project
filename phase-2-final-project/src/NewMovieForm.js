import React from "react"
import Alert from "./Alert"
import { useState } from "react"

function NewMovieForm({movies, handleNewMovie}){
    
    const [alert, setAlert] = useState(null)
      
    function validatesUserMovie(e){
        e.preventDefault()
        
        const doesntMatch = (film) => !(film.Title.toLowerCase() === e.target.movieTitle.value.toLowerCase())
        console.log(movies.every(doesntMatch))
      
        if (movies.every(doesntMatch)) {
              handleNewMovie(e)
              console.log('new movie')
              setAlert(true)
          } else {
              console.log('already entered')
              setAlert(false)
          }
    }
    
    return (
        
        <div className="newMovieForm">
            <h3 id="newMovieFormTitle">Add details and then SUBMIT to add new movie</h3>
            {alert ? <Alert status={true}/> : <Alert status={false}/>}
            <form onSubmit={validatesUserMovie} id="newMovieForm">
                <table>
                    <tbody>
                        <tr>
                            <td>Soundcloud Link: </td>
                            <td><input type="text" name="soundcloud"/></td>    
                        </tr>
                        <tr>
                            <td>Movie Title</td>
                            <td><input type="text" name="movieTitle"/></td>    
                        </tr>
                        <tr>
                            <td><input type="submit" /></td>
                        </tr>
                    </tbody>    
                </table>
            </form>
        </div>
    )
}

export default NewMovieForm