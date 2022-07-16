import React from 'react';

function Security(props){

  return (
    <div className = 'security'>
      <div>
        <button className = 'symbol' onClick = {() => props.updateChart(props.symbol)}>{`${props.symbol}`}</button>
      </div>
      <div>
        <p className = 'price'>{`${props.price_open}`}</p>
      </div>
      <div>
        <p className = 'price'>{`${props.price_high}`}</p>
      </div>
      <div>
        <p className = 'price'>{`${props.price_low}`}</p>
      </div>
      <div>
        <p className = 'price'>{`${props.price_close}`}</p>
      </div>
      {/* <div className = 'price'> {`${price_odiven}`} </div>
      <div className = 'price'> {`${price_high}`} </div>
      <div className = 'price'> {`${price_low}`} </div>
      <div className = 'price'> {`${price_close}`} </div> */}
    </div>
  )

};

export default Security;