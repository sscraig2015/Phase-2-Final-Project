import React from "react"

function ListenLinks({soundcloud}) {
    return (
        <div className="listenLinks">
            <h3>Where to Listen</h3>
                <ul>
                    <li><a href={`${soundcloud}`}>Soundcloud</a></li>
                </ul>    
        </div>
    )


}

export default ListenLinks