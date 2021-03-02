import '../App.css';
import React, {useState, useEffect} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch, useParams} from 'react-router-dom'
import UserInfoMap from '../components/userInfoMap'

import {getUserByUsername} from '../utils/getUserByUsername'


const UserInfo = ({setIsAuthenticated}) => {

    const [userData, setUserData] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    // const [count, setCount] = useState(0)
    let { username } = useParams()
    
    useEffect(() => {
    const fetchData = async () => {
      const data = await getUserByUsername(username);
      setUserData(data);
      setIsLoaded(true);
    };
    fetchData();
  }, []);
    
    if (isLoaded){
        return (
            <UserInfoMap userData={userData} setIsAuthenticated={setIsAuthenticated}/>
        )

    } else {
        return <div> Loading </div>

    }
    return null
}

export default UserInfo;