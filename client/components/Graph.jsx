import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const Graph = props => {
  return (
    <Line id = 'graph' data = {props.stockData}/>
  )
}

// function Graph({ chartData }) {
//   return (
//     <div id = 'graph'>
//       <p>some text for now as i build out graph :D</p>
//       <Line data = {chartData}/>
//     </div>
//   )
// }


export default Graph;