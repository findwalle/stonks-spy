import React from 'react';
import Graph from '../components/Graph.jsx';
import dummyData from '../components/DataTest/dummydata'

// const GraphContainer = () => {
//   const stockData = {
//     labels: Object.keys(dummyData),
//     datasets: [{
//       label: 'Daily Chart',
//       data: Object.values(dummyData).map(data => Number(data['1. open']))
//     }]
//   }

//   return (
//     <div id = 'graphContainer'>
//       <Graph chartData = {stockData}/>
//     </div>
//   )
// };

function GraphContainer(){
  const stockData = {
    labels: Object.keys(dummyData),
    datasets: [{
      label: 'Price',
      data: Object.values(dummyData).map(data => Number(data['1. open'])),
      borderColor: "gray",
    }],
    options: {
      // maintainAspectRatio: true,
    }
  }

  return (
    <div id = 'graphContainer'>
      <Graph stockData = {stockData}/>
    </div>
  )
};

export default GraphContainer;