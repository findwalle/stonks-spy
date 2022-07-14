import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GraphContainer from '../containers/GraphContainer.jsx';
import MetricContainer from '../containers/MetricContainer.jsx';
import Watchlist from '../containers/Watchlist.jsx';

const Home = () => (
  <div id="home">
    <GraphContainer />
    <MetricContainer />
    <Watchlist />
  </div>
)

export default Home;