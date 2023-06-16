import { GET_SIGNUP_FAILURE, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS } from "../actionType"

let initialState = {
    loading: false,
    signup: false,
    error:false,
}


export const reducer = (state=initialState, {type,payload}) =>{
    switch(type){
        case GET_SIGNUP_REQUEST:
            return {
              ...state,
                loading: true,
            }
        case GET_SIGNUP_SUCCESS:
            return {
              ...state,
                loading: false,
                signup: true,
            }
        case GET_SIGNUP_FAILURE:
            return {
              ...state,
                loading: false,
                signup: false,
                error: true,
            }
        default:
            return state
    }
}