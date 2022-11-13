import { HStack, Image, Text, VStack } from "@chakra-ui/react";

function OfferCard(item) {
   return (
      <HStack
         w={{ base: "100%", md: "50%", lg: "33%" }}
         py={3}
         px={{ base: 4, md: 2, lg: 4 }}
         bg={"white"}
         justify={"space-between"}
         cursor={"pointer"}
         borderRadius={"lg"}
         boxShadow={"sm"}
         spacing={4}
      >
         <Image src={item.img} boxSize={9} />
         <VStack
            pl={4}
            align="stretch"
            spacing={0.5}
            borderLeft={"1px solid"}
            borderColor={"blackAlpha.100"}
         >
            <Text fontSize={"xs"} align={"left"} fontWeight={"bold"}>
               {item.heading}
            </Text>
            <Text fontSize={10} align={"left"}>
               {item.description}
            </Text>
         </VStack>
      </HStack>
   );
}

export default OfferCard;
