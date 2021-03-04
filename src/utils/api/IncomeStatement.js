import React, { useState } from 'react';

const IncomeStatement = (text, setText) => { 

    const [incStat, setIncStat] = useState([])
    const [formDetails, setFormDetails] = useState([])

    // const handleInput = (event) => {
    //     // getting the value of the input and assigning to the state
    //     setText(event.target.value);
    //   };
    //   const handleSubmit = (event) => {
    //     // stop default form behaviour which is to reload the page
    //     event.preventDefault();
    //     companyIncomeStatement()
    //     setFormDetails(formDetails, text)
        
    //   };


      const companyIncomeStatement = (e) => {
        e.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${text.text}&apikey=ARU6VBZ6KLPWOGUD`)
      .then((res) => res.json())
      .then((data) => { 
        console.log(data)
        let arr = incStat
          arr.push(data)
          setIncStat(arr)
          setFormDetails(text)
      })
    }

    return(
        <div>
          <div className="subHead">
              <h3>Company Income Statement</h3>
                <button onClick={companyIncomeStatement}>Show</button>
                </div>
                <div>
                    {incStat.map(((data, index) => {
                return (
                  <div key={index}>
                  <h2>Income Statement</h2>
                  <br/>
                  <p>Fiscal Date Ending: {data.annualReports[0].fiscalDateEnding}</p>
                  <p>Reported Currency: {data.annualReports[0].reportedCurrency}</p>
                  <br/>
                  <p>Comprehensive Income Net Of Tax: {data.annualReports[0].comprehensiveIncomeNetOfTax}</p>
                  <p>Cost Of Revenue: {data.annualReports[0].costOfRevenue}</p>
                  <p>Cost of Goods And Services Sold: {data.annualReports[0].costofGoodsAndServicesSold}</p>
                  <p>Depreciation: {data.annualReports[0].depreciation}</p>
                  <p>Depreciation And Amortization: {data.annualReports[0].depreciationAndAmortization}</p>
                  <p>Ebit: {data.annualReports[0].ebit}</p>
                  <p>Ebitda: {data.annualReports[0].ebitda}</p>
                  <p>Gross Profit: {data.annualReports[0].grossProfit}</p>
                  <p>Income Before Tax: {data.annualReports[0].incomeBeforeTax}</p>
                  <p>Income Tax Expense: {data.annualReports[0].incomeTaxExpense}</p>
                  <p>Interest And Debt Expense: {data.annualReports[0].interestAndDebtExpense}</p>
                  <p>Interest Expense: {data.annualReports[0].interestExpense}</p>
                  <p>Interest Income: {data.annualReports[0].interestIncome}</p>
                  <p>Investment IncomeNet: {data.annualReports[0].investmentIncomeNet}</p>
                  <p>Net Income: {data.annualReports[0].netIncome}</p>
                  <p>Net Income From Continuing Operations: {data.annualReports[0].netIncomeFromContinuingOperations}</p>
                  <p>Net Interest Income: {data.annualReports[0].netInterestIncome}</p>
                  <p>Non Interest Income: {data.annualReports[0].nonInterestIncome}</p>
                  <p>Operating Expenses: {data.annualReports[0].operatingExpenses}</p>
                  <p>Operating Income: {data.annualReports[0].operatingIncome}</p>
                  <p>Other Non OperatingIncome: {data.annualReports[0].otherNonOperatingIncome}</p>
                  <p>Researc And Development: {data.annualReports[0].researchAndDevelopment}</p>
                  <p>Selling General And Administrative: {data.annualReports[0].sellingGeneralAndAdministrative}</p>
                  <p>Total Revenue: {data.annualReports[0].totalRevenue}</p>
                </div>
                )
              }))}
              </div>
              </div>  
    )}
    export default IncomeStatement