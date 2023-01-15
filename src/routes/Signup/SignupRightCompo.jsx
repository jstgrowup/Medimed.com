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
  Center,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { v4 } from "uuid";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useUserAuth } from "../Login/Context";
import { Link, useNavigate } from "react-router-dom";

function SignupRightCompo() {
  const toast = useToast();
  const [useemail, setuseemail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phnumber: "",
    imageURL: `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 10
    )}.jpg`,
  });

  useEffect(() => {
    dispatch(loginAction());
  }, [useemail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const postUser = async () => {
    const { email, firstName, lastName, phnumber } = formData;
    if (!email || !firstName || !lastName || !phnumber) {
      toast({
        title: `Please fill all the credentials`,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
    try {
      await axios.post(
        "https://frantic-foal-sweatpants.cyclic.app/auth/postUserViaForm",
        // "http://localhost:8080/auth/postUserViaForm",

        formData
      );

      toast({
        title: `Signup Successfull Please Login`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login");
    } catch (e) {
   
      if (!e.response.data._message) {
        toast({
          title: `${e.response.data.message}`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
      const {
        response: {
          data: { errors, _message },
        },
      } = e;

      if (errors.email && _message) {
        toast({
          title: `${errors.email.message}`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
      if (errors.phnumber && _message) {
        toast({
          title: `${errors.phnumber.message}`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };
  const handleSubmit = () => {
    postUser();
  };

  return (
    <Box w={["300", "420px", "490px", "520px"]}>
      <Flex
        direction={"column"}
        align="start"
        fontWeight={"medium"}
        p={["4", "5", "6", "8"]}
        gap={"3"}
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

        <Text fontSize={"sm"}>PHONE NUMBER</Text>
        <Input
          type={"number"}
          name={"phnumber"}
          onChange={handleChange}
          placeholder="Enter your Last Name"
        ></Input>
        <Center w={"100%"} fontWeight={"normal"}>
          <Text align={"center"}>
            Already have an Account?{" "}
            <span style={{ color: "blue" }}>
              <Link to={"/login"}> Login</Link>
            </span>
          </Text>
        </Center>
        <Button
          onClick={handleSubmit}
          color={"white"}
          size={"lg"}
          width={"100%"}
          bg={"#24AEB1"}
        >
          Sign up
        </Button>
      </Flex>
    </Box>
  );
}

export default SignupRightCompo;
