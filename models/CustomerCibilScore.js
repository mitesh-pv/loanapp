const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerCibilScore = new Schema({
  PAN: {
    type: String
  },
  CibilScore: {
    type: Number
  },
  LoanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerLoanDetails"
  }
});

module.exports = CustomerCibil = mongoose.model( "CustomerCibilScore", CustomerCibilScore );
