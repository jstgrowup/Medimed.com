import {
   Box,
   Button,
   Flex,
   Heading,
   Image,
   Text,
   VStack,
} from "@chakra-ui/react";
import { AiFillThunderbolt } from "react-icons/ai";

function MembershipCard() {
   return (
      <Flex
         py={3}
         w={"full"}
         justify={"space-between"}
         align={"center"}
         direction={{ base: "column", md: "row" }}
         borderBottom={"1px solid"}
         borderColor={"blackAlpha.200"}
      >
         <Flex
            gap={{ base: 0, md: 7 }}
            align={"center"}
            direction={{ base: "column", md: "row" }}
         >
            <Image
               src={
                  "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg"
               }
               boxSize={28}
            />
            <VStack align={"stretch"}>
               <Heading
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"xl"}
                  fontWeight={500}
               >
                  Netmeds First Membership
               </Heading>
               <Text
                  align={{ base: "center", md: "left" }}
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight={1.5}
                  color={"blackAlpha.700"}
               >
                  Get special discounts and offers on Netmeds services.
                  <br />
                  Get 2.5% NMS Cash on pre-paid, Medicine orders of ANY value!
               </Text>
            </VStack>
         </Flex>
         <Flex
            gap={{ base: 0, md: 7 }}
            align={"center"}
            direction={{ base: "column", md: "row" }}
         >
            <Button
               variant={"none"}
               color={"red.500"}
               size={{ base: "sm", md: "lg" }}
               fontSize={{ base: "sm", md: "md" }}
               leftIcon={<AiFillThunderbolt size={24} />}
            >
               Starting at ₹299
            </Button>
            <Button
               my={{ base: 4, md: 0 }}
               size={{ base: "sm", md: "lg" }}
               bg={"#32aeb0"}
               color={"white"}
               fontSize={{ base: "sm", md: "md" }}
               boxShadow={"rgb(50, 174, 176, 0.200) 0px 4px 8px 4px"}
               _hover={{
                  bg: "#32aeb0",
               }}
            >
               Explore Plans
            </Button>
         </Flex>
      </Flex>
   );
}

export default MembershipCard;
