import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const toast = useToast();
  const {
    data: { _id, imageURL, firstName, email },
  } = useSelector((store) => store.auth);
  const logout = () => {
    localStorage.removeItem("lol");
    toast({
      title: "Logout successfull",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    window.location.reload();

    navigate("/login");
  };

  const handleMail = () => {
    window.location.href = "mailto:deysubham999@gmail.com";
  };
  return (
    <Box p={["2", "2", "5", "10"]}>
      <Center h={"60%"}>
        <Box
          height={"100%"}
          w={["90%", "90%", "70%", "50%"]}
          rounded={"lg"}
          textAlign={"center"}
        >
          <Avatar
            size={["sm", "md", "xl"]}
            src={imageURL}
            alt={"Avatar Alt"}
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
          <Text fontWeight={600} color={"gray.500"}>
            {email}
          </Text>
          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              bg={"#32AEB0"}
              size="lg"
              onClick={() => navigate("/cart")}
              flex={1}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "#32AEB0",
              }}
              _focus={{
                bg: "#32AEB0",
              }}
              color={"white"}
              fontSize={"sm"}
              rounded={"full"}
            >
              My Cart
            </Button>

            <Button
              onClick={handleMail}
              size="lg"
              flex={1}
              fontSize={"md"}
              rounded={"full"}
              bg={"#32AEB0"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "#32AEB0",
              }}
              _focus={{
                bg: "#32AEB0",
              }}
            >
              Contact
            </Button>
            <Button
              onClick={logout}
              size="lg"
              flex={1}
              fontSize={"md"}
              rounded={"full"}
              bg={"#32AEB0"}
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
              Logout
            </Button>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}

export default Profile;
