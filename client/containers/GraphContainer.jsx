import React from 'react';
import Graph from '../components/Graph.jsx';

function GraphContainer(props){
  return (
    <div id = 'graphContainer'>
      <Graph stockData = {props.stockData}/>
    </div>
  )
};

export default GraphContainer;