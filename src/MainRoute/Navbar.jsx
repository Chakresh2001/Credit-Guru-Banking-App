import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuItemOption,
   MenuGroup,
   MenuOptionGroup,
   MenuDivider,
 } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutSuccess } from '../Redux/AuthReducer/action'



export const Navbar = () => {

   const data = useSelector((store)=>store.authReducer)
   const {name, isAuth} = data
   const toast = useToast()
   let dispatch = useDispatch()

   // console.log(name, isAuth)

   let handleClick = ()=>{
      dispatch(LogoutSuccess())
      toast({
         title: 'Logged out',
         status: 'error',
         duration: 2000,
         position:"top-right",
         isClosable: true,
       })
   }



  return (
    <div>
        <Box boxShadow={"lg"} border={"1px solid #E2E8F0"} >
         <Flex padding={"10px"} h="60px" w="100%" justifyContent={"space-between"} alignItems={"center"}>
            <Link to={"/"} style={{color:"#008701", width:"10%"}}> <span style={{fontWeight:"bold", fontSize:"25px"}}>creditGuru</span> </Link>
         <Flex mr="500px" w="50%" justifyContent={"space-evenly"}>
            <Link to={"/credit-cards"} className='onHover-NavLink'>Credit Card</Link>
            <Link className='onHover-NavLink' to={"/loans"}>Loan</Link>
            <Link className='onHover-NavLink'>Home</Link>
            <Link className='onHover-NavLink' to="/money" >Money</Link>
            <Link className='onHover-NavLink'>EMI Calculator</Link>
            <Link className='onHover-NavLink'>Credit Scores</Link>
            
         </Flex>
         <Flex w="20%" textAlign={"center"} justifyContent={"space-evenly"}>

            {
               isAuth ? (
                  <Menu>
            <MenuButton as={Button} backgroundColor='#8DDD76' _hover={{backgroundColor:"#8DDD76"}}>
               {name}
            </MenuButton>
            <MenuList>
               <MenuGroup title='Profile'>
                  <MenuItem>My Cards</MenuItem>
                  <MenuItem>Loans </MenuItem>
                  <MenuItem onClick={handleClick}>Sign Out </MenuItem>
               </MenuGroup>
            </MenuList>
            </Menu>
               ) : ( 
            <Link  className='onHover-NavLink' to="/login">Login / Sign Up</Link>
            )
            }
            <Link className='onHover-NavLink'>Help</Link>
         </Flex>
         </Flex>
        </Box>
    </div>
  )
}
