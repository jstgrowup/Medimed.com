import React, { useState, useEffect } from "react";

import {
  Flex,
  HStack,
  Stack,
  Text,
  Box,
  Button,
  Image,
  Grid,
  Spacer,
  Heading,
  useToast,
} from "@chakra-ui/react";
import HealthConcernCard from "../Home/HealthConcernCard";

import WellnessCarousel from "../../components/WellnessCarousel";
import { Link } from "react-router-dom";
import HeaderComp from "../Home/HeaderComp";
import {
  categoryArr,
  healthConcernsArr,
  popularCategoryArr,
} from "../../../db.json";
import axios from "axios";
import ExploreBeautyCard from "../Home/ExploreBeautyCard";
import { useDispatch, useSelector } from "react-redux";
import { getcartdata } from "../../store/paymentDetails/PaymentActions";

const getData = async () => {

  let data = await axios.get("https://frantic-foal-sweatpants.cyclic.app/products");
  return data;
};
function Wellness() {
  const [data, setData] = useState([]);
  const loginUserData = useSelector((store) => store.auth.data);
  const dispatch=useDispatch()

  const toast = useToast();
  useEffect(() => {

    
    getData()
      .then((res) => {
        setData([...res.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  axios.interceptors.request.use(
    function (config) {
      config.headers.userid = loginUserData._id;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  const addToCartHandler = async (id) => {
    try {
      let d = await axios.post("https://frantic-foal-sweatpants.cyclic.app/carts/create", {
        productId: id,
      });
  
      toast({
        title: `Congratulation Items added in cart`,
        status: "success",
        isClosable: true,
      });
      dispatch(getcartdata(loginUserData._id))
    } catch (e) {
      console.log(e.message);
      toast({
        title: `Something went wrong`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <Box marginBottom={"15px"} bg={"#f3f6fb"}>
      <HeaderComp />
      <Box></Box>

      <HStack
        p={3}
        justify={"center"}
        spacing={{ base: 3, lg: 6 }}
        flexWrap={"wrap"}
        display={{ base: "none", md: "flex" }}
      >
        {categoryArr.map((item) => (
          <Text fontSize={{ base: 11, lg: "sm" }} cursor={"pointer"}>
            {item}
          </Text>
        ))}
      </HStack>

      <Box marginTop={"40px"}>
        {" "}
        <WellnessCarousel />
      </Box>

      {/* POPULAR CATEGORIES */}

      <Box
        bg={"#F3F7FB"}
        display={"flex"}
        pl={10}
        justifyContent={"space-between"}
      >
        <Text fontSize={28} fontWeight={500}>
          {" "}
          Popular Categories
        </Text>
      </Box>
      <Flex
        w={"full"}
        pb={10}
        zIndex={1}
        gap={{ base: 3, lg: 6 }}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
      >
        {popularCategoryArr.map((item) => (
          <ExploreBeautyCard key={item.id} {...item} />
        ))}
      </Flex>

      {/* under 399 */}
      <Box margin={"auto"} bg={"#F3F7FB"} gap={10} p={4}>
        <Box
          bg={"#F3F7FB"}
          display={"flex"}
          pl={10}
          justifyContent={"space-between"}
        >
          <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
            {" "}
            UNDER-399
          </Text>
        </Box>
        <Flex
          flexWrap={"wrap"}
          justify={"space-evenly"}
          width={"100%"}
          gap={"20px"}
          marginTop={"20px"}
        >
          {/* gridTemplateRows={['repeat(2, auto)', 'repeat(2, auto)', 'repeat(1, auto)', 'repeat(1, auto)']} gridTemplateColumns={['repeat(2, 25%)', 'repeat(2, 25%)', 'repeat(3, 25%)', 'repeat(4, 25%)']} */}

          {data
            ?.filter((el) => (el.price <= 399 ? el : null))
            .splice(0, 4)
            .map((el) => (
              <Box key={el._id}>
                <Flex
                  wrap={"wrap"}
                  direction={"column"}
                  minHeight={"400px"}
                  rounded={10}
                  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                  p={4}
                  width={["300px", "250px", "250px", "280px"]}
                  // height={340}
                  bg={"white"}
                >
                  <Link
                    to={`/wellness/${el._id}`}
                    lineHeight={2}
                    height={"80%"}
                  >
                    <Image src={el.url} alt=""/>
                    <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                      {el.title}
                    </Text>
                    <Text color={"#6F7284"} fontSize={13}>
                      {el.mkt}
                    </Text>
                    <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}>
                      Best Price*{" "}
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        fontSize={"16px"}
                        color={"#EF4281"}
                      >
                        Rs.{el.price}
                      </Text>
                    </Text>
                  </Link>

                  <Spacer />
                  <Flex justify={"center"} height={"10%"}>
                    <Button
                      onClick={() => {
                        addToCartHandler(el._id);
                      }}
                      marginTop={"15px"}
                      backgroundColor={"#24AEB1"}
                      colorScheme={"twitter"}
                    >
                      ADD TO CART
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            ))}
        </Flex>
      </Box>

      {/* UPTO 65% OFF */}
      <Box margin={"auto"} bg={"#F3F7FB"} gap={10} p={4}>
        <Box
          bg={"#F3F7FB"}
          display={"flex"}
          pl={10}
          justifyContent={"space-between"}
        >
          <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
            {" "}
            UPTO 65% OFF
          </Text>
        </Box>
        <Flex
          flexWrap={"wrap"}
          justify={"space-evenly"}
          width={"100%"}
          gap={"20px"}
          marginTop={"20px"}
        >
          {data
            ?.filter((el) => (el.off <= "65%" ? el : null))
            .splice(0, 4)
            .map((el) => (
              <Box
                key={el._id}
                wrap={"wrap"}
                direction={"column"}
                minHeight={"400px"}
                rounded={10}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                p={4}
                width={["300px", "250px", "250px", "280px"]}
              
                bg={"white"}
              >
                <Link to={`/wellness/${el._id}`}>
                  <Box lineHeight={2} height={"80%"}>
                    <img src={el.url} alt=""></img>
                    <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                      {el.title}
                    </Text>
                    <Text color={"#6F7284"} fontSize={13}>
                      {el.mkt}
                    </Text>
                    <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}>
                      Best Price*{" "}
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        fontSize={"16px"}
                        color={"#EF4281"}
                      >
                        Rs.{el.price}
                      </Text>
                    </Text>
                  </Box>
                </Link>
                <Spacer />

                <Flex justify={"center"} height={"10%"}>
                  <Button
                    marginTop={"15px"}
                    backgroundColor={"#24AEB1"}
                    colorScheme={"twitter"}
                    onClick={() => {
                      addToCartHandler(el._id);
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Flex>
              </Box>
            ))}
        </Flex>
      </Box>

      {/* EMAMI */}

      <Box margin={"auto"} bg={"#F3F7FB"} gap={10} p={4}>
        <Box
          bg={"#F3F7FB"}
          display={"flex"}
          pl={10}
          justifyContent={"space-between"}
        >
          <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
            {" "}
            UPTO 200
          </Text>
        </Box>

        <Flex
          flexWrap={"wrap"}
          justify={"space-evenly"}
          width={"100%"}
          gap={"20px"}
          marginTop={"20px"}
        >
          {data
            ?.filter((el) => (el.price <= 200 ? el : null))
            .splice(0, 4)
            .map((el) => (
              <Box
                key={el._id}
                wrap={"wrap"}
                direction={"column"}
                minHeight={"400px"}
                rounded={10}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                p={4}
                width={["300px", "250px", "250px", "280px"]}
                //width={260}
                //height={340}
                bg={"white"}
              >
                <Link to={`/wellness/${el._id}`}>
                  <Box lineHeight={2} height={"80%"}>
                    <img src={el.url} alt=""></img>
                    <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                      {el.title}
                    </Text>
                    <Text color={"#6F7284"} fontSize={13}>
                      {el.mkt}
                    </Text>
                    <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}>
                      Best Price*{" "}
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        fontSize={"16px"}
                        color={"#EF4281"}
                      >
                        Rs.{el.price}
                      </Text>
                    </Text>
                  </Box>
                </Link>
                <Spacer />

                <Flex justify={"center"} height={"10%"}>
                  <Button
                    marginTop={"15px"}
                    backgroundColor={"#24AEB1"}
                    colorScheme={"twitter"}
                    onClick={() => {
                      addToCartHandler(el._id);
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Flex>
              </Box>
            ))}
        </Flex>
      </Box>

      {/* AROMA */}

      <Box margin={"auto"} bg={"#F3F7FB"} gap={10} p={4}>
        <Box
          bg={"#F3F7FB"}
          display={"flex"}
          pl={10}
          justifyContent={"space-between"}
        >
          <Text color={"#6F7284"} fontSize={12} fontWeight={"bold"}>
            {" "}
            ABOVE 600
          </Text>
        </Box>
        <Flex
          flexWrap={"wrap"}
          justify={"space-evenly"}
          width={"100%"}
          gap={"20px"}
          marginTop={"20px"}
        >
          {data
            ?.filter((el) => (el.price >= 600 ? el : null))
            .splice(0, 4)
            .map((el) => (
              <Flex
                wrap={"wrap"}
                direction={"column"}
                minHeight={"400px"}
                rounded={10}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                p={4}
                width={["300px", "250px", "250px", "280px"]}
                //width={260}
                //height={340}
                bg={"white"}
              >
                <Link key={el._id} to={`/wellness/${el._id}`}>
                  <Box lineHeight={2} height={"80%"}>
                    <img src={el.url} alt=""></img>
                    <Text fontSize={13} fontWeight={"bold"} pt={3} pl={1}>
                      {el.title}
                    </Text>
                    <Text color={"#6F7284"} fontSize={13}>
                      {el.mkt}
                    </Text>
                    <Text fontWeight={"bold"} color={"#6F7284"} fontSize={14}>
                      Best Price*{" "}
                      <Text
                        as={"span"}
                        fontWeight={"bold"}
                        fontSize={"16px"}
                        color={"#EF4281"}
                      >
                        Rs.{el.price}
                      </Text>
                    </Text>
                  </Box>
                </Link>
                <Flex justify={"center"} height={"10%"}>
                  <Button
                    marginTop={"15px"}
                    backgroundColor={"#24AEB1"}
                    colorScheme={"twitter"}
                    onClick={() => {
                      addToCartHandler(el._id);
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Flex>
              </Flex>
            ))}
        </Flex>
      </Box>

      {/* HEALTH CONCERNS */}

      <Heading
        py={5}
        w={"full"}
        align={"left"}
        fontSize={{ base: "xl", md: "2xl" }}
        fontFamily={"sans-serif"}
      >
        Health Concerns
      </Heading>
      <Flex
        w={"full"}
        pb={7}
        gap={4}
        zIndex={1}
        direction={{ base: "column", md: "row" }}
      >
        {healthConcernsArr.map((item) => (
          <HealthConcernCard key={item.id} {...item} />
        ))}
      </Flex>
    </Box>
  );
}

export default Wellness;
