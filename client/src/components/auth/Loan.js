import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Loan = () => {

  const style = {
    width: "400px",
    margin: "20px",
    display: "inline-block"
  }


  return (
    <Fragment>
      <h1 className="large text-primary text-center">Personal Loan</h1>
      <p className="lead text-center">Share your details below to proceed further</p>
      
      <form className="form"  action="dashboard.html">
        <input
            type="text"
            placeholder="First Name as per PAN"
            name="firstName"
            style = {style}
            required
        />
        <input
            type="text"
            placeholder="Last Name as per PAN"
            name="lastName"
            style = {style}
            required
        />
        <input
            type="text"
            placeholder="City"
            name="city"
            style = {style}
            required
        />
        <input
            type="text"
            placeholder="Mobile Number (along with country code)"
            name="mobileNumber"
            style = {style}
            required
        />
        <br></br>
        

          <input type="submit"  className="btn btn-primary" style = {style} value="Get OTP" />
      </form>
      
    </Fragment>
  )
}


export default Loan;
