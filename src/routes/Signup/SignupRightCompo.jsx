import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  HStack,
  PinInputField,
  PinInput,
  Text,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "../Login/Context";
import { useNavigate } from "react-router-dom";

function SignupRightCompo() {
  const toast = useToast();
  const [spinner, setspinner] = useState(false);
  const { setupRecaptcha } = useUserAuth();
  const [phnumber, setphnumber] = useState("+91");
  const [otp, setotp] = useState("");
  const [useemail, setuseemail] = useState("");
  const dispatch = useDispatch();
  const [result, setresult] = useState();
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    userid: v4(),
    imageURL:
      "https://user-images.githubusercontent.com/40628582/201342233-58862907-4a5e-41a8-9245-ee99734dd4e2.png",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const postUser = async () => {
    const { email, firstName, lastName } = formData;
    if (!email || !firstName || !lastName) {
      alert("please enter all the required fields");
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/postUserViaForm",
        formData
      );
      const {
        data: { userid },
      } = res;
      localStorage.setItem("email", userid);
      setuseemail(userid);
    } catch (e) {
      alert(`rightcompo condition failed: ${e.message}`);
    }
  };
  useEffect(() => {
    dispatch(loginAction());
  }, [useemail]);
  const getOtp = async () => {
    try {
      const res = await setupRecaptcha(phnumber);

      setresult(res);
    } catch (error) {
      alert(error.message);
    }
  };
  const verifyOtp = async (main) => {
    try {
      let data = await result.confirm(main);
      console.log("data:", data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async () => {
    setspinner(true);
    const { email, firstName, lastName } = formData;
    if (!email || !firstName || !lastName) {
      alert("please enter all the required fields");
    } else {
      await getOtp();
      await postUser();
      setspinner(false);
      toast({
        title: "OTP sent",
        description: "We've sent a 6 digit OTP to your registerder number",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleOTP = () => {
    verifyOtp(otp);
    toast({
      title: "OTP verified",
      description: "We've sent a 6 digit OTP to your registerder number",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Box w={["300", "420px", "490px", "520px"]}>
      <Flex
        direction={"column"}
        align="start"
        p={["1", "3", "5", "6"]}
        gap={"2"}
      >
        <Heading>Create Account</Heading>
        <Text fontSize={"sm"} align={"start"}>
          EMAIL ID{" "}
        </Text>
        <Input
          type={"text"}
          name={"email"}
          onChange={handleChange}
          placeholder="Enter your Email Id"
        ></Input>
        <Text fontSize={"sm"}>FIRST NAME</Text>
        <Input
          type={"text"}
          name={"firstName"}
          onChange={handleChange}
          placeholder="Enter Your First Name"
        ></Input>
        <Text fontSize={"sm"}>LAST NAME</Text>
        <Input
          type={"text"}
          name={"lastName"}
          onChange={handleChange}
          placeholder="Enter your Last Name"
        ></Input>
        <Text fontSize={"sm"}>PASSWORD</Text>
        <Input
          type={"text"}
          name={"password"}
          onChange={handleChange}
          placeholder="Enter your password"
        ></Input>
        <Text fontSize={"sm"}>VERIFYING NUMBER</Text>
        <Text>{`We have sent 6 digit OTP on ${phnumber}`}</Text>
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
          colorScheme="blue"
          color={"white"}
          width={"100%"}
          bg={"#24AEB1"}
          _hover={{ backgroundColor: "#24AEB1" }}
          onClick={handleSubmit}
        >
          <Flex justify={"space-around"} gap={"3"}>
            <Text>GET OTP</Text>
            {spinner && <Spinner />}
          </Flex>
        </Button>
        {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Enter OTP</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
        <Flex gap={["2", "3", "4", "6"]}>
          <PinInput otp size={"lg"} placeholder={"."} onChange={setotp}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Flex>
        <Button
          onClick={handleOTP}
          color={"white"}
          width={"100%"}
          bg={"#24AEB1"}
        >
          VERIFY OTP
        </Button>
      </Flex>
    </Box>
  );
}

export default SignupRightCompo;
