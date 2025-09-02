function getTransactionsList(json = false) {
  let transactions = [];
  for(let txn of getSheetValues(SHEET_ID,TRANSACTION.sheet,TRANSACTION.range)) {
    transactions.push(new Transaction(...txn));
  }
  return returnVals(json,transactions);
}

function getAccountsList(json = false) {
  let accounts = [];
  for(let acct of getSheetValues(SHEET_ID,ACCOUNTS.sheet,ACCOUNTS.range)) {
    accounts.push(new Generic(...acct));
  }
  return returnVals(json,accounts)
}

function getCommonTransactionsList(json = false) {
  let common = [];
  for(let com of getSheetValues(SHEET_ID,COMMON_TRANSACTIONS.sheet,COMMON_TRANSACTIONS.range)) {
    common.push(new Generic(...com));
  }
  return returnVals(json,common);
}

function getExpensesList(json = false) {
  let expenses = [];
  for(let exp of getSheetValues(SHEET_ID,EXPENSES.sheet,EXPENSES.range)) {
    expenses.push(new Generic(...exp));
  }
  return returnVals(json,expenses);
}

function getIncomesList(json = false) {
  let incomes = [];
  for(let inc of getSheetValues(SHEET_ID,INCOMES.sheet,INCOMES.range)) {
    incomes.push(new Generic(...inc));
  }
  return returnVals(json,incomes);
}

function getTransfersList(json = false) {
  let transfers = [];
  for(let trans of getSheetValues(SHEET_ID,TRANSFERS.sheet,TRANSFERS.range)) {
    transfers.push(new Generic(...trans));
  }
  return returnVals(json,transfers);
}

function getCatsToIgnoreList(json = false) {
  let catsToIgn = [];
  for(let cat of getSheetValues(SHEET_ID,CATSTOIGN.sheet,CATSTOIGN.range)) {
    catsToIgn.push(new Generic(...cat));
  }
  return returnVals(json,catsToIgn);
}

function returnVals(json,vals) {
  if(json) return JSON.stringify(vals);
  return vals;
}