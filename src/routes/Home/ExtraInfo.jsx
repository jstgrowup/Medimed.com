import { Text } from "@chakra-ui/react";

function ExtraInfo(item) {
   return (
      <Text align={"left"} color={"blackAlpha.700"} fontSize={"sm"}>
         <span style={{ fontWeight: 500 }}>{item.title}</span>{" "}
         {item.description}
      </Text>
   );
}

export default ExtraInfo;
