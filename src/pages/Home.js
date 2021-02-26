import '../App.css';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom'
import LogoutButton from '../components/logout'


const Home = ({user, setIsAuthenticated}) => {

    const watchlistMap = () => {
        if(user.watchlist != undefined){
            return(user.watchlist.map((data, index) => {
                return(
                    <p key={index}>{data.ticker}</p>
                )
            }))
        }else{
            return <div><p>loading...</p></div>
        }
    }

  return (
    <div className="Home">
        <nav>
        
        <button>
          <Link to="/home">Home</Link>
        </button>
        <LogoutButton setIsAuthenticated={setIsAuthenticated}>
        <Link to="/landing"/>
          </LogoutButton>

        
      </nav>
      <h1>Home Page</h1>
      <p>{user.name}</p>
      {watchlistMap()}
      
    </div>
  );
}

export default Home;