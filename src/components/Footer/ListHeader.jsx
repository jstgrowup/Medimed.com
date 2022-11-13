import { Text } from "@chakra-ui/react";

function ListHeader({ children }) {
   return (
      <Text
         fontWeight={"500"}
         fontSize={"md"}
         mb={2}
         cursor={"pointer"}
         letterSpacing={1}
      >
         {children}
      </Text>
   );
}

export default ListHeader;
