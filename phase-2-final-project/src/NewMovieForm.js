import React from "react"


function NewMovieForm({handleNewMovie}){

    return (
        <div className="newMovieForm">
            <h3 id="newMovieFormTitle">Add details and then SUBMIT to add new movie</h3>
            <form onSubmit={handleNewMovie} id="newMovieForm">
                <table>
                    <tr>
                        <td>Title: </td>
                        <td><input type="text" name="title" className="inputTitle"/></td>    
                    </tr>
                    <tr>
                        <td>Director: </td>
                        <td><input type="text" name="director"/></td>    
                    </tr>
                    <tr>
                        <td>Release: </td>
                        <td><input type="text" name="release"/></td>    
                    </tr>
                    <tr>
                        <td>Starring:</td>
                        <td><input type="text" name="starring"/></td>    
                    </tr>
                    <tr>
                        <td className="synopsisTitleForm">Synopsis: </td>
                        <td><input type="text" name="synopsis" className="inputSynopsis"/></td>    
                    </tr>
                    <tr>
                        <td>Poster URL: </td>
                        <td><input type="text" name="poster"/></td>    
                    </tr>
                    <tr>
                        <td>Soundcloud Link: </td>
                        <td><input type="text" name="soundcloud"/></td>    
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