import { HStack, Image, Text } from "@chakra-ui/react";
import wellness_logo from "../../assets/images/wellness.svg";
import diagnostics_logo from "../../assets/images/diagnostics.svg";
import { NavLink } from "react-router-dom";
import {
   medicinePopoverArr,
   beautyPopoverArr,
   healthPopoverArr,
} from "../../../db.json";
import DropDown from "./DropDown";

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
         <DropDown data={medicinePopoverArr} imgUrl="medicine">
            Medicine
         </DropDown>
         <HStack spacing={2} cursor={"pointer"} as={NavLink} to={"/wellness"}>
            <Image src={wellness_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Wellness</Text>
         </HStack>
         <HStack spacing={2} cursor={"pointer"}>
            <Image src={diagnostics_logo} boxSize={{ md: 30, lg: 39 }} />
            <Text>Lab Tests</Text>
         </HStack>
         <DropDown data={beautyPopoverArr} imgUrl="beauty">
            Beauty
         </DropDown>
         <DropDown data={healthPopoverArr} imgUrl="health">
            Health Corner
         </DropDown>
      </HStack>
   );
}

export default HeaderComp;
