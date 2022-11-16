import React from "react";
import { Box, Image } from "@chakra-ui/react";

function SignupLeftCompo() {
  return (
    <Box w={"100%"} h={["70%", "70%", "100%"]}>
      <Image
        h={"100%"}
        w={"100%"}
        borderRadius={"3xl"}
        src={"LoginImage.png"}
      />
    </Box>
  );
}

export default SignupLeftCompo;
