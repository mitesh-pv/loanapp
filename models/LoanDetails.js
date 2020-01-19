const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoanDetailsSchema = new Schema({
  loanType: {
    type: String,
    required: true
  },
  loanAmount: {
    type: String,
    required: true
  },
  tenure: {
    type: Number
    // required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "forms"
  },
  applicationNumber: {
    type: String
  }
});

module.exports = LoanDetails = mongoose.model("LoanDetails", LoanDetailsSchema);
