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
// import RightConditionRightCompo from "./RightCompoRightCondition";
import { useUserAuth } from "./Context";
import axios from "axios";
import { v4 } from "uuid";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function LoginRightCompo() {
  const [loading, setloading] = useState(false);
  const [useemail, setuseemail] = useState("");
  const navigate = useNavigate()
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

  useEffect(() => {
    dispatch(loginAction());
  }, [formData, useemail]);
  const postUser = async () => {
    const { email, password } = formData;
    if (!email && !password) {
      alert("please enter all the required fields");
    }
    try {
      const res = await axios.post(
        "https://medimed-backend.up.railway.app/loginuser",
        {
          email: email,
          password: password,
        }
      );
      const {
        data: { userid },
      } = res;
      console.log("res:", res);
      localStorage.setItem("email", userid);
      setuseemail(userid);
    } catch (e) {
      console.log(e);
      alert(`user not found please enter valid email`);
    }
  };
  const handleSubmit = () => {
    postUser();
    navigate("/")
  };

  return (
    <Box w={["300", "420px", "490px", "520px"]}>
      <Flex
        direction={"column"}
        align="start"
        p={["2", "5", "6", "8"]}
        gap={"3"}
      >
        <Heading size={"md"}>Sign In/Sign Up</Heading>
        <Text align={"start"}>
          Sign up or Sign in to access your, special offers health tips and more{" "}
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
        <Text color={"red"}>
          If you dont have an account please enter the phone number and proceed
          to signup
        </Text>

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
  );
}

export default LoginRightCompo;
