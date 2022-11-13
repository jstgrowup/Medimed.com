import {
   HStack,
   Image,
   Popover,
   PopoverContent,
   PopoverTrigger,
   StackDivider,
   Text,
   VStack,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import medicine_logo from "../../assets/images/medicine.svg";
import beauty_logo from "../../assets/images/beauty.svg";
import health_logo from "../../assets/images/health-library.svg";
function DropDown({ children, data, imgUrl }) {
   return (
      <Popover trigger={"hover"} placement={"bottom"}>
         <PopoverTrigger>
            <HStack spacing={2} cursor={"pointer"}>
               <Image
                  src={
                     imgUrl === "medicine"
                        ? medicine_logo
                        : imgUrl === "beauty"
                        ? beauty_logo
                        : health_logo
                  }
                  boxSize={{ md: 30, lg: 39 }}
               />
               <Text>{children}</Text>
               <MdArrowDropDown size={20} style={{ marginTop: "3px" }} />
            </HStack>
         </PopoverTrigger>
         <PopoverContent w={250}>
            <VStack
               py={1}
               px={2}
               align={"stretch"}
               color={"blackAlpha.800"}
               divider={<StackDivider borderColor="gray.200" />}
            >
               {data.map((item) => (
                  <Text
                     key={item.id}
                     p={2}
                     as={NavLink}
                     to={item.route}
                     fontSize={"sm"}
                     align={"left"}
                     cursor={"pointer"}
                     letterSpacing={1}
                     _hover={{ bg: "teal.100" }}
                  >
                     {item.title}
                  </Text>
               ))}
            </VStack>
         </PopoverContent>
      </Popover>
   );
}

export default DropDown;
