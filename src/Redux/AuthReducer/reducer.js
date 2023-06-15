import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS } from "../actionType"

const initialState = {
    loading : false,
    isAuth: false,
    error : null
}

export const reducer = (state=initialState,{type})=>{
    switch(type){
        case GET_AUTH_REQUEST : {
            return {
                ...state,
                loading : true,
                isAuth: false,
                error : false
            }
        }
        case GET_AUTH_SUCCESS : {
            return {
                ...state,
                loading : false,
                isAuth: true,
                error : false
            }
        }
        case GET_AUTH_FAILURE : {
            return {
                ...state,
                loading : false,
                isAuth: false,
                error : true
            }
        }


        default : return {state}
    }
}