import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS, LOGOUT_SUCCESS } from "../actionType"

const initialState = {
    name : "",
    isAuth: false,
    error : null
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_AUTH_REQUEST : {
            return {
                ...state,
                name:"",
                isAuth: false,
                error : false
            }
        }
        case GET_AUTH_SUCCESS : {
            return {
                ...state,
                name:payload,
                isAuth: true,
                error : false
            }
        }
        case GET_AUTH_FAILURE : {
            return {
                ...state,
                name:"",
                isAuth: false,
                error : true
            }
        }
        case LOGOUT_SUCCESS :{
            return {
                name:"",
                isAuth: false,
                error : false
            }
        }

        default : return {state}
    }
}