import React, {useState} from "react"
import Synopsis from "./Synopsis"
import MovieInfo from "./MovieInfo"
import ListenLinks from "./ListenLinks"
import { useParams} from "react-router-dom"


function SelectedMovie({movie}){

    let params = useParams()
    
    let selectedMovie = movie[params.movieId - 1]
    console.log(selectedMovie.soundcloud)
    const [movieInfo, setMovieInfo] = useState(false)
    
    function showMovieInfo(){
        setMovieInfo(!movieInfo)
    }
    
    return (
       <div className="selectedMovie">
            <h1>{selectedMovie.title}</h1>
            <div className="movieInfoAll">
                <tbody className="movieInfoBox">
                    <tr>
                        <td><img alt={selectedMovie.title} src={selectedMovie.poster} className="selectedMoviePoster"/></td>
                    </tr>
                    <tr>
                        <button id="showInfoButton" onClick={showMovieInfo}>Show/Hide Movie Info</button>
                        {movieInfo ? <MovieInfo movie={selectedMovie}/> : null}
                    </tr>
                </tbody>           
                <Synopsis synopsis={selectedMovie.synopsis}/>
                
            </div>       
                <ListenLinks soundcloud={selectedMovie.soundcloud}/>

       </div>
      
   )
}
export default SelectedMovie