import { Box, Button, Divider, Flex, Text, Center, Grid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react"
import { StarIcon, CheckIcon } from "@chakra-ui/icons";

export const ProductCard = ({ data }) => {
    console.log(data.IBTapr)
    return <Box display="flex" width="70%" margin="auto" borderRadius="8px" padding="30px" boxShadow={"lg"} border={"1px solid #E2E8F0"} mt={"15px"}>
        <div style={{ width: "25%" }}>
            <img src={data.cardImg} alt={data.cardName} width={"85%"} />
            <Button backgroundColor={"#38A169"} color={"white"} width={"85%"} mt={"8px"}>Continue</Button>
        </div>
        <div style={{ width: "75%" }}>
            <Text as={"b"} fontSize={"lg"}>{data.cardName}</Text>
            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < 4 ? '#38A169' : 'gray.300'}
                        />
                    ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {data.reviews} reviews
                </Box>
            </Box>
            <Flex justifyContent={"space-evenly"} borderTop={"1px solid #CBD5E0"} borderBottom={"1px solid #CBD5E0"} my={"40px"}>
                {data.IBTapr.length > 0 ? <Box borderRight={"1px solid #CBD5E0"} padding={"15px"}>
                    <Text as={"b"} fontSize={"md"} color={"gray.600"}>
                        Intro balancce transfer APR
                    </Text>
                    <Text fontSize={"sm"} mt={"20px"}>
                        {data.IBTapr}
                    </Text>
                </Box> : null}
                <Box width={"30%"} borderRight={"1px solid #CBD5E0"} padding={"15px"}><Text as={"b"} fontSize={"md"} color={"gray.600"}>
                    Regular balance transfer APR
                </Text>
                    <Text fontSize={"sm"} mt={"20px"}>
                        {data.RBTapr}
                    </Text></Box>
                <Box borderRight={"1px solid #CBD5E0"} width={"30%"} padding={"15px"}><Text as={"b"} fontSize={"md"} color={"gray.600"}>
                    Balancce transfer fee
                </Text>
                    <Text fontSize={"sm"} mt={"20px"}>
                        {data.BTF}
                    </Text></Box>
                <Box width={"30%"} p={"15px"}><Text as={"b"} fontSize={"md"} color={"gray.600"}>
                    Annual fee
                </Text>
                    <Text fontSize={"sm"} mt={"20px"}>
                        {data.AF}
                    </Text></Box>
            </Flex>
            {data.details.map((el, i) => {
                return <div>
                    {i < 2 ? <Flex key={i} mt={"15px"} justify={"space-between"}><CheckIcon color={"#38A169"} width={"3%"} mt={"5px"} />
                        <Text width={"96%"}>{el.desc}</Text> </Flex> : <Accordion mt={"10px"} allowMultiple>
                        <AccordionItem border={"none"}>
                            {({ isExpanded }) => (
                                <>
                                    <AccordionPanel>
                                        <Flex justify={"space-between"}><CheckIcon color={"#38A169"} width={"3%"} mt={"5px"} />
                                            <Text width={"96%"}>{el.desc}</Text> </Flex></AccordionPanel>
                                    <h2>
                                        <AccordionButton width={"21%"} justifyContent={"center"}>
                                            {isExpanded ? <Box as="span" color={"#38A169"}>
                                                Show less
                                            </Box> : <Box as="span" color={"#38A169"}>
                                                Show more
                                            </Box>}

                                            <AccordionIcon color={"#38A169"} />
                                        </AccordionButton>
                                    </h2>
                                </>)}
                        </AccordionItem>
                    </Accordion>
                    }
                </div>
            })}
        </div>
    </Box>
}