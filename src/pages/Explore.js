import '../App.css';
import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import LogoutButton from '../components/logout'
import ExploreMap from '../components/exploreMap'



const Explore = ({user, setIsAuthenticated}) => {
    

    const watchlistMap = () => {
        if(user.watchlist !== undefined){
            return(user.watchlist.map((data, index) => {
                return(
                    <Link to={`/stockinfo/${data.ticker}`}>{data.ticker}</Link>
                )
            }))
        }else{
            return <div><p>loading...</p></div>
        }
    }

    
    

  return (
    <div className="Explore">
<<<<<<< HEAD
      <h1>Explore Page</h1>
      <p>{user.name}</p>
      {watchlistMap()}
      <div>
       <ExploreMap user={user} />
      </div>
      <nav>
=======
        <nav className="mainNav">
>>>>>>> 8ab0875ce008e4bbdc30af20a5a683b4daa74bd7
        
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/explore">Explore</Link>
        </button>
        <button>
          <Link to="/stocksearch">Stock Search</Link>
        </button>
        <LogoutButton setIsAuthenticated={setIsAuthenticated}>
        <Link to="/landing"/>
          </LogoutButton>

        
      </nav>
      
    </div>
  );
}

export default Explore;