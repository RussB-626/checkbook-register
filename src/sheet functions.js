// Function to get sheet values based on sheet ID, Sheet Name, and Sheet Range
// Json value can be nil, will return default values in array, else return JSON string of array values
function getSheetValues(sheetId,sheetName,range,json = false) {
  // Get values from sheet
  var values = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName).getRange(range).getValues();
  values = values.filter(v => v[0] !== "");
  
  // If JSON is true, return JSON stringify values
  if(json) return JSON.stringify(values);
  // Return values
  return values;    
}

// ========================================================================================

// Edit Sheet Information
function editSheet(func,sheetId,sheetName,data,row,from,thru) {

  // Setup and Get Spreadsheet/Sheet information
  let sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  
  // Setup script lock
  let lock = LockService.getScriptLock();

  try {
    // Wait for script lock
    lock.waitLock(30000);
  
    // Run function based on function value
    if(func === "add") {
      // Append new data to end of sheet
      sheet.appendRow(data);
    } else if(func === "edit") {
      // Edit row of data
      let range = sheet.getRange(from + row + ":" + thru + row);
      range.setValues([data]);
    } else if(func === "delete") {
      // Delete Row
      sheet.deleteRow(row);
    }
    
    // Release script lock
    lock.releaseLock();
  } catch(e) {
    return e;
  }
  
  return;
}

// ========================================================================================

function createTransaction(txn) {
  let fields = Object.keys(new Transaction());
  let txnDetailsArray = fields.map(f => txn[f]);
  let error = editSheet(
    'add',
    SHEET_ID,
    TRANSACTION.sheet,
    txnDetailsArray
  );

  return JSON.stringify({error :  error, txn : txn});
}

// ========================================================================================

function createTransactions(txns) {
  let fields = Object.keys(new Transaction());
  let error = '';
  for(let txn of txns) {
    let txnDetailsArray = fields.map(f => txn[f]);
    error = editSheet(
      'add',
      SHEET_ID,
      TRANSACTION.sheet,
      txnDetailsArray
    );

    if(error) break;
  }

  return JSON.stringify({error :  error, txns : txns});
}

// ========================================================================================

function editTransaction(txnIndex,txn) {
  let fields = Object.keys(new Transaction());
  let txnDetailsArray = fields.map(f => txn[f]);
  let row = Number(txnIndex) + 1;
  let error = '';

  error = editSheet(
    'edit',
    SHEET_ID,
    TRANSACTION.sheet,
    txnDetailsArray,
    row,
    TRANSACTION.from,
    TRANSACTION.thru
  );
  
  return JSON.stringify({error : error, txnIndex : txnIndex, txn : txn});
}

// ========================================================================================

function deleteTransaction(txnIndex) {
  let row = Number(txnIndex) + 1;
  let error = editSheet(
    'delete',
    SHEET_ID,
    TRANSACTION.sheet,
    '',
    row
  );

  return JSON.stringify({error : error, txnIndex : txnIndex});
}

// ========================================================================================