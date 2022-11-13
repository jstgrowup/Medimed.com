import { Image, Text, VStack } from "@chakra-ui/react";

function TopBrandCard(item) {
   return (
      <VStack
         py={{ base: 4, lg: 10 }}
         w={{ base: "100%", md: "20%" }}
         bg={"white"}
         borderRadius={"lg"}
         cursor={"pointer"}
         boxShadow={"sm"}
      >
         <Image src={item.img} />
         <Text fontWeight={500}>{item.brand}</Text>
         <Text color={"green.500"}>{item.deal}</Text>
      </VStack>
   );
}

export default TopBrandCard;
