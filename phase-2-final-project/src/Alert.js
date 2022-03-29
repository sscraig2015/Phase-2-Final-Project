

function Alert({answer, setAlertStatus}){
    
    setTimeout(() => setAlertStatus(null), 1000)
        
    if (answer){
        console.log('search true')
       
    
        return <h2>success</h2>
        
    } else {
        console.log('search false')
        return <h2>already entered</h2>
    }
    //setTimeout to setAlertStatus to false after 3 seconds.
}

export default Alert
