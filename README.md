# checkbook-register
A lightweight checkbook register using Google Apps Script and Google Sheets to track transactions, expenses, and balances.

- [Google Sheet Setup](#google-sheet-setup)
- [Installation and Setup Guide](#installation-and-setup-guide)
- [Google Apps Script Setup and Deployment](#google-script-setup-and-deployment)
- [Google Apps Script Redeployment After Edits](#google-apps-script-redeployment-after-edits)
- [Contributing](#contributing)

---

## Google Sheet Setup

- Create a new Google Sheet in your Google Drive
- Within the new Google Sheet create the following new tabs:
![New Google Sheet Tabs](imgs/Screenshot%202025-09-02%20145500.png)
    - txns
    - accounts
    - common_txns
    - expenses
    - income
    - transfers
    - cats_to_ignore
- Copy the **Google Sheet ID** from the URL:
![Google Sheet ID](imgs/Screenshot%202025-09-02%20150009.png)
    - For this example: 1B_6TRt7NltXk1c5A3jfvNsrHSkVw5HtgiIX_hJcDyhE

## Installation and Setup Guide

Install clasp, log in, and clone the project:

```bash
npm install -g @google/clasp
clasp login
git clone https://github.com/RussB-626/checkbook-register.git
cd checkbook-register/src
clasp create
```

- You may be prompted for the following when running `clasp create`:
    - Enable Google Apps Script API
    - Choose between creating a standalone script or a bound script
        - select standalone script

- Update the src/constants.js file with the Google Sheet ID
```js
const SHEET_ID = "YOUR_SHEET_ID_HERE";
```

```bash
clasp push
```

## Google Apps Script Setup and Deployment

- Open the Google Apps Script for editing
    - The new script may be called Src, or some other name.
        - It's ok to rename the script.
- Verify that your commits were pushed and you can see the sheet id within the constants.gs file
- Click on the **Deploy** button at the top right of the Apps Script dashboard
- Select **New deployment** from the drop down
- Click the **gear icon** within the **Select type** column
- Select **Web app** from the drop down
- Provide a new description
- Accept all defaults:
    - Web App
        - Execute as: **your gmail address**
        - Who has access: **Only myself**
- Click on **Deploy**
- You may be prompted to click on **Authorize access** on the next page
    - A popup will appear asking you to select the Gmail account the script will run under
    - If a prompt for __Google hasn't verified this app__ appears:
        - Click on the **Advanced** link within the page
        - Click on **Go to __Script Name__ (unsafe)**
    - Click **Allow** at the bottom
- Copy or Bookmark the **Web app - URL** that was created

## Google Apps Script Redeployment After Edits

If you make any edits to the script you will need to redeploy the Apps Script

- Click on the **Deploy** button at the top right of the Apps Script dashboard
- Click on **Manage deployments** from the drop down
- Click on the **pencil icon** in the top right corner of the popup
- Under the **Version** selection field select **New Version**
- Provide a new Description
- Click on **Deploy**

## Google Sheet Usage Instructions

The Web script does not contain an admin page, and all administrative changes are done through the Google Sheet itself.  That includes adding accounts, common transaction types, expense types, income types, transfer types, and categories that can be ignored all together from the Web script dashboard.

Here are some example values to add to your administrative tabs within the Google Sheet:

<details>
    <summary>account tab examples</summary>
    <ul>
        <li>Bank Account 1</li>
        <li>Bank Account 2</li>
        <li>Credit Card</li>
        <li>Car Loan</li>
    </ul>
</details>

<details>
    <summary>common_txns tab examples</summary>
    <ul>
        <li>Rent</li>
        <li>Water</li>
        <li>Electricity</li>
        <li>Internet</li>
    </ul>
</details>

<details>
    <summary>expenses tab examples</summary>
    <ul>
        <li>ATM/Cash Withdrawals</li>
        <li>Automotive Expenses</li>
        <li>Checks</li>
        <li>Clothing/Shoes</li>
        <li>Credit Cash Adjustment</li>
        <li>Crypto</li>
        <li>Education</li>
        <li>Electronic Transfer</li>
        <li>Electronics</li>
        <li>Entertainment</li>
        <li>Entertainment Subscriptions</li>
        <li>Finance Subscriptions</li>
        <li>Game Subscriptions</li>
        <li>Gaming Expense</li>
        <li>Gasoline/Fuel</li>
        <li>General Merchandise</li>
        <li>Gifts</li>
        <li>Groceries</li>
        <li>Healthcare/Medical</li>
        <li>Hold</li>
        <li>Insurance</li>
        <li>Investments</li>
        <li>Loans</li>
        <li>Mobile App</li>
        <li>Other Expenses</li>
        <li>Pet Care</li>
        <li>Postage and Shipping</li>
        <li>Public Parking</li>
        <li>Rent</li>
        <li>Restaurants/Dining</li>
        <li>Retirement</li>
        <li>Service Charges/Fees</li>
        <li>Software</li>
        <li>Software Subscription</li>
        <li>Taxes</li>
        <li>Taxi Service</li>
        <li>Transfers</li>
        <li>Utilities</li>
        <li>Yearly Subscriptions</li>
    </ul>
</details>

<details>
    <summary>income tab examples</summary>
    <ul>
        <li>Credit Card Payments</li>
        <li>Credit Card Reward Points</li>
        <li>Crypto</li>
        <li>Deposits</li>
        <li>Electronic Transfer</li>
        <li>Gift</li>
        <li>Hold</li>
        <li>Interest</li>
        <li>Investments</li>
        <li>Other Income</li>
        <li>Paychecks/Salary</li>
        <li>Refunds/Adjustments</li>
        <li>Transfers</li>
        <li>Uncategorized</li>
    </ul>
</details>

<details>
    <summary>transfers tab examples</summary>
    <ul>
        <li>Checkings</li>
        <li>Credit Card Payments</li>
        <li>Savings</li>
        <li>Transfers</li>
        <li>Uncategorized</li>
    </ul>
</details>

<details>
    <summary>cats_to_ignore tab examples</summary>
    <ul>
        <li>Hold</li>
    </ul>
</details>

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a pull request or issue.
