import '../App.css';
import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import LogoutButton from '../components/logout'
import PostMap from '../components/postMap'
import PostBox from '../components/postBox'

//updated by fergus

const Home = ({user, setIsAuthenticated}) => {

    const watchlistMap = () => {
        if(user.watchlist !== undefined){
            return(user.watchlist.map((data, index) => {
                return(
                    <Link to={`/stockinfo/${data.ticker}`} className="ticker">{data.ticker}</Link>
                )
            }))
        }else{
            return <div><p>loading...</p></div>
        }
    }

    
    

  return (
    <div className="Home">
<<<<<<< HEAD
      <h1>Home Page</h1>
      <p>{user.name}</p>
      {watchlistMap()}
      <div>
        <PostBox />
      </div>
      <div>
        <PostMap user={user}/>
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
<<<<<<< HEAD
=======
      <h1>Home Page</h1>
      <p>My Watchlist</p>
      <div className="watchlistWrap">
        {watchlistMap()}
      </div>
      <div className="postBoxWrapper">
        <PostBox />
      </div>
      <div>
        <PostMap user={user}/>
      </div>
>>>>>>> 8ab0875ce008e4bbdc30af20a5a683b4daa74bd7
    </div>
  );
}

export default Home;