import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GraphContainer from '../containers/GraphContainer.jsx';
import MetricContainer from '../containers/MetricContainer.jsx';
import WatchlistContainer from '../containers/WatchlistContainer.jsx';

const Home = () => (
  <div id="home">
    <GraphContainer />
    <MetricContainer />
    <WatchlistContainer />
  </div>
)

export default Home;