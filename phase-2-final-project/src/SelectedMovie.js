import React, {useState} from "react"
import Synopsis from "./Synopsis"
import Rating from "./Rating"
import MovieInfo from "./MovieInfo"
import { useParams} from "react-router-dom"


function SelectedMovie({movie}){
    console.log(movie[0].id)

    let params = useParams()
    console.log(params.movieId)
    
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
    
    const styles = {
        underline: {textDecorationLine: 'underline'}
    }
    
   
    return (
       <div className="selectedMovie">
                
                <h1 style={styles.underline}>{selectedMovie.title}</h1>
                    <p className="synopsis">
                        <Synopsis synopsis={selectedMovie.synopsis}/>
                        
                    </p>
                {movieInfo ? <MovieInfo movie={selectedMovie}/> : null}
                
            <Rating upvote={upvote} downvote={downvote} handleVote={handleVote}/>
            <div>
                    <img alt={selectedMovie.title} src={selectedMovie.poster} className="Homepage-poster"/>
                </div>
                <div>
                    <button id="showInfoButton" onClick={showMovieInfo}>Show/Hide Movie Info</button>
                </div>
            
       </div>
      
   )
}
export default SelectedMovie