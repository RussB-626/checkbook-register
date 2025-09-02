class Transaction {
  constructor(date,account,category,description,note,amount,type,pending) {
    this.date = formatDateInternallyWithDash(date);
    this.account = account;
    this.category = category;
    this.description = description;
    this.note = note;
    this.amount = financial(amount);
    this.type = type;
    this.pending = pending;
  }
}

class Groups {
  constructor(name,accounts) {
    this.name = name;
    this.accounts = accounts ? accounts.split(',').map(e => e.trim()) : [];
  }
}

class Generic {
  constructor(name) {
    this.name = name;
  }
}

class PageData{
  constructor(txns,accounts,commonTxns,expenses,incomes,transfers,catsToIgn) {
    this.txns = txns;
    this.accounts = accounts;
    this.commonTxns = commonTxns;
    this.expenses = expenses;
    this.incomes = incomes;
    this.transfers = transfers;
    this.catsToIgn = catsToIgn;
  }
}