import {
   Box,
   Button,
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
   Text,
   useDisclosure,
} from "@chakra-ui/react";
import Medimed from "../../assets/logos/Medimed.com-navbar-removebg.png";
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { loginAction } from "../../store/MainAuth/AuthActions";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
   const navigate = useNavigate();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const dispatch = useDispatch();
   const [name, setname] = useState("dsafd")
   const { data: { firstName, imageURL } } = useSelector((store) => store.auth)
   const getData = async () => {
      const res = await axios.get("https://medimedcom-backend-production.up.railway.app/redisdata")
      const { data: { email } } = res
      console.log('email:', email)
      localStorage.setItem("email", email)
      try {
         if (!email) {
            const data = localStorage.getItem("email")
            const res = await axios.post("https://medimedcom-backend-production.up.railway.app/getuser", { email: data })
            console.log('res:', res)
            const { firstName } = res.data[0]
            setname(firstName)
         }
      } catch (e) {
         console.log('e:', e)

      }
   }
   useEffect(() => {
      dispatch(loginAction())
      // setname(firstName)
      getData()
   }, [])

   return (
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
                  0
               </Box>
            </Button>
            <Button
               as={NavLink}
               to={"/login"}
               leftIcon={imageURL ? <Image src={imageURL} borderRadius={"full"} boxSize={"7"} /> : <FaUserCircle size={22} />}
               variant={"none"}
            >
               {!firstName ? "Sign in / Sign up" : firstName}
            </Button>
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
                  />
               </DrawerHeader>
               <DrawerBody>
                  <Box w={"full"} mb={4}>
                     <Button
                        w={"full"}
                        size={"lg"}
                        as={NavLink}
                        to={"/wellness"}
                        bg={"#32AEB0"}
                        color={"white"}
                        letterSpacing={1}
                     >
                        Wellness
                     </Button>
                  </Box>
                  <Box w={"full"} mb={4}>
                     <Button
                        w={"full"}
                        size={"lg"}
                        as={NavLink}
                        to={"/login"}
                        bg={"#32AEB0"}
                        color={"white"}
                        letterSpacing={1}
                     >
                        Sign in / Sign up
                     </Button>
                  </Box>
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </Flex>
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
