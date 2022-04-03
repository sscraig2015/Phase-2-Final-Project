

function Alert({answer, setAlertStatus}){
    console.log(answer)
    
    setTimeout(() => setAlertStatus(null), 2500)
    
    let selection = [
        "Great Choice!",
        "You already submitted that one!",
        "Can't find that one. Sorry!"
    ]
    
    return (
        <div className="alertWindow">
            <h2>{selection[answer]}</h2> 
       </div>
    )
}

export default Alert
