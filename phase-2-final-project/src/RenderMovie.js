import React, {useState} from "react"
import Comments from "./Comments"

function RenderMovie({movie}){

    const [renderComments, setRenderComments] = useState(false)
    let selectedMovie = movie.find((movieObj) => movieObj.title === window.location.pathname.substring(1))
    
   
    function handleComments(){
        setRenderComments(!renderComments)
    }
    const styles = {
        underline: {textDecorationLine: 'underline'}
        
    }
    
   
    return (
       <div className="Homepage">
           <h1 style={styles.underline}>{selectedMovie.title}</h1>
            <img alt={selectedMovie.title} src={selectedMovie.poster} className="Homepage-poster"/>
            <span>{selectedMovie.synopsis}</span>
            <button onClick={handleComments}>Hide/Show Comments</button>
        {renderComments ? <Comments selectedMovie={selectedMovie} /> : null}
       </div>
      
   )
}
export default RenderMovie