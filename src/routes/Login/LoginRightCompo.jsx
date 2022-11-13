import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Text,
    Center,
    Stack,
    Avatar,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { FaFacebookSquare } from "react-icons/fa";
import RightConditionRightCompo from "./RightCompoRightCondition";
import { useUserAuth } from "./Context";
import axios from "axios";
import { v4 } from "uuid";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
function LoginRightCompo() {
    const { setupRecaptcha } = useUserAuth();
    const [phnumber, setphnumber] = useState("+91");
    const [result, setresult] = useState();
    const [bool, setbool] = useState(true);
    const [loading, setloading] = useState(false);
    const [useemail, setuseemail] = useState("");

    const {
        data: { _id, imageURL, firstName, email },
    } = useSelector((store) => store.auth);

    const [formData, setformData] = useState({
        email: "",
        password: "",
        userid: v4(),
        imageURL:
            "https://user-images.githubusercontent.com/40628582/201342233-58862907-4a5e-41a8-9245-ee99734dd4e2.png",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };
    const dispatch = useDispatch();
    const getOtp = async () => {
        try {
            const res = await setupRecaptcha(phnumber);
            setresult(res);
            setphnumber("");
            setbool(!bool)
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        setbool(!bool);
    }, []);
    useEffect(() => {
        dispatch(loginAction());
    }, [formData, useemail]);
    const postUser = async () => {
        const { email, password } = formData;
        if (!email && !password) {
            alert("please enter all the required fields");
        }
        try {
            const res = await axios.post("http://localhost:8080/loginuser", {
                email: email,
                password: password
            });
            const {
                data: { userid },
            } = res;
            localStorage.setItem("email", userid);
            setuseemail(userid);
        } catch (e) {
            alert(`user not found please enter valid email`);
        }
    };
    const handleSubmit = () => {
        postUser();
        setbool(!bool);
    };
    const verifyOtp = async (main) => {
        setloading(true);
        try {
            let data = await result.confirm(main);
            // setloading(false)
            // console.log(data);
            // here OTP data
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogout = async () => {
        try {
            localStorage.removeItem("email");

            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {_id ? (
                <Center w={"90%"} h={"60%"} >
                    <Box

                        height={"100%"}
                        w={"100%"}
                        rounded={"lg"}
                        // p={6}
                        textAlign={"center"}
                    >
                        <Avatar
                            size={["sm", "md", "xl"]}
                            src={imageURL}
                            alt={"Avatar Alt"}
                            // mb={4}
                            pos={"relative"}
                            _after={{
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: "green.300",
                                border: "2px solid white",
                                rounded: "full",
                                pos: "absolute",
                                bottom: 0,
                                right: 3,
                            }}
                        />
                        <Heading fontSize={"2xl"} fontFamily={"body"}>
                            {firstName}
                        </Heading>
                        <Text fontWeight={600} color={"gray.500"} >
                            {email}
                        </Text>
                        <Flex gap={4} >
                            <Button
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                _focus={{
                                    bg: "gray.200",
                                }}
                            >
                                My Cart Items
                            </Button>
                            <Button
                                flex={1}
                                fontSize={"md"}
                                rounded={"full"}
                                bg={"blue.400"}
                                color={"white"}
                                boxShadow={
                                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                }
                                _hover={{
                                    bg: "blue.500",
                                }}
                                _focus={{
                                    bg: "blue.500",
                                }}
                            >
                                Contact
                            </Button>
                            <Button
                                flex={1}
                                fontSize={"md"}
                                rounded={"full"}
                                onClick={handleLogout}
                                bg={"blue.400"}
                                color={"white"}
                                boxShadow={
                                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                }
                                _hover={{
                                    bg: "blue.500",
                                }}
                                _focus={{
                                    bg: "blue.500",
                                }}
                            >
                                Log Out
                            </Button>
                        </Flex>
                    </Box>
                </Center>
            ) : !bool ? (
                <Box w={["300", "420px", "490px", "520px"]}>
                    <Flex
                        direction={"column"}
                        align="start"
                        p={["2", "5", "6", "8"]}
                        gap={"3"}
                    >
                        <Heading size={"md"}>Sign In/Sign Up</Heading>
                        <Text align={"start"}>
                            Sign up or Sign in to access your, special offers health tips and
                            more{" "}
                        </Text>
                        <Text fontSize={"sm"} align={"start"}>
                            EMAIL ID{" "}
                        </Text>
                        <Input
                            type={"text"}
                            name={"email"}
                            onChange={handleChange}
                            placeholder="Enter your Email Id"
                        ></Input>
                        <Input
                            type={"text"}
                            name={"password"}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        ></Input>
                        <Button
                            color={"white"}
                            size={"lg"}
                            width={"100%"}
                            isLoading={loading ? true : false}
                            bg={"#24AEB1"}
                            onClick={handleSubmit}
                        >
                            Login
                        </Button>
                        <Text color={"red"}>If you dont have an account please enter the phone number and proceed to signup</Text>
                        <Text fontSize={"sm"} fontWeight={"bold"}>
                            PHONE NUMBER
                        </Text>

                        <Input
                            type={"text"}
                            onChange={(e) => setphnumber(e.target.value)}
                            value={phnumber}
                            placeholder="Enter your mobile no"
                        />

                        <div id="recaptcha-container" />
                        <Button
                            color={"white"}
                            size={"lg"}
                            width={"100%"}
                            isLoading={loading ? true : false}
                            bg={"#24AEB1"}
                            onClick={getOtp}
                        >
                            USE OTP
                        </Button>
                        <Flex gap={"20"} width={"100%"} justify={"space-between"}>
                            <Button
                                size={"md"}
                                bg={"white"}
                                border={"1px solid grey"}
                                w={"50%"}
                                color={"#767676"}
                                fontWeight={"bold"}
                            >
                                <Image
                                    mr={"2.5"}
                                    h={"6"}
                                    src="https://i.ibb.co/yPYCXhz/googel.png"
                                ></Image>{" "}
                                Google
                            </Button>

                            <Button
                                size={"md"}
                                // onClick={handleGoogleSignIn}
                                bg={"white"}
                                border={"1px solid gray"}
                                w={"50%"}
                                color={"#767676"}
                                fontWeight={"bold"}
                            >
                                <Flex gap={"2"}>
                                    <FaFacebookSquare size={"20"} color={"darkblue"} />
                                    <Text>Facebook</Text>
                                </Flex>
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            ) : (
                <RightConditionRightCompo phnumber={phnumber} verifyOtp={verifyOtp} />
            )}
        </>
    );
}

export default LoginRightCompo;
