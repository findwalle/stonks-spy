import React from 'react';
import Security from '../components/Security.jsx';

// creation of securities with this
function Watchlist(props){
  // build out securities here
  const securities = [];

  const dummyWatchlist = [
    {symbol: 'AAPL', company: 'Apple Inc.', price_open: 200.2, price_high: 210.37, price_low: 199.10, price_close: 209.72},
    {symbol: 'BA', company: 'Boeing', price_open: 140.2, price_high: 148.83, price_low: 139.52, price_close: 147.33},
    {symbol: 'AMD', company: 'Advanced Micro Devices', price_open: 76.13, price_high: 77.28, price_low: 74.22, price_close: 76.52},
    {symbol: 'JPM', company: 'JP Morgan & Co.', price_open: 163.29, price_high: 163.89, price_low: 158.23, price_close: 158.30},
    {symbol: 'NFLX', company: 'Netflix Inc.', price_open: 175.99, price_high: 176.64, price_low: 172.30, price_close: 172.75}
  ]

  // tester code
  for (let i = 0; i < 5; i++) {
    securities.push(<Security symbol = {dummyWatchlist[i].symbol} price_open = {dummyWatchlist[i].price_open} price_high = {dummyWatchlist[i].price_high} price_low = {dummyWatchlist[i].price_low} price_close = {dummyWatchlist[i].price_close} key = {i} updateChart = {props.updateChart}/>)
  }

  return (
    <div id = 'watchlistContainer'>
      <h2><center>Watchlist</center></h2>
      <div id = 'watchlistSpec'>
        <div>
          <p id = 'ticker'>Ticker</p>
        </div>
        <div>
          <p className = 'label'>Open</p>
        </div>
        <div>
          <p className = 'label'>High</p>
        </div>
        <div>
          <p className = 'label'>Low</p>
        </div>
        <div>
          <p className = 'label'>Close</p>
        </div>
      </div>
      {securities}
    </div>
  );
};

export default Watchlist;