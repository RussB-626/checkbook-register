// Get Database Information
function getPageInfo(json = true) {
  let info = [
    getTransactionsList(),
    getAccountsList(),
    getCommonTransactionsList(),
    getExpensesList(),
    getIncomesList(),
    getTransfersList(),
    getCatsToIgnoreList()
  ];

  let results = new PageData(...info);
  return returnVals(json,results);
}

function financial(amount) {
  return Number.parseFloat(amount).toFixed(2);
}