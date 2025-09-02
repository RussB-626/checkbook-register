// SHEET_ID needs to be updated based on your specific sheets ID
const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const TRANSACTION = {sheet : 'txns', range : 'A:H', from: 'A', thru : 'H'};
const ACCOUNTS = {sheet : 'accounts', range : 'A:A', from: 'A', thru : 'A'};
const COMMON_TRANSACTIONS = {sheet : 'common_txns', range : 'A:A', from: 'A', thru : 'A'};
const EXPENSES = {sheet : 'expenses', range : 'A:A', from: 'A', thru : 'A'};
const INCOMES = {sheet : 'income', range : 'A:A', from: 'A', thru : 'A'};
const TRANSFERS = {sheet : 'transfers', range : 'A:A', from: 'A', thru : 'A'};
const CATSTOIGN = {sheet : 'cats_to_ignore', range : 'A:A', from: 'A', thru : 'A'};

// ========================================================================================

const TIMEZONE = 'America/New_York';
const INTERNAL_DATE_FORMAT = 'yyyyMMdd';
const INTERNAL_DATE_FORMAT_DASH = 'yyyy-MM-dd';
const INTERNAL_DATE_FORMAT_SLASH = 'yyyy/MM/dd';