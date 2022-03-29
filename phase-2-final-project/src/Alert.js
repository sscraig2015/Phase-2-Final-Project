
function Alert({status}){
    
    if (status){
        console.log('search true')
        return <h2>success</h2>

    } else {
        console.log('search false')
        return <h2>already entered</h2>
    }

}

export default Alert
