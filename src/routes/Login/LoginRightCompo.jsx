import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Center,
  Stack,
  Avatar,
  useToast,
  HStack,
  PinInput,
  PinInputField,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { FaFacebookSquare } from "react-icons/fa";

import { useUserAuth } from "./Context";

import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch } from "react-redux";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginRightCompo() {
  const [otp, setotp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setupRecaptcha } = useUserAuth();

  const [phnumber, setphnumber] = useState("+91");
  const navigate = useNavigate();
  const [result, setresult] = useState();
  const [redisbool, setredisbool] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const getOtp = async () => {
    setloading(true);
    try {
      const res = await setupRecaptcha(phnumber);
      setresult(res);
      setphnumber("");
      setloading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    dispatch(loginAction());
  }, [redisbool]);

  const verifyOtp = async () => {
    setloading(true);

    try {
      let data = await result.confirm(otp);
      const {
        user: { phoneNumber },
      } = data;

      let res = await axios.post(
        "https://frantic-foal-sweatpants.cyclic.app/auth/getViaPhonenumber",
        {
          phnumber: phoneNumber,
        }
      );

      if (res.status === 404) {
        onClose();
        setloading(false);

        toast({
          title: "User not found please create an account",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        navigate("/signup");
      }
      if (res.status === 200) {
        onClose();
        setloading(false);
        const {
          data: { email },
        } = res;
        localStorage.setItem("lol", email);
        setredisbool(!redisbool);
        dispatch(loginAction());
        toast({
          title: "Login successfull",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      toast({
        title: `Wrong OTP`,
        description: "If you dont have an account please proceed to Sign up",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      onClose();
      setloading(false);
    }
  };

  const onSuccess = async (res) => {
    // const { displayName, email, photoUrl } = res.profileObj
    // const [firstName, lastName] = displayName.trim().split(" ");
    // try {
    //   const res = await axios.post("http://localhost:8080/auth/google", {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     imageURL: photoUrl,
    //   });
    //   localStorage.setItem("lol", email);
    //   toast({
    //     title: "Login successfull",
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   dispatch(loginAction());
    //   navigate("/");
    // } catch (error) {
    //   toast({
    //     title: `${error.message}`,
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    // }
  };
  const handleGoogleSignIn = () => {
    toast({
      title: `Feature not available`,
      description:
        "Sorry this Feature is in pipeline you can wait for future updates",
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
  };

  const onsubmit = () => {
    getOtp().then(() => onOpen());
  };
  return (
    <>
      <Box w={["300", "420px", "490px", "520px"]}>
        <Flex
          direction={"column"}
          align="start"
          p={["2", "5", "6", "8"]}
          gap={"4"}
        >
          <Heading size={"md"}>Login</Heading>
          <Text align={"start"}>
            Sign up or Sign in to access your, special offers health tips and
            more{" "}
          </Text>

          <Text fontSize={"sm"} fontWeight={"bold"}>
            PHONE NUMBER
          </Text>
          {/* <InputGroup>
              <InputLeftAddon children='+91' defaultValue={"+91"} />
          <Input type={"text"} onChange={(e) => setphnumber(e.target.value)} value={phnumber} placeholder="Enter your mobile no" />
          </InputGroup> */}
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
            _hover={{ backgroundColor: "#24AEB1" }}
            onClick={onsubmit}
          >
            Login
          </Button>
          <Center w={"100%"} fontWeight={"medium"}>
            <Text align={"center"}>
              Dont have an Account?{" "}
              <span style={{ color: "blue" }}>
                <Link to={"/signup"}> Create an Account</Link>
              </span>
            </Text>
          </Center>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Please enter 6 digit OTP which was sent to your registered phone
                number
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  fontSize={"lg"}
                >{`We have sent 6 digit OTP on ${phnumber}`}</Text>
                <HStack gap={[2, 3, 5, 6]}>
                  <PinInput otp size={"lg"} placeholder={"."} onChange={setotp}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </ModalBody>

              <ModalFooter>
                <Button
                  color={"white"}
                  size={"lg"}
                  width={"100%"}
                  isLoading={loading ? true : false}
                  bg={"#24AEB1"}
                  _hover={{ backgroundColor: "#24AEB1" }}
                  onClick={() => verifyOtp()}
                >
                  Login
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Flex gap={"20"} width={"100%"} justify={"space-between"}>
            <Button
              onClick={handleGoogleSignIn}
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
              ></Image>
              <Text>Login</Text>
            </Button>

            <Button
              onClick={handleGoogleSignIn}
              size={"md"}
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
    </>
  );
}

export default LoginRightCompo;
