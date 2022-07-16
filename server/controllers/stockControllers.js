const axios = require('axios');

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
const alphaVantageAPI = 'ZH152HF17S83V3D0';

const functions = ['function=TIME_SERIES_INTRADAY', 'function=TIME_SERIES_DAILY']

const urlCreator = (symbol) => {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${alphaVantageAPI}`;
}

const stockController = {};

stockController.dailyPrices = async (req, res, next) => {
  // try {
  //   // const { ticker } = req.body;
  //   const ticker = 'AAPL'

  //   await axios.get(urlCreator(functions[1], ticker))
  //     .pipe(new StringStream())
  //     .CSVParse()                                   // parse CSV output into row objects
  //     .consume(object => console.log("Row:", object))
  //     .then(() => console.log("success"));
  // } catch (err) {
  //   return next({
  //     log: `error in stockController.dailyPrices : ${err}`,
  //     message: {err: `request failed`}
  //   })
  // }
}