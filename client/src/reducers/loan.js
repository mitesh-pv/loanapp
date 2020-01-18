import{
    LOAN_APPROVAL_SUCCESS,
    LOAN_APPROVAL_FAILURE
} from '../actions/types';

const initialState={
    isApproved:null,
    loading:true,
    loanDetails:null
}

export default function(state=initialState,action){
    const {type,payload}=action;
    
    switch(type){
        case LOAN_APPROVAL_SUCCESS:
            console.log("approved"+payload);
            return{
                ...state,
                isApproved:true,
                loading:false,
                loanDetails:payload
            }
        case LOAN_APPROVAL_FAILURE:
            console.log("not approved"+payload);
            return {
                ...state,
                ...payload,
                isApproved:true,
                loading:false
            }
        default:
            console.log("default"+payload);
            return state;

    }
}