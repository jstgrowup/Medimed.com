import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import PaymentDetails from "./paymentDetails/PaymentDetails";
const mainColor = "rgb(50,174,177)";
const getCartData = async (id) => {
  // https://medimedcom-backend-production.up.railway.app/products
  let data = await axios.get(
    "https://medimedcom-backend-production.up.railway.app/carts",
    {
      headers: { userid: id },
    }
  );
  return data;
};
function Cart() {
  const userData = useSelector((store) => store.auth);
  const [cartData, setCartData] = useState([]);
  const toast = useToast();
  const {
    data: { _id },
  } = userData;
  const [cartState, setCartState] = useState({
    loading: false,
    error: false,
    success: false,
  });

  const TotalPrice = cartData?.reduce(
    (acc, el) => acc + Number(el.productId.price) * el.quantity,
    0
  );
  const finalePrice = TotalPrice.toFixed();
  const FullPrice = cartData.reduce(
    (acc, el) => acc + Number(el.productId.Fprice) * el.quantity,
    0
  );

  useEffect(() => {
    getCartData(_id)
      .then((res) => {
        setCartData([...res.data]);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [_id]);

  const fullMrp = FullPrice.toFixed(2);
  const handleQty = async ({ id, type }) => {
    setCartState({ ...cartState, loading: true, error: false, success: false });
    try {
      // let d=await axios.post("https://medimedcom-backend-production.up.railway.app/carts/update",{
      let d = await axios.post(
        "https://medimedcom-backend-production.up.railway.app/carts/update",
        {
          type: type,
          productId: id._id,
        }
      );
    } catch (e) {
      console.log(e);
      setCartState({
        ...cartState,
        loading: false,
        error: true,
        success: false,
      });
    }
    getCartData(_id)
      .then((res) => {
        setCartData([...res.data]);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setCartState({ ...cartState, loading: false, error: false, success: true });
  };
  const removeCartHandler = async (id) => {
    setCartState({ ...cartState, loading: true, error: false, success: false });
    try {
      await axios.post(
        "https://medimedcom-backend-production.up.railway.app/carts/remove",
        {
          productId: id,
        }
      );
      getCartData(_id)
        .then((res) => {
          setCartData([...res.data]);
          // console.log(res.data);
        })
        .catch((e) => {
          // console.log(e);
        });
      toast({
        title: `item removed succesfully`,
        status: "info",
        isClosable: true,
      });
      setCartState({
        ...cartState,
        loading: false,
        error: false,
        success: true,
      });
    } catch (e) {
      toast({
        title: `error is ${e.message}`,
        status: "info",
        isClosable: true,
      });
      setCartState({
        ...cartState,
        loading: false,
        error: true,
        success: false,
      });
    }
  };
  useEffect(() => {
    setCartState({ ...cartState, loading: true, success: false, error: false });
    getCartData()
      .then((res) => {
        setCartData([...res.data]);
        // console.log(res.data);
        setCartState({
          ...cartState,
          loading: false,
          success: true,
          error: false,
        });
      })
      .catch((e) => {
        console.log(e);
        setCartState({
          ...cartState,
          loading: false,
          success: false,
          error: true,
        });
      });
  }, []);
  // for if empty cart
  if (cartData.length === 0) {
    return (
      <Flex h="350px" flexDirection={"column"} alignItems="center">
        <Box
          h={"300px"}
          w={"100%"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition="center"
          backgroundSize={"contain"}
          backgroundImage={
            "url(https://user-images.githubusercontent.com/101392872/201416025-b7d96214-f2e4-43db-9a66-ae4002d5a793.png)"
          }
        ></Box>
        <br />
        <br />
        <Link to="/">
          <Button bg={mainColor} color="white" colorScheme={"none"}>
            Back To Home page
          </Button>
        </Link>
      </Flex>
    );
  }
  //else part
  return (
    <Box
      display={["blok", "blok", "blok", "flex", "flex"]}
      gap={8}
      w="90%"
      margin="auto"
      marginTop={10}
    >
      {cartData && (
        <PaymentDetails
          price={fullMrp}
          total={finalePrice}
          cartState={cartState}
        />
      )}
      <Skeleton isLoaded={!cartState.loading} w="100%">
        <Heading marginBottom={10}>Order Summary</Heading>
        <Text>PRODUCTS</Text>
        {cartData.length !== 0 ? (
          <Box>
            {cartData?.map((item) => (
              <CartCard
                key={item._id}
                data={item}
                handleQty={handleQty}
                removeCartHandler={removeCartHandler}
              />
            ))}
          </Box>
        ) : null}
      </Skeleton>
    </Box>
  );
}
export default Cart;
