const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerLoanDetails = new Schema({
  loanAmount: {
    type: Number
  },
  paymentDate: {
    type: Date
  },
  creditLimit: {
    type: Number
  }
});

module.exports = CustomerLoan = mongoose.model(
  "CustomerLoanDetails",
  CustomerLoanDetails
);
