import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

function EasyOnlineCard() {
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
                  "https://www.netmeds.com/assets/glorymsite/images/icons/new_icons/online_consultation.svg"
               }
            />
            <VStack align={"stretch"}>
               <Heading
                  textAlign={{ base: "center", md: "left" }}
                  fontSize={"xl"}
                  fontWeight={500}
               >
                  Easy Online Doctor Consultations
               </Heading>
               <Text
                  align={{ base: "center", md: "left" }}
                  fontSize={{ base: "xs", md: "sm" }}
                  lineHeight={1.5}
                  color={"blackAlpha.700"}
               >
                  Skip the queue! Speak with a doctor right now
                  <br />
                  More than 25+ specialities to choose from, starting at just
                  ₹149
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
               Learn More
            </Button>
         </Box>
      </Flex>
   );
}

export default EasyOnlineCard;
