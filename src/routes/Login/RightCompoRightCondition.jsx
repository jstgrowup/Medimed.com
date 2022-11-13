import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,

    Input,
    PinInput,
    PinInputField,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from 'react'



function RightConditionRightCompo({ phnumber, verifyOtp }) {
    const [otp, setotp] = useState("")
    const [response, setresponse] = useState()
    const [formData, setformData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        imageURL: "https://user-images.githubusercontent.com/40628582/201342233-58862907-4a5e-41a8-9245-ee99734dd4e2.png"
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    }
    const postUser = async () => {
        const { email, firstName, lastName } = formData
        if (!email || !firstName || !lastName) {
            alert("please enter all the required fields")

        }
        try {
            const res = await axios.post("https://medimedcom-backend-production.up.railway.app/postUserViaForm", formData)
            setresponse(res)
        } catch (e) {
            alert(`rightcompo condition failed: ${e.message}`)
        }

    }
    const handleSubmit = () => {
        verifyOtp(otp)
        postUser()

    }
    useEffect(() => {
    }, [response])


    return (
        <>
            <Box
                w={["300", "420px", "490px", "520px"]}
            >
                <Flex
                    direction={"column"}
                    align="start"
                    p={["4", "5", "6", "8"]}
                    gap={"3"}
                >
                    <Heading >Create Account</Heading>
                    <Text fontSize={"sm"} align={"start"}>EMAIL ID </Text>
                    <Input type={"text"} name={"email"} onChange={handleChange} placeholder="Enter your Email Id" ></Input>
                    <Text fontSize={"sm"} >FIRST NAME</Text>
                    <Input type={"text"} name={"firstName"} onChange={handleChange} placeholder="Enter Your First Name" ></Input>
                    <Text fontSize={"sm"}>LAST NAME</Text>
                    <Input type={"text"} name={"lastName"} onChange={handleChange} placeholder="Enter your Last Name" ></Input>
                    <Text fontSize={"sm"}>VERIFYING NUMBER</Text>
                    <Text>{`We have sent 6 digit OTP on ${phnumber}`}</Text>
                    <HStack gap={[2, 3, 5, 6]} >
                        <PinInput otp size={"lg"} placeholder={"."} onChange={setotp}>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />

                        </PinInput>
                    </HStack>

                    <Button
                        onClick={handleSubmit}
                        color={"white"}
                        size={"lg"}
                        width={"100%"}

                        bg={"#24AEB1"}

                    >
                        VERIFY
                    </Button>

                </Flex>
            </Box>

        </>


    )
}

export default RightConditionRightCompo