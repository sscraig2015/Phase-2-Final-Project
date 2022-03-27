import React from "react"
// import Alert from "./Alert"

function NewMovieForm({validatesUserMovie, alert}){

    return (
        
        <div className="newMovieForm">
            <h3 id="newMovieFormTitle">Add details and then SUBMIT to add new movie</h3>
            {/* {alert ? <Alert status={true}/> : <Alert status={false}/>} */}
            <form onSubmit={validatesUserMovie} id="newMovieForm">
                <table>
                    <tr>
                        <td>Soundcloud Link: </td>
                        <td><input type="text" name="soundcloud"/></td>    
                    </tr>
                    <tr>
                        <td>Movie Title</td>
                        <td><input type="text" name="movieTitle"/></td>    
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default NewMovieForm