const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerCibilScoreSchema = new Schema({
  PAN: {
    type: String
  },
  cibilScore: {
    type: Number
  },
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerLoanDetails"
  }
});

module.exports = CustomerCibilScore = mongoose.model(
  "CustomerCibilScore",
  CustomerCibilScoreSchema
);
