import {
   Button,
   Heading,
   HStack,
   Icon,
   Image,
   Text,
   VStack,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function PreviousOrder() {
   return (
      <HStack
         w={{ base: "100%", md: "50%" }}
         justify={"space-between"}
         cursor={"pointer"}
      >
         <VStack align={"stretch"} spacing={{ base: 4, lg: 7 }}>
            <VStack align={"stretch"}>
               <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontFamily={"sans-serif"}
                  align={"left"}
               >
                  Previous Order
               </Heading>
               <Text
                  align={"left"}
                  fontSize={{ base: "sm", lg: "md" }}
                  color={"blackAlpha.700"}
               >
                  Your previously ordered products
               </Text>
            </VStack>
            <HStack spacing={4} cursor={"pointer"}>
               <Text align={"left"} fontWeight={500} color={"teal.400"}>
                  View Orders
               </Text>
               <Button
                  h={8}
                  w={8}
                  size={"sm"}
                  bg={"#32aeb0"}
                  borderRadius={50}
                  color={"white"}
                  _hover={{
                     bg: "#32aeb0",
                  }}
               >
                  <Icon as={MdOutlineKeyboardArrowRight} />
               </Button>
            </HStack>
         </VStack>
         <Image
            src={
               "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
            }
            boxSize={{ base: 28, lg: 36 }}
         />
      </HStack>
   );
}

export default PreviousOrder;
