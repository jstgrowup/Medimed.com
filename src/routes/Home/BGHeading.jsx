import { Box, Button, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function BGHeading({ color, height, heading, children }) {
   return (
      <VStack
         minH={200}
         py={{ base: 0, md: 4 }}
         px={{ base: 2, md: 4, lg: 7 }}
         pos={"relative"}
      >
         <Box
            w={"full"}
            h={{ base: height / 2, md: height }}
            pos={"absolute"}
            bg={color}
            zIndex={0}
            top={0}
         ></Box>
         <HStack
            pb={{ base: 0, md: 4 }}
            w={"full"}
            zIndex={1}
            color={"white"}
            justify={"space-between"}
         >
            <Heading
               fontSize={{ base: "xl", md: "2xl" }}
               fontFamily={"sans-serif"}
            >
               {heading}
            </Heading>
            <Button
               p={0}
               fontSize={"sm"}
               variant={"none"}
               rightIcon={
                  <Icon
                     as={MdOutlineKeyboardArrowRight}
                     boxSize={4}
                     mt={0.5}
                     ml={-2}
                  />
               }
            >
               View All
            </Button>
         </HStack>
         {children}
      </VStack>
   );
}

export default BGHeading;
