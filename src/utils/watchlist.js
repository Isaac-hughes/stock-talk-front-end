export const addToWatchlist = async (ticker) => {

    const sendData = {ticker: ticker}
    
    const response = await fetch('https://sociabull.herokuapp.com/users/addtowatchlist', {
        method: 'PATCH',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
        body: JSON.stringify(sendData)
    })
    const data = await response.json()
    if (response.status === 500){
        console.log(data, "fresh")
        console.log("Error")
    } else {
        console.log(data, "fresher")
        console.log("added to watchlist")
    }
}

export const removeFromWatchlist = async (ticker) => {
    const sendData = {ticker: ticker}
    const response = await fetch('https://sociabull.herokuapp.com/users/removefromwatchlist', {
        method: 'PATCH',
        headers: {"Authorization": `Bearer ${localStorage.getItem("dataToken")}`, "Content-Type": "application/json"},
        body: JSON.stringify(sendData)
    })
    const data = await response.json()
    if (response.status === 500){
        console.log("Error")
    } else {
        console.log("Removed from watchlist")
    }
}