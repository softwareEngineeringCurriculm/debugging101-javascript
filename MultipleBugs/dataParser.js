const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

const filePath = '/home/ericcchiu/Documents/debugging101-javascript/MultipleBugs/stock_data.txt';

let stockData = {};

// dataFileImporter function that imports data asynchronously from a file.
const dataImporterValidator = async (filePath) => {
  try {
    const fileData = await readFileAsync(filePath);
    // outputData = JSON.parse(fileData);
    let parsedData = JSON.parse(JSON.parse(fileData));
    dataOrganizer(parsedData);
  } catch (err) {
    console.error(err);
  }
};

const dataOrganizer = (data) => {
  if (data === null) {
  }
  data.forEach((item) => {
    // console.log(item.stock_name);
    stockData[item.stock_name] = {
      symbol: item.stock_symbol,
      industry: item.stock_industry,
      marketCap: item.stock_market_cap,
    };
  });
  console.log(outputData);
  return outputData;
};

await dataImporterValidator(filePath);

console.log(stockData);
