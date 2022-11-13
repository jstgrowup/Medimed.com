import { Image, Text, VStack } from "@chakra-ui/react";

function HealthLibrary(item) {
   return (
      <VStack
         bg={"white"}
         borderRadius={"lg"}
         boxShadow={"sm"}
         cursor={"pointer"}
      >
         <Image
            src={item.img}
            borderTopLeftRadius={"lg"}
            borderTopRightRadius={"lg"}
         />
         <Text
            p={4}
            pt={2}
            align={"left"}
            fontWeight={500}
            fontSize={{ base: "sm", md: "xs", lg: "sm" }}
         >
            {item.description}
         </Text>
      </VStack>
   );
}

export default HealthLibrary;
