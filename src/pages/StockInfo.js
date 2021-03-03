import '../App.css';
import React, {useState, useEffect} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch, useParams} from 'react-router-dom'
import IncomeStatement from '../utils/api/IncomeStatement';
import BalanceSheet from '../utils/api/BalanceSheet';
import CashFlow from '../utils/api/CashFlow';
import Earnings from '../utils/api/Earnings';
import MarketStack from '../utils/api/MarketStack';
import FunctionForm from '../utils/api/FunctionForm';
import LogoutButton from '../components/logout'
import WatchlistButton from '../components/watchlistButton'


const StockInfo = ({setIsAuthenticated, user}) => {

  const { tickersymbol } = useParams()  
  const [ticker, setTickers] = useState({})
  const [text, setText] = useState("")
  const [undef, setUndef] = useState(false)


useEffect(() => {
    const getData = async () => {
        await companyOverview()
        setText(tickersymbol)
    }
    getData()
}, [])

const companyOverview = () => {
  fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${tickersymbol}&apikey=SPAUSORYE9I5PQZF`)
.then((res) => res.json())
.then((data) => { 
  if (data.FullTimeEmployees == undefined) {
    setUndef(true);
  }else{
    setUndef(false)
    setTickers(data)
    
}
})
}
    return(
      <div>
        <nav className="mainNav">
        
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
        <h2>Company Information (NASDAQ)</h2>
              {undef ? (
              <div>
                
                Can only show company information for tickers on the NASDAQ
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
                
              
      <div>
        <h2>Stock Prices (Global)</h2>
        <br/>
      <MarketStack/> 

      
      </div>
              </div>
            )}
            </div>
    ) 

}

export default StockInfo;