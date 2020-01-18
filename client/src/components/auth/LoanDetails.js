import React, {Fragment, useState} from 'react'
import axios from 'axios';
import {loan} from '../../actions/loan'

const LoanDetails =() => {
  const [formData, setFormData]=useState(
    {
      loanType: '',
      loanAmount: '',
      tenure: '', 
      interest: ''
    }
    
  ); 

  const {loanType,loanAmount,tenure, interest}=formData;

  const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value});

  let req_body = {
    loanType,
      loanAmount,
      tenure,
      interest
  }

    const onSubmit = async e => {
      e.preventDefault();
console.log(loanType+" "+
    loanAmount+" "+
    tenure+" "+
    interest);
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   };
      
    //   console.log(req_body);
    //   req_body = JSON.stringify(req_body);
    //   const res = await axios.post('/loanDetails', req_body, config);
    //   console.log(res);
    loan(loanType,
        loanAmount,
        tenure,
        interest);
    };


  return (
      <Fragment>
          <h1 className="large text-primary">Fill in loan details</h1>
          <small className="form-text"><b>Note: </b>Please provide your details as per your requirements</small
        >
    
    <form className="form" onSubmit={e => onSubmit(e)}>
        
    <label for="exampleFormControlSelect1">Type of Loans</label>
  <select class="form-control" onChange = {e => onChange(e)}
   value={loanType} name="loanType" id="exampleFormControlSelect1">
    <option value = "personalLoan">Personal Loan</option>
    <option value ="carLoan">Car Loan</option>
    <option value ="homeLoan">Home Loan</option>
  </select>

    <div className="form-group">Loan Amount : 
            <input 
              type="number" 
              placeholder="LoanAmount" 
              name="loanAmount" 
              value={loanAmount} 
              onChange ={e => onChange(e)}
              required 
            />
          </div>
          <div className="form-group">Tenure : 
            <input 
              type="number" 
              placeholder="Tenure" 
              name="tenure" 
              value={tenure} 
              onChange ={e => onChange(e)}
              required 
            />
            </div>

  <div className="form-group">Interest
  <input 
              type="number" 
              placeholder="Interest" 
              name="interest" 
              value={interest} 
              onChange ={e => onChange(e)}
              required 
            />
      </div>

      <div align="right">
      <button type="button" className="btn btn-primary">Calculate EMI</button></div>

    <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
      </Fragment>
  );
}

export default LoanDetails;