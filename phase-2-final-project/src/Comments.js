import React, {useState} from "react"
import NewCommentForm from "./NewCommentForm"

function Comments({selectedMovie}){
    console.log(selectedMovie.id)
    const [newCommentRender, setNewCommentRender] = useState(false)

    function renderNewComment(){
        setNewCommentRender(!false)
    }

    function handleCommentSubmit(e){
        e.preventDefault()
        console.log(selectedMovie.id)
        const postData =  {
            "id": 2,
            "user": e.target.username.value,
            "comment": e.target.comment.value
          }
        
        fetch(`http://localhost:3000/movies/${selectedMovie.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
            
        console.log(e.target.username.value)
        console.log(e.target.comment.value)
    }
    
    return (
        <div>
            <button onClick={renderNewComment}>New Comment</button>
            {newCommentRender ? <NewCommentForm handleCommentSubmit={handleCommentSubmit}/> : null}
            {selectedMovie.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h2>{comment.user}</h2>
                        <span>{comment.comment}</span>
                    </div>
                )
                }
            )}
        </div>
    )
}

export default Comments