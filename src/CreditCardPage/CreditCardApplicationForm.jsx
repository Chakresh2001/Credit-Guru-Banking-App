import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Select, Stack } from '@chakra-ui/react';

export const CreditCardApplicationForm = () => {

  const divStyles = {
    backgroundImage: `url(${"./images/credit-card-background.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "635px"
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    income: '',
    creditScore: '',
    panCard: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePanCardUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      panCard: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }
    if (!formData.income) {
      errors.income = 'Income is required';
    }
    if (!formData.creditScore) {
      errors.creditScore = 'Credit Score is required';
    }
    if (!formData.panCard) {
      errors.panCard = 'PAN Card is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        income: '',
        creditScore: '',
        panCard: null,
      });
      setFormErrors({});
    }
  };

  return (
    <div style={divStyles}>
      <Container maxW="md" pt="50px" ml="65%" >
    <Box p={6} boxShadow="md" rounded="md" border="5px solid white">
      <form onSubmit={handleSubmit}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <FormControl id="name" isRequired isInvalid={!!formErrors.name}>
              <FormLabel color="#000000">Name</FormLabel>
              <Input type="text" name="name" value={formData.name} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.name}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="email" isRequired isInvalid={!!formErrors.email}>
              <FormLabel color="#000000">Email</FormLabel>
              <Input type="email" name="email" value={formData.email} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="phoneNumber" isRequired isInvalid={!!formErrors.phoneNumber}>
              <FormLabel color="#000000">Phone Number</FormLabel>
              <Input type="text" name="phoneNumber" value={formData.phoneNumber} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.phoneNumber}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="income" isRequired isInvalid={!!formErrors.income}>
              <FormLabel color="#000000">Income</FormLabel>
              <Input type="text" name="income" value={formData.income} border="1.5px dashed white" onChange={handleChange} />
              <FormErrorMessage>{formErrors.income}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl id="creditScore" isRequired isInvalid={!!formErrors.creditScore}>
              <FormLabel color="#000000">Credit Score</FormLabel>
              <Select name="creditScore" value={formData.creditScore} border="1.5px dashed white" onChange={handleChange}>
                <option value="">Select</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </Select>
              <FormErrorMessage>{formErrors.creditScore}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="panCard" isRequired isInvalid={!!formErrors.panCard}>
              <FormLabel color="#000000">PAN Card</FormLabel>
              <Input type="file" name="panCard" accept="image/*" border="1.5px dashed white" onChange={handlePanCardUpload} />
              <FormErrorMessage>{formErrors.panCard}</FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>
        <Stack direction="row" justify="flex-end" mt={6}>
          <Button colorScheme="blue" type="submit" >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
    </Container>
    </div>
  );
};

