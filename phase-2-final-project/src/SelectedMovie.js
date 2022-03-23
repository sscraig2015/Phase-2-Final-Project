import React, {useState} from "react"
import Synopsis from "./Synopsis"
import Rating from "./Rating"
import MovieInfo from "./MovieInfo"
import { useParams} from "react-router-dom"


function SelectedMovie({movie}){

    let params = useParams()
    
    let selectedMovie = movie[params.movieId - 1]
    console.log(selectedMovie)
    const [upvote, setUpvote] = useState(selectedMovie.upvote)
    const [downvote, setDownvote] = useState(selectedMovie.downvote)
    const [movieInfo, setMovieInfo] = useState(false)
    

    function handleVote(e){
        if (e.target.name === "upvote") {
                   
            setUpvote(upvote + 1)
                   
            let data = upvote
            
            fetch(`http://localhost:3000/movies/${selectedMovie.id}`, {
            method:"PATCH",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({upvote : data})
        })
        
        } else {
            setDownvote(downvote +1)
            let data = downvote
            
            fetch(`http://localhost:3000/movies/${selectedMovie.id}`, {
                method:"PATCH",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({downvote : data})
            })
        }
    }    
    
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
                    <tr>
                        <Rating upvote={upvote} downvote={downvote} handleVote={handleVote}/>
                    </tr>
                </tbody>           
                <Synopsis synopsis={selectedMovie.synopsis}/>
            </div>       


       </div>
      
   )
}
export default SelectedMovie