import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SignupLeftCompo from "./SignupLeftCompo";
import SignupRightCompo from "./SignupRightCompo";


function Signup() {

   return (
      
         <Center p={["2", "3", "20", "28"]} bg={"#f3f6fb"}>
            <SimpleGrid  bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} borderRadius={"3xl"} columns={[1, 1, 1, 2]} >
               <SignupLeftCompo />
               <Center>
                  <SignupRightCompo />
               </Center>
               
            </SimpleGrid>
         </Center>
      
   );
}

export default Signup;
