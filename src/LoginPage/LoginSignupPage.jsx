import React, { useReducer, useState } from 'react'
import * as Components from "./Components"
import axios from 'axios';
import { Box, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthStatus } from '../Redux/AuthReducer/action';
import { Navigate, useNavigate } from 'react-router-dom';


const ini = {
    name : "",
    mail : "",
    password : "",
    dob : "",
    address : "",
    phoneNo : ""
}

const reducer = (state,action)=>{
    switch(action.type){
            case 'LOGIN':
                return {
                  ...state,
                    user: action.payload
                }
            case 'LOGOUT':
                return {
                  ...state,
                    user: null
                }
            default:
                return state
        }
}

export const LoginSignupPage = () => {
    const [signIn, toggle] = React.useState(true);

    const [mail,setMail] = useState("")
    const [password,setpassword] = useState("")

    const AuthValues = useSelector((store)=>store.authReducer)

    const dispatch = useDispatch()

    // let navigate = useNavigate()
    // let toast = useToast()

    let [state,dis] = useReducer(reducer,ini)

    let handleChange = (e)=>{
        let {value, name} = e.target

        
    }

    let handleLogin = (e)=>{
        e.preventDefault()
        dispatch(getAuthStatus(mail,password))
        
    }
    
    // if(AuthValues.isAuth){
    //     toast({
    //         title: 'SUCCESFULLY LOGGED IN',
    //         status: 'success',
    //         duration: 2000,
    //         position:"top-right",
    //         isClosable: true,
    //       })
    //       setTimeout(() => {
    //         navigate("/")
    //       }, 3000);
    // }

    // if(AuthValues.error){
    //     toast({
    //         title: 'WRONG CREDENTIALS',
    //         status: 'error',
    //         duration: 2000,
    //         position:"top-right",
    //         isClosable: true,
    //       })
    // }


    return(
        <Box padding={"30px"} display={"flex"} justifyContent={"center"} gap="20px" mt="50px">
            <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name'  />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Input type='text' placeholder='Confirm Password' />
                    <Components.Input type='text' placeholder='Phone No.' />
                    <Components.Input type='text' placeholder='Address' />
                    <Components.Input type='text' placeholder='Date Of Birth' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleLogin}>
                     <Components.Title>Sigin in</Components.Title>
                     <Components.Input type='email' placeholder='Email' value={mail} onChange={(e)=>setMail(e.target.value)} />
                     <Components.Input type='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}  />
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button>Sigin In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Hello, Friend!</Components.Title>
                      <Components.Paragraph>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              Sigin Up
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>

        <Components.ImageContainer>
            <img src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.72/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat&dpr=1" alt="" />
        </Components.ImageContainer>

        </Box>
    )
}


