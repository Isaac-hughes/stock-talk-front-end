import '../App.css';
import React, {useState, useEffect} from 'react'
import {addToWatchlist, removeFromWatchlist} from '../utils/watchlist'

const WatchlistButton = ({user, ticker, bool, loaded}) => {

    const handleClick = async () => {
        console.log(bool)
        if(bool){
            await removeFromWatchlist(ticker)
        } else {
            await addToWatchlist(ticker)
        }
    }

    const content = () => {
        if(loaded || !loaded){
            if(bool){
                return (
                    <button onClick={handleClick}>Remove From Watchlist</button>
                )
            } else {
                return (
                    <button onClick={handleClick}>Add To Watchlist</button>
                )
            }
        }else{
            return (
                <p>Loading ... </p>
            )
        }
    }


  return (
    <div className="watchlistButton">
      {content()}
    </div>
  );
}

export default WatchlistButton;