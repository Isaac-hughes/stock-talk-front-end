import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts';
import '../../api.css';

const Intraday = () => { 

    const [price, setPrice] = useState([])
    const [chart, setChart] = useState([])
    const [chartPlot, setChartPlot] = useState(true)
    const [text, setText] = useState("")
    const [formDetails, setFormDetails] = useState([])
    const [undef, setUndef] = useState(false)
    


    const handleInput = (event) => {
        // getting the value of the input and assigning to the state
        setText(event.target.value);
        setPrice([])
      };
      const handleSubmit = (event) => {
        // stop default form behaviour which is to reload the page
        event.preventDefault();
        companyIntraday()
        setFormDetails(formDetails, text)
        
      };

      const companyIntraday = () => {
        fetch(`http://api.marketstack.com/v1/intraday?access_key=50bf475ef5b6b0f9498b98eab266ef2f&symbols=${text}`)
      .then((res) => res.json())
      .then((data) => { 
        if (data.data[0].symbol == undefined) {
          setUndef(true);
        }else{
          setUndef(false)
          let arr = price
          arr.push(data)
          setPrice(arr)
          setText("")
        console.log(data)
        chartInfo()
      }
        }  )}

     let chartInfo = () => {  
        const chartData =
        {
         options: {
             chart: {
                 background: '#02030D',
                 foreColor: '#333',
              },
         style: {
                   fontSize: '13px',   
                   color: ['#02030d'] 
                 },
        theme: {
        mode: 'dark', 
        palette: 'palette10', 
        monochrome: {
            enabled: false,
            color: '#02030d',
            shadeTo: 'light',
            shadeIntensity: 0.65
        }
      },
         xaxis: {
                 categories: [
                  price[0].data[0].date,
                  price[0].data[1].date,
                  price[0].data[2].date,
                  price[0].data[3].date,
                  price[0].data[4].date,
                  price[0].data[5].date
                 ]
                 
             },
             plotOptions: {
                 area: {
                     horizontal: false
                 }
             },
             fill: {
                 colors: ['#02030d']
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
                     price[0].data[0].high,
                     price[0].data[1].high,
                     price[0].data[2].high,
                     price[0].data[3].high,
                     price[0].data[4].high,
                     price[0].data[5].high
                 ]
             }],
             
         } 
         let arr2 = chart
         arr2.push(chartData)
         setChart(arr2)
         setChartPlot(false)
         console.log(chartData)
        }
        

 
      return(
        <div>
          <div className="subHead">
            <h3>Enter ticker symbol below to get current price</h3>
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
              <div>
                No company found
              </div>
              ) : (
              <div>
                {price.map(((data, index) => {
                return (
                  <div key={index}>
                  <h2>Stock price for {data.data[0].symbol} on date {data.data[0].date}</h2>
                  <p>High Price: {data.data[0].high}</p>
                  <p>Current Price: {data.data[0].last}</p>
                  <p>Low Price: {data.data[0].low}</p>
                </div>
                
                )
              }))}
              
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