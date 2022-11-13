import {
   Box,
   Container,
   SimpleGrid,
   Stack,
   Text,
   Flex,
   Image,
   InputGroup,
   Input,
   InputRightAddon,
   HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Medimed from "../../assets/logos/Medimed.com-navbar.png";
import Medimed_logo from "../../assets/logos/Medimed.com-logo-removebg.png";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

let companyArr = [
   "About Medimed",
   "Customers Speak",
   "In the News",
   "Career",
   "Terms and Conditions",
   "Privacy Policy",
   "Fees and Payments Policy",
   "Shipping and Delivery Policy",
   "Return, Refund and Cancellation Policy",
   "Contact",
];

let shoppingArr = [
   "Browse by A-Z",
   "Browse by Manufacturers",
   "Health Articles",
   "Offers / Coupons",
   "FAQs",
];

let socialArr = [
   "Patients Alike",
   "Facebook",
   "Twitter",
   "LinkedIn",
   "Youtube",
   "Refer & Earn",
];

function Footer() {
   const navigate = useNavigate();

   return (
      <Box align={"left"}>
         <Flex
            p={{ base: 10, lg: 7 }}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
            gap={7}
            direction={{ base: "column", lg: "row" }}
            align={"center"}
         >
            <Image
               src={Medimed}
               h={{ base: 14, lg: 20 }}
               onClick={() => navigate("/")}
               cursor={"pointer"}
            />
            <Text
               w={{ base: "100%", lg: "60%" }}
               fontWeight={500}
               color={"blackAlpha.500"}
               fontSize={{ base: "sm", lg: "md" }}
            >
               Medimed.com is one of India’s most trusted pharmacies, dispensing
               quality medicines at reasonable prices to over 7 million happy
               customers – PAN India.
            </Text>
         </Flex>
         <Container
            as={Stack}
            maxW={"auto"}
            py={10}
            px={{ base: 8, md: 10, lg: 20 }}
         >
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={7}>
               <Stack align={"flex-start"}>
                  <ListHeader>Company</ListHeader>
                  {companyArr.map((item) => (
                     <ListItem key={item}>{item}</ListItem>
                  ))}
               </Stack>
               <Stack align={"flex-start"}>
                  <ListHeader>Shopping</ListHeader>
                  {shoppingArr.map((item) => (
                     <ListItem key={item}>{item}</ListItem>
                  ))}
               </Stack>
               <Stack align={"flex-start"}>
                  <ListHeader>Social</ListHeader>
                  {socialArr.map((item) => (
                     <ListItem key={item}>{item}</ListItem>
                  ))}
               </Stack>
               <Stack align={"flex-start"}>
                  <ListHeader>Subscribe to our Newsletter</ListHeader>
                  <ListItem>
                     Get a free subscription to our health and fitness tip and
                     stay tuned to our latest offers
                  </ListItem>
                  <InputGroup
                     w={"91%"}
                     border={"none"}
                     borderRadius={0}
                     borderBottom={"1.5px solid"}
                     borderColor={"blackAlpha.200"}
                  >
                     <Input
                        type="email"
                        placeholder="Enter your email address"
                        px={2}
                        fontSize={"sm"}
                        border={"none"}
                        focusBorderColor={"none"}
                        color={"blackAlpha.700"}
                        _placeholder={{ color: "blackAlpha.500" }}
                     />
                     <InputRightAddon
                        children={<BsArrowRight color={"teal"} />}
                        bg={"white"}
                        border={"none"}
                        px={2}
                        cursor={"pointer"}
                     />
                  </InputGroup>
               </Stack>
            </SimpleGrid>
         </Container>
         <Box py={10}>
            <Flex
               align={"center"}
               _before={{
                  content: '""',
                  borderBottom: "1px solid",
                  borderColor: "blackAlpha.200",
                  flexGrow: 1,
                  mr: 8,
               }}
               _after={{
                  content: '""',
                  borderBottom: "1px solid",
                  borderColor: "blackAlpha.200",
                  flexGrow: 1,
                  ml: 8,
               }}
            >
               <Image
                  src={Medimed_logo}
                  alt="brand-logo"
                  boxSize={"50px"}
                  borderRadius={50}
                  onClick={() => navigate("/")}
                  cursor={"pointer"}
               />
            </Flex>
            <Flex
               direction={{ base: "column", md: "row" }}
               pt={6}
               px={{ base: 4, md: 10, lg: 20 }}
               align={"center"}
               justify={"space-between"}
            >
               <Text fontSize={"sm"} textAlign={"center"}>
                  Copyright© 2022. All Rights Reserved
               </Text>
               <Flex>
                  <FaFacebook
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#4267B2",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
                  <FaTwitter
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#1DA1F2",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
                  <FaLinkedinIn
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#0e76a8",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
                  <FaYoutube
                     fontSize={33}
                     cursor={"pointer"}
                     style={{
                        margin: "0.5rem",
                        color: "#FF0000",
                        background: "whitesmoke",
                        padding: "0.3rem",
                        borderRadius: "50%",
                     }}
                  />
               </Flex>
            </Flex>
         </Box>
      </Box>
   );
}

export default Footer;
