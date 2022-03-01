import React from "react"

function Rating({upvote, downvote, handleVote}){
    return (
        <div>
            <button name="upvote" onClick={handleVote}>Likes: {upvote}</button>
            <button name="downvote" onClick={handleVote}>Dislikes: {downvote}</button>
        </div>
    )
}

export default Rating