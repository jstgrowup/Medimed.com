import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  textDecoration,
} from "@chakra-ui/react";

import React from "react";


function CartCard({ data, handleQty, removeCartHandler }) {


  let { Fprice, date, mkt, off, price, title, url, _id } = data.productId;
  return (
    <Box borderBottom="1px solid gray">
      {data !== undefined && (
        <Grid templateColumns="repeat(7, 1fr)">
          <GridItem colSpan={1}>
            <Center>
              <img width="100%" src={url} alt="" />
            </Center>
          </GridItem>
          <GridItem padding={5} colSpan={3}>
            <Text fontSize={[10, 10, 15, 15, 18]}>{title}</Text>
            <Text fontSize="xs" as="i">
              {mkt}
            </Text>
            <Text
              h={10}
              marginTop={5}
              color="#f50271"
              fontSize={[10, 10, 15, 15, 18]}
            >
              RS {price}{" "}
              <span
                style={{
                  color: "gray",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                {Fprice}
              </span>
            </Text>

            <Text fontSize={[10, 10, 15, 15, 18]} color="gray">
              Delivery between Jul 23 6PM-Jul 24 10PM
            </Text>
          </GridItem>
          <GridItem padding={2} colSpan={3}>
            <Flex
              flexDirection={["column", "column", "row", "row", "row"]}
              gap={2}
              h="full"
              alignItems="flex-end"
            >
              <Button
                fontSize={[10, 10, 15, 15, 18]}
                // disabled={data.data.qty === 1}
                onClick={() => handleQty({ id: data.productId, type: "dec" })}
              >
                -
              </Button>

              <Center fontSize={[10, 10, 20, 20, 20]} fontWeight="bold" w={10}>
                {data.quantity}
              </Center>

              <Button
                fontSize={[10, 10, 15, 15, 18]}
                onClick={() => handleQty({ id: data.productId, type: "inc" })}
              >
                +
              </Button>

              <Button
                onClick={() => removeCartHandler(_id)}
                bg={"red"}
                color="white"
                fontSize={[10, 10, 15, 15, 18]}
              >
                Remove
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default CartCard;
