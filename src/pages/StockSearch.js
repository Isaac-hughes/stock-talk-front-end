import '../App.css';
import React, {useState, useEffect} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch, useParams} from 'react-router-dom'
import UserInfoMap from '../components/userInfoMap'
import IncomeStatement from '../utils/api/IncomeStatement';
import BalanceSheet from '../utils/api/BalanceSheet';
import CashFlow from '../utils/api/CashFlow';
import Earnings from '../utils/api/Earnings';
import MarketStack from '../utils/api/MarketStack';
import FunctionForm from '../utils/api/FunctionForm';
import LogoutButton from '../components/logout'
import WatchlistButton from '../components/watchlistButton'

const StockSearch = ({setIsAuthenticated, user}) => {
  const [ticker, setTickers] = useState({})
  const [text, setText] = useState("")
  const [formDetails, setFormDetails] = useState([])
  const [undef, setUndef] = useState(true)
  const [comp, setComp] = useState("")

  const handleInput = (event) => {
    // getting the value of the input and assigning to the state
    setText(event.target.value.toUpperCase());
    setComp(event.target.value.toUpperCase());
  };
  const handleSubmit = (event) => {
    // stop default form behaviour which is to reload the page
    event.preventDefault();
    companyOverview()
    setFormDetails(formDetails, text)
    
  };

const companyOverview = () => {
  fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${comp}&apikey=ARU6VBZ6KLPWOGUD`)
.then((res) => res.json())
.then((data) => { 
  if (data.FullTimeEmployees == undefined) {
    setUndef(true);
  }else{
    setUndef(false)
    setTickers(data)
    setFormDetails("")
    setComp("")
}
})
}


    return(
      <div>
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
      <br/>
      <br/>
      <div className="mainHead">
        <h1>Company Information (NASDAQ)</h1>
            
            
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                // value={text}
                onChange={handleInput}
              />
              <button type="submit">Search</button>
            </form>
            </div>
              {undef ? (
              <div className="noCompanyMessage">
                Enter a NASDAQ ticker symbol above
              </div>
              ) : (
              <div>
                  <div>
                  <h1>Company Overview</h1>
                  <WatchlistButton user={user} ticker={text}/>
                  <p>Name: {ticker.Name}</p>
                  <p>Ticker Symbol: {ticker.Symbol}</p>
                  <p>Exchange: {ticker.Exchange}</p>
                  <p>Currency: {ticker.Currency}</p>
                  <p>Country: {ticker.Country}</p>
                  <p>Sector: {ticker.Sector}</p>
                  <p>Market Cap: ${ticker.MarketCapitalization}</p>
                  <p>Dividende Per Share: ${ticker.DividendPerShare}</p>
                  <p>Gross Profit Trailing Twelve Months: ${ticker.GrossProfitTTM}</p>
                  <p>Analyst Target Price: ${ticker.AnalystTargetPrice}</p>
                  <p>Description: {ticker.Description}</p>
                  <br/>
      <IncomeStatement text={text} setText={setText}/>
      <br/>
      <BalanceSheet text={text} setText={setText}/>
      <br/>
      <CashFlow text={text} setText={setText}/>
      <br/>
      <Earnings text={text} setText={setText}/>
      <br/>
  
      <FunctionForm text={text} setText={setText}/>
      <br/>
      
                </div>
        
              </div>
            )}
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Stock Prices (Global)</h1>
      <MarketStack/> 


      </div>
            </div>
    ) 







    return null
}

export default StockSearch;