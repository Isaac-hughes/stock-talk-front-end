import '../App.css';
import React, {useState, useEffect} from 'react'
import {addToWatchlist, removeFromWatchlist} from '../utils/watchlist'

const WatchlistButton = ({user, ticker}) => {
    const [watchlist, setWatchlist] = useState(user.watchlist)
    const [bool, setBool] = useState(false)
    console.log(user)
    useEffect(() => {
        for(let i = 0; i < watchlist.length; i++){
            if(watchlist[i].ticker === ticker){
                setBool(true)
                break
            }
        }
    }, [])

    const handleClick = async () => {
        if(bool){
            await removeFromWatchlist(ticker)
        } else {
            await addToWatchlist(ticker)
        }
    }

  return (
    <div className="watchlistButton">
      {bool ?
      <button onClick={handleClick}>Remove from watchlist</button> :
      <button onClick={handleClick}>Add to watchlist</button>
      
      }
    </div>
  );
}

export default WatchlistButton;