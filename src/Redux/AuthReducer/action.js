import axios from "axios"
import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS } from "../actionType"


export const getAuthStatus = (mail,password) => (dispatch)=>{
    dispatch({type:GET_AUTH_REQUEST})
    
    axios.get('https://zealous-ant-smock.cyclic.app/users')
    .then((res)=>{
        let response = res.data
        response.map((ele)=>{
            if(ele.mail === mail && ele.password === password){
                dispatch({type:GET_AUTH_SUCCESS})
            }
        })
    })
    .then((err)=>{
        dispatch({type:GET_AUTH_FAILURE})
    })
        
}   