import React from "react"
import Alert from "./Alert"
import { useState } from "react"

function NewMovieForm({movies, handleNewMovie}){
    
    const [alertStatus, setAlertStatus] = useState(false)
    const [answer, setAnswer] = useState(null)
      
    function findSearchedMovie(e){
        e.preventDefault()
        
        let movieTitle = e.target.movieTitle.value.split(' ').join('+')
        let soundcloud = e.target.soundcloud.value
  
        fetch(`http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=b4d7d7b5`)
            .then((resp) => resp.json())
            .then((resp) => {
            if (resp.Response === "False") {
                console.log("movie not found")
            } else {
                console.log(resp)
                validateSearchedMovie(resp, soundcloud)
            }
            })
    }
        
    function validateSearchedMovie(movieObj, soundcloud) {
        
        const doesntMatch = (film) => !(film.Title.toLowerCase() === movieObj.Title.toLowerCase())
      
        if (movies.every(doesntMatch)) {
            handleNewMovie(movieObj, soundcloud)
            setAnswer(true)
            setAlertStatus(true)
            console.log('new movie')
              
          } else {
              console.log('already entered')
              setAnswer(false)
              setAlertStatus(true)
          }
    }
    
    return (
        
        <div className="newMovieForm">
            <h3 id="newMovieFormTitle">Add details and then SUBMIT to add new movie</h3>
            {alertStatus ? <Alert answer={answer} setAlertStatus = {setAlertStatus}/> : null}
            <form onSubmit={findSearchedMovie} id="newMovieForm">
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