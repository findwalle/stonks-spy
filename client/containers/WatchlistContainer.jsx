import React from 'react';
import Security from '../components/Security.jsx';

// creation of securities with this
const Watchlist = props => {
  // build out securities here
  const securities = [];

  // tester code
  for (let i = 0; i < 5; i++) {
    securities.push(<Security symbol = 'AAPL' price_open = {100} price_high = {105} price_low = {98} price_close = {102} key = {i}/>)
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