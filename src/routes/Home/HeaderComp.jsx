import { HStack, Image, Text } from "@chakra-ui/react";
import medicine_logo from "../../assets/images/medicine.svg";
import wellness_logo from "../../assets/images/wellness.svg";
import diagnostics_logo from "../../assets/images/diagnostics.svg";
import beauty_logo from "../../assets/images/beauty.svg";
import health_logo from "../../assets/images/health-library.svg";
import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

function HeaderComp() {
   return (
      <HStack
         p={5}
         bg={"#32aeb0"}
         color={"whitesmoke"}
         justify={"center"}
         spacing={{ base: 4, lg: 20 }}
         display={{ base: "none", md: "flex" }}
      >
         <HStack spacing={2} cursor={"pointer"}>
            <Image src={medicine_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Medicine</Text>
            <MdArrowDropDown size={20} style={{ marginTop: "3px" }} />
         </HStack>
         <HStack spacing={2} cursor={"pointer"} as={NavLink} to={"/wellness"}>
            <Image src={wellness_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Wellness</Text>
         </HStack>
         <HStack spacing={2} cursor={"pointer"}>
            <Image src={diagnostics_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Lab Tests</Text>
         </HStack>
         <HStack spacing={2} cursor={"pointer"}>
            <Image src={beauty_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Beauty</Text>
            <MdArrowDropDown size={20} style={{ marginTop: "3px" }} />
         </HStack>
         <HStack spacing={2} cursor={"pointer"}>
            <Image src={health_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Health Corner</Text>
            <MdArrowDropDown size={20} style={{ marginTop: "3px" }} />
         </HStack>
      </HStack>
   );
}

export default HeaderComp;
