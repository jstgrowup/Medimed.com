import { Image, Text, VStack } from "@chakra-ui/react";

function HealthConcernCard(item) {
   return (
      <VStack
         py={{ base: 4, lg: 14 }}
         w={{ base: "100%", md: "20%" }}
         bg={"white"}
         borderRadius={"lg"}
         cursor={"pointer"}
         boxShadow={"sm"}
         spacing={10}
      >
         <Image src={item.img} />
         <Text fontWeight={500}>{item.title}</Text>
      </VStack>
   );
}

export default HealthConcernCard;
