import React from 'react';

const Security = ({
  symbol,
  price_open,
  price_high,
  price_low,
  price_close,
}) => (
  <div className = 'security'>
    <div>
      <button className = 'symbol'>{`${symbol}`}</button>
    </div>
    <div>
      <p className = 'price'>{`${price_open}`}</p>
    </div>
    <div>
      <p className = 'price'>{`${price_high}`}</p>
    </div>
    <div>
      <p className = 'price'>{`${price_low}`}</p>
    </div>
    <div>
      <p className = 'price'>{`${price_close}`}</p>
    </div>
    {/* <div className = 'price'> {`${price_odiven}`} </div>
    <div className = 'price'> {`${price_high}`} </div>
    <div className = 'price'> {`${price_low}`} </div>
    <div className = 'price'> {`${price_close}`} </div> */}
  </div>

);

export default Security;