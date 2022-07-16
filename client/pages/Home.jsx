import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GraphContainer from '../containers/GraphContainer.jsx';
import MetricContainer from '../containers/MetricContainer.jsx';
import WatchlistContainer from '../containers/WatchlistContainer.jsx';

function Home(props) {
  return (  
    <div id="home">
      <GraphContainer stockData = {props.stockData}/>
      <MetricContainer />
      <WatchlistContainer updateChart = {props.updateChart}/>
    </div>
  )
  };

export default Home;