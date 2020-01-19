const express = require("express");
const connectDB = require("./config/db");
const Form = require("./models/Form");
const FormDetails = require("./models/FormDetails");
const LoanDetails = require("./models/LoanDetails");
const CustomerLoanDetails = require("./models/CustomerLoanDetails");
const CustomerCibilScore = require("./models/CustomerCibilScore");

const app = express();

// connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.post("/fillform", async (req, res) => {
  const { firstName, lastName, city, mobileNumber } = req.body;

  const form = new Form({
    firstName: firstName,
    lastName: lastName,
    city: city,
    mobileNumber: mobileNumber
  });

  await form.save();
  res.json({ msg: "Data saved" });
});

app.post("/formDetails", async (req, res) => {
  const {
    FirstName,
    MiddleName,
    LastName,
    email,
    emp_type,
    dob,
    mobileNumber,
    pan,
    pincode,
    experience,
    income
  } = req.body;
  console.log(req.body);
  const form = await Form.findOne({ mobileNumber: mobileNumber });
  console.log(form);

  const formDetails = new FormDetails({
    FirstName: FirstName,
    LastName: LastName,
    MiddleName: MiddleName,
    email: email,
    mobileNumber: mobileNumber,
    dob: dob,
    income: income,
    pincode: pincode,
    emp_type: emp_type,
    experience: experience,
    pan: pan,
    customer: form
  });

  await formDetails.save();
  res.json({ mobileNumber: mobileNumber });
});

app.post("/loanDetails", async (req, res) => {
  const form = await Form.findOne({ mobileNumber: req.body.mobileNumber });

  const applicationNumber =
    "ABC" +
    Math.random()
      .toString(36)
      .substr(2, 9);

  const loanDetails = new LoanDetails({
    loanType: req.body.loanType,
    loanAmount: req.body.loanAmount,
    tenure: req.body.tenure,
    customerId: form,
    applicationNumber: applicationNumber
  });

  await loanDetails.save();
  res.json({ msg: "Data saved successfully" });
});

app.post("/calculateEmi", (req, res) => {
  const { interest, loanAmount, tenure } = req.body;
  const interestPerMonth = interest / 100;
  const months = tenure * 12;

  const r = interest / (12 * 100); // one month interest
  const t = tenure * 12; // one month period
  const emi = (loanAmount * r * Math.pow(1 + r, t)) / (Math.pow(1 + r, t) - 1);

  res.json({ emi: emi });
});

app.get("/getAllLoans", async (req, res) => {
  const loans = await LoanDetails.find();

  res.json({ loans: loans });
});

app.post("/populateCustomerLoanDetails", async (req, res) => {
  const customerLoanDetails = new CustomerLoanDetails({
    loanAmount: req.body.loanAmount,
    paymentDate: req.body.paymentDate,
    creditLimit: req.body.creditLimit
  });

  const obj = await customerLoanDetails.save();

  const customerCibilScore = new CustomerCibilScore({
    PAN: req.body.PAN,
    cibilScore: req.body.cibilScore,
    loanId: obj
  });

  await customerCibilScore.save();
  // console.log(obj);
});

app.post("/payment", async (req, res) => {
  const customerObj = await CustomerCibilScore.findOne({ PAN: req.body.PAN });
  console.log(customerObj);
  const loanObj = await CustomerLoanDetails.findById(customerObj.loanId);
  const date = new Date(req.body.date);
  const loanDate = new Date(loanObj.paymentDate);

  console.log(date.valueOf() + " " + loanDate.valueOf());
  if (loanDate.getDate() + 30 > date.getDate()) {
    console.log("HELLO");
    // loanObj.creditLimit -= req.body.emi;
    customerObj.cibilScore -= 0.35 * customerObj.cibilScore;
    // let updatedLoanObj = CustomerLoanDetails.findOneAndUpdate(
    // { loanId: customerObj.loanId },
    // { $set: loanObj },
    // { new: true, upsert: true }
    // );

    let updatedCustomerObj = await CustomerCibilScore.findOneAndUpdate(
      { PAN: req.body.PAN },
      { $set: customerObj },
      { new: true, upsert: true }
    );

    res.json({
      updatedCustomerObj: updatedCustomerObj
    });
  } else {
    loanObj.creditLimit -= req.body.emi;
    customerObj.cibilScore += 0.35 * customerObj.cibilScore;
    let updatedLoanObj = CustomerLoanDetails.findOneAndUpdate(
      { loanId: customerObj.loanId },
      { $set: loanObj },
      { new: true, upsert: true }
    );

    let updatedCustomerObj = await CustomerCibilScore.findOneAndUpdate(
      { PAN: req.body.PAN },
      { $set: customerObj },
      { new: true, upsert: true }
    );

    res.json({
      updatedCustomerObj: updatedCustomerObj,
      updatedLoanObj: updatedLoanObj
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
