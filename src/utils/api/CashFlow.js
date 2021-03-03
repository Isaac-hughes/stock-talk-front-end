import React, { useState } from 'react';

const CashFlow = (text, setText) => {  
  const [cashFlow, setCashFlow] = useState([])
  const [formDetails, setFormDetails] = useState([])

const companyCashFlow = (e) => {
  e.preventDefault();
  fetch(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${text.text}&apikey=ATAPMJKIK0Z8776M`)
.then((res) => res.json())
.then((data) => { 
  console.log(data)
    let arr = cashFlow
    arr.push(data)
    setCashFlow(arr)
    setFormDetails(text)

})
}

    return(
      <div>
            <p>Company Cash Flow</p>
            <button onClick={companyCashFlow}>Show</button>
              <div>
                {cashFlow.map(((data, index) => {
                return (
                  <div key={index}>
                  <h1>Company Cash Flow</h1>
                  <p>Fiscal Date Ending: {data.annualReports[0].fiscalDateEnding}</p>
                  <p>Reported Currency: {data.annualReports[0].reportedCurrency}</p>
                  <br/>
                  <p>Capital Expenditures: {data.annualReports[0].capitalExpenditures}</p>
                  <p>Cashflow From Financing: {data.annualReports[0].cashflowFromFinancing}</p>
                  <p>Cashflow From Investment: {data.annualReports[0].cashflowFromInvestment}</p>
                  <p>Change In Cash And Cash Equivalents: {data.annualReports[0].changeInCashAndCashEquivalents}</p>
                  <p>Change In Exchange Rate: {data.annualReports[0].changeInExchangeRate}</p>
                  <p>Change In Inventory: {data.annualReports[0].changeInInventory}</p>
                  <p>Change In Operating Assets: {data.annualReports[0].changeInOperatingAssets}</p>
                  <p>Depreciation Depletion And Amortization: {data.annualReports[0].depreciationDepletionAndAmortization}</p>
                  <p>Dividend Payout: {data.annualReports[0].dividendPayout}</p>
                  <p>Dividend Payout Common Stock: {data.annualReports[0].dividendPayoutCommonStock}</p>
                  <p>Dividend Payout Preferred Stock: {data.annualReports[0].dividendPayoutPreferredStock}</p>
                  <p>Net Income: {data.annualReports[0].netIncome}</p>
                  <p>Operating Cash flow: {data.annualReports[0].operatingCashflow}</p>
                  <p>Payments For Operating Activities: {data.annualReports[0].paymentsForOperatingActivities}</p>
                  <p>Payments For Repurchase Of Common Stock: {data.annualReports[0].paymentsForRepurchaseOfCommonStock}</p>
                  <p>Payments For Repurchase Of Equity: {data.annualReports[0].paymentsForRepurchaseOfEquity}</p>
                  <p>Payments For Repurchase Of Preferred Stock: {data.annualReports[0].paymentsForRepurchaseOfPreferredStock}</p>
                  <p>Proceeds From Issuance Of Common Stock: {data.annualReports[0].proceedsFromIssuanceOfCommonStock}</p>
                  <p>Proceeds From Issuance Of Long Term Debt And Capital Securities Net: {data.annualReports[0].proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet}</p>
                  <p>Proceeds From Issuance Of Preferred Stock: {data.annualReports[0].proceedsFromIssuanceOfPreferredStock}</p>
                  <p>Proceeds From Operating Activities: {data.annualReports[0].proceedsFromOperatingActivities}</p>
                  <p>Proceeds From Repayments Of Short Term Debt: {data.annualReports[0].proceedsFromRepaymentsOfShortTermDebt}</p>
                  <p>Proceeds From Repurchase Of Equity: {data.annualReports[0].proceedsFromRepurchaseOfEquity}</p>
                  <p>Proceeds From Sale Of Treasury Stock: {data.annualReports[0].proceedsFromSaleOfTreasuryStock}</p>
                </div>
                )
              }))}
              </div>
            </div>
    ) 
  }    
  
   export default CashFlow; 