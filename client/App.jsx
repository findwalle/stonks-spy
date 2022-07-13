import React, { Component } from 'react';
import GraphContainer from './containers/GraphContainer.jsx';
import Watchlist from './containers/Watchlist.jsx';

const App = () => (
  <div id="app" style="border: 1px solid">
    <GraphContainer />
    <Watchlist />
  </div>
);

export default App;