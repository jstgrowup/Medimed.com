import { Text } from "@chakra-ui/react";

function ListItem({ children }) {
   return (
      <Text
         fontSize={"sm"}
         letterSpacing={0.4}
         _hover={{
            textDecoration: "none",
            color: "gray",
            cursor: "pointer",
         }}
      >
         {children}
      </Text>
   );
}

export default ListItem;
