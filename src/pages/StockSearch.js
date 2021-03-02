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

const StockSearch = ({setIsAuthenticated}) => {
    console.log("stocksearch")    
  const [ticker, setTickers] = useState({})
  const [text, setText] = useState("")
  const [formDetails, setFormDetails] = useState([])
  const [undef, setUndef] = useState(false)
  const [comp, setComp] = useState("")

  const handleInput = (event) => {
    // getting the value of the input and assigning to the state
    setText(event.target.value);
    setComp(event.target.value);
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
        <h2>Company Information (NASDAQ)</h2>
            <p>Enter ticker symbol below</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                // value={text}
                onChange={handleInput}
              />
              <button type="submit">Search</button>
            </form>
              {undef ? (
              <div>
                No company found
              </div>
              ) : (
              <div>
                  <div>
                  <h1>Company Overview</h1>
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
      <br/>
      {/* <PopChart/> */}
      <br/>
      <h2>Currency</h2>
      <br/>
      {/* <ForexIntraday/> */}
      {/* <br/>
      <CryptoDaily/> */}
      </div>
              </div>
            )}
            </div>
    ) 







    return null
}

export default StockSearch;