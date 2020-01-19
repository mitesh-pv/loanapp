const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerLoanDetailsSchema = new Schema({
  loanAmount: {
    type: Number
  },
  paymentDate: {
    type: Date,
    default: Date.now()
  },
  creditLimit: {
    type: Number
  }
});

module.exports = CustomerLoanDetails = mongoose.model(
  "CustomerLoanDetails",
  CustomerLoanDetailsSchema
);
