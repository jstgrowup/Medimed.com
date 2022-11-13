import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

function BeautyComp() {
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
                  Beauty Products
               </Heading>
               <Text
                  align={"left"}
                  fontSize={{ base: "sm", lg: "md" }}
                  color={"green.400"}
                  fontWeight={500}
               >
                  Save Upto 40% off
               </Text>
            </VStack>

            <Button
               w={"70%"}
               size={"sm"}
               bg={"#32aeb0"}
               color={"white"}
               fontSize={"sm"}
               boxShadow={"rgb(50, 174, 176, 0.200) 0px 4px 8px 4px"}
               _hover={{
                  bg: "#32aeb0",
               }}
            >
               Explore Beauty
            </Button>
         </VStack>
         <Image
            src={
               "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg"
            }
            boxSize={{ base: 36, lg: 40 }}
         />
      </HStack>
   );
}

export default BeautyComp;
