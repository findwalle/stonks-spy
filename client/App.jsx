import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {

  const alphaVantageAPI = 'ZH152HF17S83V3D0';

  const urlCreator = (symbol) => {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${alphaVantageAPI}`;
  }

  const [dummyData, updateData] = useState([]);
  const [stockData, updateStock] = useState({
    labels: ['filler'],
    datasets: [{
      labels: 'filler',
      data: ['1'],
      borderColor: "gray",
    }],
    options: {
      maintainAspectRatio: false
    }
  })

  async function updateChart(ticker) {
    let result = [];

    await fetch(urlCreator(ticker))
      .then(response => response.json())
      .then(data => result = data["Time Series (Daily)"])
      .catch(err => console.log(err))

    updateData(result);
    updateStock({
      labels: Object.keys(dummyData).reverse(),
      datasets: [{
        label: 'Price',
        data: Object.values(dummyData).map(data => Number(data['1. open'])).reverse(),
        borderColor: "gray",
    }],
      options: {
        maintainAspectRatio: false
      }
    })
  }

  // const stockData = {
  //   labels: Object.keys(dummyData),
  //   datasets: [{
  //     label: 'Price',
  //     data: Object.values(dummyData).map(data => Number(data['1. open'])),
  //     borderColor: "gray",
  //   }],
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home stockData = {stockData} updateChart = {updateChart}/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;