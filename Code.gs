function doGet() {
  return HtmlService.createHtmlOutputFromFile("market-matrix").setTitle("Market Matrix");
}

function getStockData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // Replace with your sheet name
  const range = sheet.getDataRange();
  const values = range.getValues();

  // Define headers explicitly
  const headers = [
    "SYMBOL",
    "Exchange + Symbol",
    "10 Days Chart",
    "NAME OF COMPANY",
    "Current Price",
    "Change",
    "Change %",
    "Market Cap(in Cr*)",
    "Volume",
    "VolumeAvg"
  ];

  const data = values.slice(1).map(row => {
    const obj = {};
    row.forEach((cell, index) => {
      obj[headers[index]] = cell;
    });
    return obj;
  });

  return data;
}