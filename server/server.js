const express = require('express');
const app = express();
const path = require('path');

// tester

// const dummyData = [
//   {symbol: 'AAPL', company: 'Apple Inc.', price_open: 200.2, price_high: 210.37, price_low: 199.10, price_close: 209.72},
//   {symbol: 'BA', company: 'Boeing', price_open: 140.2, price_high: 148.83, price_low: 139.52, price_close: 147.33},
//   {symbol: 'AMD', company: 'Advanced Micro Devices', price_open: 76.13, price_high: 77.28, price_low: 74.22, price_close: 76.52},
//   {symbol: 'META', company: 'Meta Inc.', price_open: 163.29, price_high: 163.89, price_low: 158.23, price_close: 158.30},
//   {symbol: 'NFLX', company: 'Netflix Inc.', price_open: 175.99, price_high: 176.64, price_low: 172.30, price_close: 172.75}
// ]

const alphaVantageAPI = 'ZH152HF17S83V3D0';

app.get('/api/dummyData', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, './db/stockData.test.json'));
})

// for production code blocks


// 404 handle block


// global error handler


app.listen(3000);