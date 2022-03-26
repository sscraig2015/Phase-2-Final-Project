import React, {useState} from "react"
import Synopsis from "./Synopsis"
import MovieInfo from "./MovieInfo"
import ListenLinks from "./ListenLinks"
import { useParams} from "react-router-dom"


function SelectedMovie({movie}){

    console.log(movie)
    let params = useParams()
    console.log(params)
    
    let selectedMovie = movie[params.movieId - 1]
    console.log(selectedMovie)
    
    const [movieInfo, setMovieInfo] = useState(false)
    
    function showMovieInfo(){
        setMovieInfo(!movieInfo)
    }
    
    return (
       <div className="selectedMovie">
            <h1>{selectedMovie.Title}</h1>
            <div className="movieInfoAll">
                <tbody className="movieInfoBox">
                    <tr>
                        <td><img alt={selectedMovie.Title} src={selectedMovie.Poster} className="selectedMoviePoster"/></td>
                    </tr>
                    <tr>
                        <button id="showInfoButton" onClick={showMovieInfo}>Show/Hide Movie Info</button>
                        {movieInfo ? <MovieInfo movie={selectedMovie}/> : null}
                    </tr>
                </tbody>           
                <Synopsis synopsis={selectedMovie.Plot}/>
                
            </div>       
                <ListenLinks soundcloud={selectedMovie.soundcloud}/>

       </div>
      
   )
}
export default SelectedMovie