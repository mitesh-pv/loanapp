const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerLoanDetails = new Schema({
  loanAmount: {
    type: Number
  },

  LoanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerLoanDetails"
  },
  paymentDate: {
    type: Date
  },
  creditLimit: {
    type: Number
  }
});

module.exports = CustomerLoanDetails = mongoose.model(
  "CustomerLoanDetails",
  CustomerLoanDetails
);
