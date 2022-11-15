import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import LoginLeftCompo from "./LoginLeftCompo";
import LoginRightCompo from "./LoginRightCompo";

function Login() {

   return (
      <Box >
         <Center  p={["2", "3", "10", "14"]} bg={"#f3f6fb"}>
            <SimpleGrid  border={"2px"} bg={"white"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} borderRadius={"3xl"} columns={[1, 1, 1, 2]} >
               <LoginLeftCompo />
               <Center>
                  <LoginRightCompo />
               </Center>
           
            </SimpleGrid>
         </Center>
      </Box>
   );
}

export default Login;
