import '../App.css';
import React, {useState} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch, useParams} from 'react-router-dom'
import LogoutButton from './logout'
import UserPostMap from './userPostMap'
import PostBox from './postBox'
import {getUserByUsername} from '../utils/getUserByUsername'


const UserInfoMap = ({userData, setIsAuthenticated}) => {

    const watchlistMap = () => {
        if(userData[0].watchlist !== undefined){
            return(userData[0].watchlist.map((data, index) => {
                return(
                    <Link to={`/stockinfo/${data.ticker}`} className="ticker">{data.ticker}</Link>
                )
            }))
        }else{
            return <div><p>loading...</p></div>
        }
    }

    
    return (
        <div className="User">
            <nav className="mainNav gradient-border">
        
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
            <h1>Selected User Info Page</h1>
            <p className="username">{userData[0].username}</p>
            <p>{userData[0].username}'s watchlist</p>
            <div className="watchlistWrap">
            {watchlistMap()}
            </div>
            <div>
                <UserPostMap user={userData[0]}/>
            </div>
        </div>
    );


}

export default UserInfoMap;