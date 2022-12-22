import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  Img,
  Stack,
  Image,
  Button,
  color,
  useToast,
  Spinner,
} from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BigScreen from "./bigscreen";

import MobileView from "./mobileScreen";

import ReviewModal from "./reviewModal";
const mainColor = "rgb(50,174,177)";
// https://medimedcom-backend-production.up.railway.app/
const getData = async (id) => {
  let d = await axios.get(`https://frantic-foal-sweatpants.cyclic.app/products/single/${id}`);


  return d;
};

export default function SingleProduct() {
  const loginUserData = useSelector((store) => store.auth.data);
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const [state, setState] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const [cartBtnState, cartBtnSetState] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const toast = useToast();

  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      config.headers.userid = loginUserData._id;
      
      return config;
    },
    function (error) {
      
      return Promise.reject(error);
    }
  );



  useEffect(() => {
    setState({ ...state, loading: true, error: false, success: false });
    getData(id)
      .then((res) => {
      
        setSingleData({ ...res.data });
        setState({ ...state, loading: false, error: false, success: true });
      })
      .catch((e) => {
        setState({ ...state, loading: false, error: true, success: false });
      });
  }, [id,loginUserData._id]);

  ///add to cart locic front end
  const addToCartHandler = async () => {
    cartBtnSetState({
      ...cartBtnState,
      loading: true,
      error: false,
      success: false,
    });
    try {
      let d = await axios.post("https://frantic-foal-sweatpants.cyclic.app/carts/create", {
        productId: id,
      });
  
      cartBtnSetState({
        ...cartBtnState,
        loading: false,
        error: false,
        success: true,
      });
      toast({
        title: `Congratulation Items added in cart`,
        status: "success",
        isClosable: true,
      });
    } catch (e) {
      console.log(e.message);
      cartBtnSetState({
        ...cartBtnState,
        loading: false,
        error: true,
        success: false,
      });
      toast({
        title: `Something went wrong`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Box m="auto" bg="#f3f6fb">
      <MobileView
        productId={id}
        singleData={singleData}
        addToCartHandler={addToCartHandler}
        state={state}
        cartBtnState={cartBtnState}
      />
      <Box w="95%" m="auto">
        <BigScreen
          productId={id}
          singleData={singleData}
          addToCartHandler={addToCartHandler}
          state={state}
          cartBtnState={cartBtnState}
        />
       
        <Box>
          <Flex
            flexDirection={"column"}
            justifyContent="center"
            bg="white"
            h="200px"
            alignItems={"center"}
          >
            <Box w="90%">
              <Text
                textAlign={"left"}
                fontSize={"20px"}
                fontWeight="bold"
                color={"rgb(118,114,141)"}
              >
                PRODUCT DETAILS
              </Text>
            </Box>
            <Flex
              bg="rgb(243,243,243)"
              justifyContent={"space-between"}
              height="100px"
              alignItems={"center"}
              p="2%"
              w="90%"
            >
              <Text>Country Of Origin</Text>
              <Text>India</Text>
            </Flex>
          </Flex>
          {/* second step end here */}
          <br /> <br />
          <br /> <br />
          {/* third step start here / RATING & REVIEWS */}
          <Flex
            h="350px"
            bg="white"
            w="100%"
            p="2%"
            flexDirection={"column"}
            justifyContent="center"
          >
            <Box h="10%">
              {" "}
              <Text
                textAlign={"left"}
                fontSize={"20px"}
                fontWeight="bold"
                color={"rgb(118,114,141)"}
              >
                RATING & REVIEWS
              </Text>{" "}
            </Box>
            <Flex h="70%">
              <Box
                w="50%"
                backgroundImage={
                  "url(https://user-images.githubusercontent.com/101392872/201063924-c0bec05a-125d-44dd-b8e8-fc7de8bef6ac.png)"
                }
                backgroundRepeat="no-repeat"
                backgroundPosition={"center"}
                backgroundSize="contain"
              ></Box>
              <Flex
                w="50%"
                p={"2%"}
                alignItems={"center"}
                justifyContent="space-between"
                borderLeft={"1px solid gray"}
              >
                {/* <Box>
                <img
                  src="https://www.netmeds.com/assets/gloryweb/icons/rate-icon.png"
                  alt="review logo"
                />
              </Box>
              <Text fontWeight={"bold"}>Rate Product</Text> */}

                <ReviewModal />
              </Flex>
            </Flex>
          </Flex>
          {/* third step end here / RATING & REVIEWS */}
          <br />
          <br />
          <br />
          {/* fourth start here / Disclaimer */}
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent={"center"}
            h={"150px"}
            bg="white"
            p="2%"
          >
            <Text
              fontWeight={"bold"}
              fontSize={["15px", "15px", "25px", "25px", "30px"]}
              color={"rgb(118,114,141)"}
            >
              DISCLAIMER
            </Text>
            <Text fontSize={["10px", "10px", "15px", "15px", "15px"]}>
              The contents of this website are for informational purposes only
              and not intended to be a substitute for professional medical
              advice, diagnosis, or treatment. Please seek the advice of a
              physician or other qualified health provider with any questions
              you may have regarding a medical condition. Do not disregard
              professional medical advice or delay in seeking it because of
              something you have read on this website.
            </Text>
          </Flex>
          <br />
          <br />
          <br />
          {/* fourth step end here / Disclaimer */}
          {/* fifth step START  here / aDD TO CART */}
          <Flex
            w={"100%"}
            h="100px"
            border={`1px solid rgb(50,174,177)`}
            position="sticky"
            bottom={"10px"}
            bg="white"
          >
            <Flex w="65%" alignItems={"center"}>
              <Box w={["120px"]} h={"90%"}>
                <Image w={"100%"} h="100%" src={singleData?.url} />
              </Box>
              <Box>
                <Text
                  color={"rgb(120,116,142)"}
                  fontWeight={"bold"}
                  fontSize={["10px", "10px", "15px", "15px", "15px"]}
                >
                  {singleData?.title}
                </Text>
                <Text
                  color={"rgb(120,116,142)"}
                  fontSize={["10px", "10px", "15px", "15px", "15px"]}
                >
                  {singleData?.mkt}
                </Text>
              </Box>
            </Flex>

            {/* /////////////// */}
            <Flex justifyContent={"space-around"} w="35%" alignItems={"center"}>
              <Box>
                <Text
                  color={"rgb(239,66,129)"}
                  fontWeight="bold"
                  fontSize={["10px", "10px", "15px", "20px", "20px"]}
                >
                  Rs.{singleData?.Fprice}
                </Text>
                {/* <Box fontSize={['10px',"10px","15px","20px","20px"]}  >
                <Text color={"green"}>20% off</Text> M.R.P.:<del>Rs.100.00</del>{" "}
              </Box> */}
              </Box>

              <Button
                bg="rgb(36,174,177)"
                color="white"
                fontSize={["5px", "5px", "15px", "20px", "20px"]}
                maxH={["20px", "20px", "30px", "35px", "40px"]}
                onClick={addToCartHandler}
              >
                ADD TO CART
              </Button>
            </Flex>
          </Flex>
        </Box>
        <br />
        <br />
        <br />
        {/* fifth step END  here / aDD TO CART */}
        {/* ///container end  */}
      </Box>
    </Box>
  );
}
