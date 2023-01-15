import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";

import Medimed from "../../assets/logos/Medimed.com-navbar-removebg.png";
import { MdHealthAndSafety, MdShoppingCart } from "react-icons/md";

import { IoChevronDown } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useEffect, useState } from "react";
import axios from "axios";
import { getcartdata } from "../../store/paymentDetails/PaymentActions";
function Navbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [result, setresult] = useState([]);
  const [posi, setposi] = useState("absolute");
  const [text, settext] = useState("");
  const toast = useToast();
  const pay = useSelector((store) => store.paymentState);
  const { data } = pay;

  const {
    data: { firstName, imageURL, _id },
  } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(loginAction());
    dispatch(getcartdata(_id));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("lol");
    toast({
      title: "Logout successfull",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    window.location.reload();
    navigate("/login");
  };
  const getData = async () => {
    const response = await axios.get(
      "https://frantic-foal-sweatpants.cyclic.app/search/get",

      {
        params: {
          title: text,
        },
      }
    );
    const { data } = response;

    setresult(data);
  };
  useEffect(() => {
    if (!text) {
      setresult([]);
    }
    getData();
  }, [text]);
  const handleNavigate = (id) => {
    navigate(`/wellness/${id}`);
    setresult([]);
  };
  return (
    <>
      <Flex
        bg={"#32aeb0"}
        px={{ base: 4, md: 7 }}
        py={{ base: 1, md: 2 }}
        align={"center"}
        justify={"space-between"}
        color={"white"}
        gap={12}
        pos={"sticky"}
        top={0}
        zIndex={27}
      >
        <Image
          src={Medimed}
          w={210}
          cursor={"pointer"}
          onClick={() => navigate("/")}
        />

        <InputGroup
          bg={"white"}
          borderRadius={"2xl"}
          size={"lg"}
          display={{ base: "none", lg: "flex" }}
        >
          <InputLeftAddon children={<InputLeftChild />} bg={"white"} />
          <Input
            onChange={(e) => {
              return settext(e.target.value);
            }}
            type="text"
            placeholder="Search for medicine & wellness products..."
            fontSize={"sm"}
            color={"blackAlpha.700"}
            focusBorderColor={"none"}
            fontWeight={500}
            _placeholder={{
              color: "blackAlpha.300",
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          />
        </InputGroup>

        <HStack display={{ base: "none", md: "flex" }}>
          <Button
            as={NavLink}
            to={"/cart"}
            leftIcon={<MdShoppingCart size={24} />}
            variant={"none"}
          >
            Cart
            <Box
              h={4}
              w={4}
              as={Flex}
              color={"white"}
              bg={"red.400"}
              align={"center"}
              justify={"center"}
              borderRadius={100}
              fontSize={"xs"}
              pos={"absolute"}
              top={1}
              left={7}
            >
              {data?.length ? data.length : 0}
            </Box>
          </Button>
          <Popover trigger="hover" size={"lg"}>
            <PopoverTrigger>
              <Button
                variant={"none"}
                leftIcon={
                  imageURL ? (
                    <Image src={imageURL} boxSize={"9"} borderRadius={"full"} />
                  ) : (
                    <Image
                      boxSize={"9"}
                      src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
                    />
                  )
                }
              >
                {firstName ? firstName : "Sign in / Sign up"}
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent bg={"#32AEB0"} color={"white"}>
                <PopoverBody>
                  {firstName ? (
                    <VStack>
                      <Button
                        variant={"none"}
                        bg={"#24AEB1"}
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </Button>
                      <Button
                        onClick={handleLogout}
                        variant={"none"}
                        bg={"#24AEB1"}
                      >
                        Logout
                      </Button>
                    </VStack>
                  ) : (
                    <VStack>
                      <Button
                        variant={"none"}
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>
                      <Button
                        variant={"none"}
                        onClick={() => navigate("/signup")}
                      >
                        Sign up
                      </Button>
                    </VStack>
                  )}
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </HStack>
        <Button
          display={{ base: "flex", md: "none" }}
          variant={"none"}
          onClick={onOpen}
        >
          <HamburgerIcon boxSize={7} />
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image
                src={
                  "https://raw.githubusercontent.com/iammostak/adhesive-legs-8944/2d3100a8c566459a2318b125206669e5ae3ee42b/src/assets/logos/Medimed.com-navbar.png"
                }
                onClick={() => navigate("/")}
              />
            </DrawerHeader>
            <DrawerBody>
              <Box w={"full"} mb={3}>
                <Button
                  w={"full"}
                  size={"lg"}
                  as={NavLink}
                  to={"/cart"}
                  bg={"#32AEB0"}
                  color={"white"}
                  letterSpacing={1}
                  leftIcon={<MdShoppingCart size={24} />}
                >
                  Cart
                </Button>
              </Box>
              <Box w={"full"} mb={3}>
                <Button
                  w={"full"}
                  size={"lg"}
                  as={NavLink}
                  to={"/wellness"}
                  bg={"#32AEB0"}
                  color={"white"}
                  letterSpacing={1}
                  leftIcon={<MdHealthAndSafety size={24} />}
                >
                  Wellness
                </Button>
              </Box>
              <Box onClick={() => navigate("/profile")}>
                <Button
                  w={"full"}
                  size={"lg"}
                  // as={NavLink}
                  to={"/login"}
                  bg={"#32AEB0"}
                  color={"white"}
                  letterSpacing={1}
                  leftIcon={
                    <Image
                      src={`${imageURL}`}
                      boxSize={"9"}
                      borderRadius={"full"}
                    />
                  }
                  variant={"none"}
                >
                  {firstName ? firstName : "Sign in / Sign up"}
                </Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Center>
        <Box
          top={"16"}
          borderBottomRadius={"lg"}
          color={"black"}
          bg={"white"}
          boxShadow={"dark-lg"}
          zIndex={"77"}
          w={["80%", "70%", "60%"]}
          position={posi}
        >
          {result.map((el) => {
            return (
              <Flex
                key={el._id}
                borderBottomRadius={"lg"}
                _hover={{ backgroundColor: "lightgray" }}
                cursor={"pointer"}
                w={"100%"}
                onClick={() => handleNavigate(el._id)}
                justify={"space-between"}
                align={"center"}
                border={"2px"}
                borderColor={"white"}
                h={"50px"}
              >
                <Image height={"100%"} src={el.url} />
                <Text>{el.title}</Text>
                <Text>{el.price}</Text>
              </Flex>
            );
          })}
        </Box>
      </Center>
    </>
  );
}
export default Navbar;
function InputLeftChild() {
  return (
    <HStack align={"center"}>
      <Text fontSize={"sm"} color={"blackAlpha.500"} fontWeight={500}>
        Deliver to
      </Text>
      <Text
        fontSize={"sm"}
        color={"teal.400"}
        fontWeight={600}
        letterSpacing={2}
        fontFamily="Lato"
      >
        110002
      </Text>
      <IoChevronDown size={14} color={"darkgray"} cursor={"pointer"} />
    </HStack>
  );
}
