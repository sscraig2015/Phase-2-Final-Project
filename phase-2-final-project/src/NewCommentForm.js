import React from "react"

function NewCommentForm({handleCommentSubmit}){
    
    return (
    <form onSubmit={handleCommentSubmit}>
        username: <input type="text" name="username" />
        Comment: <input type="text" name="comment" />
        <input type="submit" value="Submit" />
    </form>
    )
}

export default NewCommentForm