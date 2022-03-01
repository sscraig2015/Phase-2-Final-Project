import React, {useState} from "react"
import Synopsis from "./Synopsis"
import Rating from "./Rating"

function RenderMovie({movie}){

    let selectedMovie = movie.find((movieObj) => movieObj.urltitle === window.location.pathname.substring(1))
    const [upvote, setUpvote] = useState(selectedMovie.upvote)
    const [downvote, setDownvote] = useState(selectedMovie.downvote)

    function handleVote(e){
        if (e.target.name === "upvote") {
            setUpvote(upvote + 1)
            let data = upvote
            
            fetch(`http://localhost:3000/movies/${selectedMovie.id}`, {
            method:"POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({upvote : data})
        })
        
        } else {
            setDownvote(downvote +1)
            let data = downvote
            
            fetch(`http://localhost:3000/movies/${selectedMovie.id}`, {
                method:"POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({downvote : data})
            })
        }
    }    
    const styles = {
        underline: {textDecorationLine: 'underline'}
    }
    
   
    return (
       <div className="Homepage">
           <h1 style={styles.underline}>{selectedMovie.title}</h1>
            <img alt={selectedMovie.title} src={selectedMovie.poster} className="Homepage-poster"/>
            <Synopsis synopsis={selectedMovie.synopsis}/>
            <Rating upvote={upvote} downvote={downvote} handleVote={handleVote}/>
       </div>
      
   )
}
export default RenderMovie