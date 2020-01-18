const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CibilDataSchema = new Schema({
  score: {
    type: String
  },
  MaxLoanAmount: {
    type: Number
  }
});

module.exports = CibilData = mongoose.model("CibilData", CibilDataSchema);
