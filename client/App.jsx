import React, { Component } from 'react';
import GraphContainer from './containers/GraphContainer.jsx';
import MetricContainer from './containers/MetricContainer.jsx';
import Watchlist from './containers/Watchlist.jsx';

const App = () => (
  <div id="app">
    <GraphContainer />
    <MetricContainer />
    <Watchlist />
  </div>
);

export default App;