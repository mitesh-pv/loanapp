import axios from "axios";
import { LOAN_APPROVAL_SUCCESS, LOAN_APPROVAL_FAILURE } from "./types";
import { setAlert } from "./alert";

//loan approval
export const loan = (
  loanType,
  loanAmount,
  tenure,
  interest
) => async dispatch => {
  console.log(loanType + " " + loanAmount + " " + tenure + " " + interest);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const req_body = {
    loanType: loanType,
    loanAmount: loanAmount,
    tenure: tenure,
    interest: interest
  };
  const body = JSON.stringify(req_body);
  console.log(body);
  try {
    const res = await axios.post("/loanDetails", body, config);
    console.log(res.data);
    dispatch({
      type: LOAN_APPROVAL_SUCCESS,
      payload: res.data
    });
    //dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(errors.msg, "danger")));
    }
    dispatch({
      type: LOAN_APPROVAL_FAILURE
    });
  }
};
