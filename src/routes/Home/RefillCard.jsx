import {
   Box,
   Button,
   Flex,
   Heading,
   Image,
   ListItem,
   Text,
   UnorderedList,
   VStack,
} from "@chakra-ui/react";

function RefillCard() {
   return (
      <Flex
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
                  "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg"
               }
               boxSize={28}
            />
            <VStack align={"stretch"}>
               <Heading
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"xl"}
                  fontWeight={500}
               >
                  Get medicine refill every month
               </Heading>
               <Text
                  align={{ base: "center", md: "left" }}
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight={1.5}
                  color={"blackAlpha.700"}
               >
                  Subscribe and schedule next deliveries
                  <br />
                  Subscribe for 12 months and get the last month free. *T&C
                  Apply
               </Text>
            </VStack>
         </Flex>
         <Box>
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
               Subscribe
            </Button>
         </Box>
      </Flex>
   );
}

export default RefillCard;
