import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { loan } from "../../actions/loan";

const LoanDetails = ({ loan }) => {
  const [formData, setFormData] = useState({
    loanType: "",
    loanAmount: "",
    tenure: "",
    interest: "",
    applicationNumber: ""
  });

  const {
    loanType,
    loanAmount,
    tenure,
    interest,
    applicationNumber
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  let req_body = {
    loanType,
    loanAmount,
    tenure,
    interest,
    applicationNumber
  };

  const onSubmit = async e => {

    console.log()
    e.preventDefault();
    console.log(loanType + " " + loanAmount + " " + tenure + " " + interest);
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   };

    //   console.log(req_body);
    //   req_body = JSON.stringify(req_body);
    //   const res = await axios.post('/loanDetails', req_body, config);
    //   console.log(res);
    loan(loanType, loanAmount, tenure, interest, applicationNumber);
  };

    const onSubmitButton = async () => {

    

      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
      let req_body = {
        interest,
        loanAmount,
        tenure,
        applicationNumber
      }
      req_body = JSON.stringify(req_body);
      console.log(req_body);
      const res = await axios.post('/calculateEmi', req_body, config);
      
      setFormData({ ...formData, 'emi': res.data.emi });
    }
  

  const checkValidity = async ()=>{
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };

    // let PAN = props.location.state.pan;
    // console.log(PAN);
    // PAN = JSON.stringify(PAN);
    // const res = await axios.get("/loanAmountCheck", PAN, config);

    // console.log(res);
  }


  return (
    <Fragment>
      <h1 className="large text-primary">Fill in loan details</h1>
      <small className="form-text">
        <b>Note: </b>Please provide your details as per your requirements
      </small>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <label for="exampleFormControlSelect1">Type of Loans</label>
        <select
          class="form-control"
          onChange={e => onChange(e)}
          value={loanType}
          name="loanType"
          id="exampleFormControlSelect1"
        >
          <option value="personalLoan">Personal Loan</option>
          <option value="carLoan">Car Loan</option>
          <option value="homeLoan">Home Loan</option>
        </select>

        <div className="form-group">
          Loan Amount :
          <input
            type="number"
            placeholder="LoanAmount"
            name="loanAmount"
            value={loanAmount}
            onChange={e => onChange(e)}
            required
          />
          <div align="right">
          <button type="button" className="btn btn-primary" onClick = {() => checkValidity()}>
            Check Validity
          </button>
          <p>{  }</p>
          </div>


        </div>
        <div className="form-group">
          Tenure :
          <input
            type="number"
            placeholder="Tenure"
            name="tenure"
            value={tenure}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          Interest
          <input
            type="number"
            placeholder="Interest"
            name="interest"
            value={interest}
            onChange={e => onChange(e)}
            required
          />
        </div>

        <div align="right">
          <button type="button" className="btn btn-primary" onClick = {() => onSubmitButton()}>
            Calculate EMI
          </button>
          <p>{ formData.emi }</p>
      </div>

      

        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </Fragment>
  );
};

export default connect(null, { loan })(LoanDetails);
