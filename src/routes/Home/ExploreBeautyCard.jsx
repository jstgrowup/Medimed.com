import { Image, Text, VStack } from "@chakra-ui/react";

function ExploreBeautyCard(item) {
   return (
      <VStack
         w={{ base: "full", md: "20%" }}
         bg={"white"}
         p={3}
         pb={7}
         borderRadius={"lg"}
         cursor={"pointer"}
         boxShadow={"sm"}
      >
         <Image src={item.img} />
         <Text fontWeight={500}>{item.title}</Text>
      </VStack>
   );
}

export default ExploreBeautyCard;
