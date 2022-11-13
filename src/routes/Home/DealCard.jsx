import { Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function DealCard(item) {
   return (
      <HStack
         w={{ base: "100%", md: "33%" }}
         py={4}
         px={{ base: 5, md: 2, lg: 5 }}
         bg={"white"}
         justify={"space-between"}
         cursor={"pointer"}
         borderRadius={"lg"}
         boxShadow={"md"}
      >
         <HStack spacing={{ base: 5, md: 2, lg: 6 }}>
            <Image src={item.img} boxSize={{ base: 14, md: 12, lg: 14 }} />
            <VStack align={"stretch"} spacing={1}>
               <Heading
                  textAlign={"left"}
                  fontSize={{ base: "xl", md: "md", lg: "xl" }}
                  fontWeight={500}
               >
                  {item.heading}
               </Heading>
               <Text
                  textAlign={"left"}
                  fontSize={{ base: "sm", md: "xs", lg: "sm" }}
                  color={"green.500"}
                  fontWeight={500}
               >
                  {item.deal}
               </Text>
            </VStack>
         </HStack>
         <Icon
            as={MdOutlineKeyboardArrowRight}
            color={"blackAlpha.500"}
            boxSize={{ base: 7, md: 5 }}
         />
      </HStack>
   );
}

export default DealCard;
