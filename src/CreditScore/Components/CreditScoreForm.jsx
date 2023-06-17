import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
    Flex,
} from "@chakra-ui/react";
import React, { useReducer } from 'react';
import { CreditScoreModal } from "./CreditScoreModal";
import { useNavigate } from "react-router-dom";


let initialState = {
    name: "", lastName: "", panNo: "", dob: "", mobile: "", email: "", gender: "", employment: "",
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "name": {
            return {
                ...state,
                name: payload,
            }
        }
        case "lastName": {
            return {
                ...state,
                lastName: payload,
            }
        }
        case "pan": {
            return {
                ...state,
                panNo: payload,
            }
        }
        case "dob": {
            return {
                ...state,
                dob: payload,
            }
        }
        case "mobile": {
            return {
                ...state,
                mobile: payload,
            }
        }
        case "email": {
            return {
                ...state,
                email: payload,
            }
        }
        case "gender": {
            return {
                ...state,
                gender: payload,
            }
        }
        case "employment": {
            return {
                ...state,
                employment: payload,
            }
        }
        case "reset": {
            return initialState;
        }
        default:
            return state;
    }
}

export const CreditScoreForm = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
    }


    return <Box>
        <Button boxShadow={"md"} backgroundColor={"#008600"} color={"white"} mt={"20px"} width={"53%"} height={"8.8vh"} fontSize={"2xl"} fontWeight={"bold"} variant={"solid"} _hover={{ backgroundColor: "#276749" }} onClick={() => {
            onOpen()
        }}
        >
            Get my scores
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose} size={"3xl"}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) '
            >
                <ModalContent>
                    <ModalHeader>
                        <Text>Share your details</Text>
                        <Text fontSize={"sm"}>Please provide your information to proceed</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <form>
                        <Flex>
                            <ModalBody>
                                <FormControl isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        placeholder="Enter first name as per PAN"
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        placeholder="Enter last name as per PAN"
                                        name="lastName"
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>PAN</FormLabel>
                                    <Input
                                        placeholder="Enter your 10-character alphanumeric PAN"
                                        name="pan"
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Input type="date" name="dob"
                                        onChange={handleChange} />
                                </FormControl>
                            </ModalBody>
                            <ModalBody>
                                <FormControl isRequired>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <Input
                                        placeholder="Mobile number linked to PAN" name="mobile"
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Email ID</FormLabel>
                                    <Input
                                        placeholder='Enter your personal email ID'
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Gender</FormLabel>
                                    <Select
                                        placeholder="Select Gender"
                                        name='gender'
                                        onChange={handleChange}
                                    >
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Employment</FormLabel>
                                    <Select
                                        placeholder="Select employment type"
                                        name="employment"
                                        onChange={handleChange}
                                    >
                                        <option value="men">Salaried</option>
                                        <option value="women">Self Employed</option>
                                    </Select>
                                </FormControl>
                            </ModalBody>
                        </Flex>
                        <ModalFooter >
                            <CreditScoreModal dispatch={dispatch} state={state}/>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    </Box>
}