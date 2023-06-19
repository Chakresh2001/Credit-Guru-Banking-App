import {
  Box,
  Heading,
  useColorMode,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Cards } from './components/Cards';


export const UserCreditCard = () => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState(localStorage.getItem("name"));
  const [userCard, setUserCard] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    axios.get("https://creditguru.onrender.com/users").then((res) => {
      setData(res.data)
      console.log(res.data)

      let data = res?.data
      data.map((el,id)=>{
        return (el.name === userName ? setUserCard(el.card) : null);
      })
    });

   console.log(userCard);

  }, [data.length]);

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} minHeight="100vh">
      <Heading as="h1" size="xl" borderBottom={"2px solid gray"} p={5}>
        My Credit Cards
      </Heading>
      
          <Cards {...userCard} data={data} />
     
    </Box>
  )
}