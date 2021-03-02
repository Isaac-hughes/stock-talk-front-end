import React, { useState } from 'react';

const BalanceSheet = (text, setText) => { 

    const [balSheet, setBalSheet] = useState([])
    const [formDetails, setFormDetails] = useState({})
    const [undef, setUndef] = useState(false)

      const companyBalanceSheet = (e) => {
        e.preventDefault();
        console.log(text, "jjjj")
        fetch(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${text.text}&apikey=U20EAXWUSJFCRADR`)
      .then((res) => res.json())
      .then((data) => { 
        if (data.annualReports[0].goodwill == undefined) {
          setUndef(true);
        }else{
          setUndef(false)
        console.log(data, "fred")
        let arr = balSheet
          arr.push(data)
          setBalSheet(arr)
          setFormDetails(text)
        }  
      })
    }

    return(
        <div>
              <p>Company Balance Sheet</p>
                <button onClick={companyBalanceSheet}>Show</button>
  
                {undef ? (
              <div>
                No Balance Sheet information found for this company
              </div>
              ) : (
              <div>
                    {balSheet.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Balance Sheet</h1>
                  <p>Fiscal Date Ending: {data.annualReports[0].fiscalDateEnding}</p>
                  <p>Reported Currency: {data.annualReports[0].reportedCurrency}</p>
                  <br/>
                  <p>Accumulated Depreciation Amortization PPE: {data.annualReports[0].accumulatedDepreciationAmortizationPPE}</p>
                  <p>Capital Lease Obligations: {data.annualReports[0].capitalLeaseObligations}</p>
                  <p>Cash And Cash Equivalents At Carrying Value: {data.annualReports[0].cashAndCashEquivalentsAtCarryingValue}</p>
                  <p>Cash And Short Term Investments: {data.annualReports[0].cashAndShortTermInvestments}</p>
                  <p>Common Stock: {data.annualReports[0].commonStock}</p>
                  <p>Common Stock Shares Outstanding: {data.annualReports[0].commonStockSharesOutstanding}</p>
                  <p>Current Accounts Payable: {data.annualReports[0].currentAccountsPayable}</p>
                  <p>Current Debt: {data.annualReports[0].currentDebt}</p>
                  <p>Current Long Term Debt: {data.annualReports[0].currentLongTermDebt}</p>
                  <p>Current Net Receivables: {data.annualReports[0].currentNetReceivables}</p>
                  <p>Deferred Revenue: {data.annualReports[0].deferredRevenue}</p>
                  <p>Goodwill: {data.annualReports[0].goodwill}</p>
                  <p>Intangible Assets: {data.annualReports[0].intangibleAssets}</p>
                  <p>Intangible Assets Excluding Goodwill: {data.annualReports[0].intangibleAssetsExcludingGoodwill}</p>
                  <p>Inventory: {data.annualReports[0].inventory}</p>
                  <p>Investments: {data.annualReports[0].investments}</p>
                  <p>Long Term Debt: {data.annualReports[0].longTermDebt}</p>
                  <p>Long Term Debt Noncurrent: {data.annualReports[0].longTermDebtNoncurrent}</p>
                  <p>Long Term Investments: {data.annualReports[0].longTermInvestments}</p>
                  <p>Other Current Assets: {data.annualReports[0].otherCurrentAssets}</p>
                  <p>Other Current Liabilities: {data.annualReports[0].otherCurrentLiabilities}</p>
                  <p>Other Non Current Liabilities: {data.annualReports[0].otherNonCurrentLiabilities}</p>
                  <p>Other Non Currrent Assets: {data.annualReports[0].otherNonCurrrentAssets}</p>
                  <p>Property Plant Equipment: {data.annualReports[0].propertyPlantEquipment}</p>
                  <p>Retained Earnings: {data.annualReports[0].retainedEarnings}</p>
                  <p>Short Long Term Debt Total: {data.annualReports[0].shortLongTermDebtTotal}</p>
                  <p>Short Term Debt: {data.annualReports[0].shortTermDebt}</p>
                  <p>Short Term Investments: {data.annualReports[0].shortTermInvestments}</p>
                  <p>Total Assets: {data.annualReports[0].totalAssets}</p>
                  <p>Total Current Assets: {data.annualReports[0].totalCurrentAssets}</p>
                  <p>Total Current Liabilities: {data.annualReports[0].totalCurrentLiabilities}</p>
                  <p>Total Liabilities: {data.annualReports[0].totalLiabilities}</p>
                  <p>Total Non Current Assets: {data.annualReports[0].totalNonCurrentAssets}</p>
                  <p>Total Non Current Liabilities: {data.annualReports[0].totalNonCurrentLiabilities}</p>
                  <p>Total Shareholder Equity: {data.annualReports[0].totalShareholderEquity}</p>
                </div>
                )
              }))}
              </div>
            )}
              </div>  
    )}
    export default BalanceSheet