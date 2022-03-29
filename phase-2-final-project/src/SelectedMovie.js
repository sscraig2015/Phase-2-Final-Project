import React, {useState} from "react"
import Synopsis from "./Synopsis"
import MovieInfo from "./MovieInfo"
import ListenLinks from "./ListenLinks"
import { useParams} from "react-router-dom"


function SelectedMovie({movie}){

    let params = useParams()


    const selectedMovie = movie.find((movie) => movie.Title === params.movieTitle)
   
    const [movieInfo, setMovieInfo] = useState(true)
    
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