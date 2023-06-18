import React, { useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const generateRandomCardNumber = () => {
  let cardNumber = '';
  for (let i = 0; i < 16; i++) {
    cardNumber += Math.floor(Math.random() * 10);
    if ((i + 1) % 4 === 0 && i !== 15) {
      cardNumber += ' ';
    }
  }
  return cardNumber;
};

const CreditCardGenerator = () => {
  const [cardNumber, setCardNumber] = useState('');

  const generateCard = () => {
    const randomCardNumber = generateRandomCardNumber();
    setCardNumber(randomCardNumber);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Random Credit Card Generator
        </Text>
        <Box
          p={6}
          border="1px solid gray"
          borderRadius="lg"
          boxShadow="md"
          width="300px"
          textAlign="center"
        >
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            {cardNumber}
          </Text>
        </Box>
        <Button colorScheme="blue" onClick={generateCard}>
          Generate Card Number
        </Button>
      </VStack>
    </Box>
  );
};

export default CreditCardGenerator;
