import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts';

const Intraday = () => { 

    const [apiData, setApiData] = useState({})
    const [price, setPrice] = useState({})
    const [chart, setChart] = useState([])
    const [chartPlot, setChartPlot] = useState(true)
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
        companyIntraday()
        setFormDetails(formDetails, text)
        
      };

      const companyIntraday = () => {
        fetch(`http://api.marketstack.com/v1/intraday?access_key=50bf475ef5b6b0f9498b98eab266ef2f&symbols=${comp}`)
      .then((res) => res.json())
      .then((data) => { 
        console.log(data)
        setApiData(data)
        if (data.data.length == 0) {
          setUndef(true);
        }else{
          setUndef(false)

      
          // setPrice(data.data)
          console.log(apiData, "data")
          setFormDetails("")
          setComp("")

        
        // chartInfo()
      }
     } )}

     let chartInfo = () => {  
        const chartData =
        {
         options: {
             chart: {
                 background: '#02030d',
                 foreColor: '#333',
              },
         style: {
                   fontSize: '13px'   
                 },
         xaxis: {
                 categories: [
                  // price[0]["date"],
                  // price[1]["date"],
                  // price[2]["date"],
                  // price[3]["date"],
                  // price[4]["date"],
                  // price[5].date
                 ]
                 
             },
             plotOptions: {
                 area: {
                     horizontal: false
                 }
             },
             fill: {
                 colors: ['#f44336']
             },
             dataLabels: {
                 enabled: false
             },
             title: {
                 text: 'Share Price',
                 align: 'center',
                 margin: 20,
                 offsetY: 20,
                 style: {
                     fontSize: '10px'
                 }
             },
         },
             series: [{
                 name: 'Share Price',
                 data: [
                    //  price[0].high,
                    //  price[1].high,
                    //  price[2].high,
                    //  price[3].high,
                    //  price[4].high,
                    //  price[5].high
                 ]
             }],
             
         } 
         let arr2 = chart
         arr2.push(chartData)
         setChart(arr2)
         setChartPlot(false)
         console.log(chartData)
         
        }
        
// console.log(price[0]["date"], "price")
 
      return(
        <div>
            <p>Enter ticker symbol below to get current price</p>
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
                  {/* <h1>Stock price for {price.data[0].symbol} on date {price.data[0].date}</h1>
                  <p>High Price: {price.data[0].high}</p>
                  <p>Current Price: {price.data[0].last}</p>
                  <p>Low Price: {price.data[0].low}</p> */}
                </div>
                
                )
              
        </div>
          )}
          <div>
          {chartPlot ? (
              <div>
              </div>
              ) : (
                <div>
                {chart.map(((chartData, index) => {
                return (
                  <Chart key={index}
        options={chartData.options}
        series={chartData.series}
        type="area"
        height="400"
        width="100%"
        fontSize="13px"

        />
                
                )
              }))}
              
        </div>
            )}
          </div>
          </div>
    )    
      }
   export default Intraday;