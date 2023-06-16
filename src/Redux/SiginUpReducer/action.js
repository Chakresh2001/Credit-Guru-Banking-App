import axios from "axios"
import { GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS } from "../actionType"


function check(data){
    return axios.get("https://fair-pink-gecko.cyclic.app/users").then((res)=>{
        let val = res?.data

        let result = val.filter((ele)=>{
            if(ele.mail==data.mail){
                return true
            }
        })
        return result.length
    })
}

export const getSignUp = (state) => (dispatch) =>{

    console.log(state);

    dispatch({type:GET_SIGNUP_REQUEST})

    let flag = false

    check(state).then((res)=>{
        if(res==0){
            flag = true
        }
        else{
            flag = false
        }
    })

    if(!flag){
        axios.post("https://fair-pink-gecko.cyclic.app/users",state)
        .then((res)=>{
            dispatch({type:GET_SIGNUP_SUCCESS})
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
}