import {
  Box,
  Flex,
  Text,
  Input,
  Img,
  Button,
  useToast,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFillHeartFill, BsArrowRightCircleFill } from "react-icons/bs";
import MainImg from "./carousel/MainImg";

const mainColor = "rgb(50,174,177)";

export default function MobileView({
  singleData,
  addToCartHandler,
  state,
  cartBtnState,
}) {
  const [pincheck, setPinCheck] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const [pintext, setPintext] = useState("");
  const toast = useToast();
  let dileveryDate = new Date().toUTCString().split(" ");
  let day = +dileveryDate[1] + 1;
  let month = dileveryDate[2];
  let year = dileveryDate[3];

  return (
    <Box w="90%" m="auto">
      <Skeleton
        isLoaded={!state.loading}
        w="50%"
        bg="white"
        display={["unset", "unset", "none", "none", "none"]}
      >
        <MainImg url={singleData?.url} off={singleData?.off} />
      </Skeleton>
      <br />

      <Skeleton
        isLoaded={!state.loading}
        w="100%"
        bg="white"
        p="2%"
        display={["unset", "unset", "none", "none", "none"]}
      >
        {/* 1st right */}
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start  "}
          borderBottom="1px solid gray "
        >
          {/* //  Product Title */}
          <Text fontSize={"15px"} fontWeight="bold">
            {singleData?.title}
          </Text>
          <Flex gap={"10px"} w="100%">
            {/* <Flex justifyContent={"center"} alignItems="center" > */}

            {/* </Flex> */}
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              bg={"rgb(246,246,247)"}
              minH={["25px"]}
              fontSize={"10px"}
            >
              Personal Care
            </Flex>
          </Flex>
          <br />
          <Box>
            <BsFillHeartFill color={"rgb(199,200,208)"} />
          </Box>
          <br />
        </Flex>
        <br />

        {/* 2nd */}
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start  "}
          borderBottom="1px solid gray "
          lineHeight={2}
        >
          <Text
            color={"rgb(239,66,129)"}
            fontWeight="bold"
            fontSize={["12px", "12px", "15px", "20px", "20px"]}
          >
            Best Price* ₹ {singleData?.Fprice}
          </Text>
          <Flex
            gap="2%"
            w={"100%"}
            fontSize={["10px", "10px", "15px", "20px", "20px"]}
          >
            M.R.P.:<del>Rs.{singleData?.price}</del>{" "}
          </Flex>

          <Text
            fontSize={["12px", "12px", "15px", "20px", "20px"]}
            color={"green"}
          >
            {singleData?.off} (Inclusive of all taxes)
          </Text>
          <Text fontSize={["12px", "12px", "15px", "20px", "20px"]}>
            * {singleData?.mkt}
          </Text>
          <Text fontSize={["12px", "12px", "15px", "20px", "20px"]}>
            * Country of Origin: India
          </Text>
          <Text fontSize={["12px", "12px", "15px", "20px", "20px"]}>
            * Delivery charges if applicable will be applied at checkout
          </Text>
          <br />
          <Button
            fontSize={["10px", "10px", "15px", "20px", "20px"]}
            bg={"rgb(36,174,177)"}
            color="white"
            onClick={addToCartHandler}
          >
            Add to Cart
          </Button>
          <br />
        </Flex>

        <br />
        {/* 3rd */}
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start  "}
          lineHeight={1}
        >
          <Text fontSize={["12px", "12px", "15px", "20px", "20px"]}>
            Check Availability
          </Text>
          <br />
          <Flex
            onChange={(e) => setPintext(e.target.value)}
            borderBottom="5px solid rgb(36,174,177)"
            justifyContent={"space-between"}
            alignItems="center"
            gap="2px"
          >
            <Text
              fontSize={["15px", "15px", "20px", "25px", "25px"]}
              color={"rgb(36,174,177)"}
            >
              PINCODE:
            </Text>
            <Input
              type={"number"}
              placeholder="enter pin"
              color="rgb(36,174,177)"
              fontSize={["12px", "12px", "15px", "20px", "20px"]}
              border={"none"}
              variant="unstyled"
            />
            <BsArrowRightCircleFill
              cursor={"pointer"}
              color="rgb(36,174,177)"
              fontSize={"30px"}
              onClick={() => {
                if (pintext != "") {
                  setSpiner(true);
                  setTimeout(() => {
                    setSpiner(false);
                    setPinCheck(true);
                  }, 2000);
                } else {
                  toast({
                    title: `Please enter pinCode`,
                    status: "info",
                    isClosable: true,
                  });
                }
              }}
            />
          </Flex>
          <br />
          {spiner ? <Spinner color="red.500" /> : null}
          {pincheck ? (
            <Text fontWeight={"bold"}>
              Expected Delivery {day + "-" + month + "-" + year}
            </Text>
          ) : null}
          <br />
          <Text
            color={"rgb(111,115,136)"}
            fontSize={["20px", "20px", "25px", "30px", "30px"]}
          >
            OFFERS APPLICABLE
          </Text>
          <br />
          <Flex
            justifyContent={"space-between"}
            w="100%"
            bg="rgb(243,243,243)"
            borderRadius={"2rem"}
            p="1%"
            alignItems={"center"}
          >
            <Flex gap="1%" alignItems={"center"} w="60%">
              <Box>
                {" "}
                <Img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAqADIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMFBAIH/8QAKxAAAQMDAQcEAgMAAAAAAAAAAQACAwQFERITITFBUWFxBiIykRShIzNC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgMABP/EACURAAIBAgUDBQAAAAAAAAAAAAABAgMREhMhIjEUQVEjgZGx4f/aAAwDAQACEQMRAD8A9pha0u3gHcnFjAMlrQB2SoPmfCg3WWe7XsWmkrnQ07IS6d0IydWcaSeW7H2lFXJVamWuLt8Gif1PZ2NOweamUO0iKKMlzj2yMFEHqezSNYJZDBKTpMckRy098DC2UUVroZIaGB1O2ojZhrSRtMcfO/JK7rqKhr2T0szY9pIwa9ONYGdx68R+ktngl67V1JX8W/TZoYf8t+kiRga7AG5Q7XNLab261Vda6WB8QNO6bjqzjSCr0/zHhGUbFaVTMXFmuReB0CEIRKjIPmfCh+kw0Vl52P8AT+V7SR7s7857cMK5B8z4UG6Qy2q+Nu1JRPlgdC5tQIeJOc5I+vpOGqaOavtlGp2T+9BV1tj6WvZNFI2V01UJ4acRjaOkA4auTBxPZFquT6S4ugmibI6epMMs5kG0fIBx08mDgFco62hrmwVUTojJIz+PVgPA5jry/S4rJbXQvmrpm04qI26nOAbtOmOvQJYr6NEspJ5kJWXJM9WY/Ns+1xsfyfdpPvJ3Yx245V2f5jwoFqinu18N2q6J0NOyENgbMcnVnOoDluz9q/P8x4RnpZFaG6UqnZvT2FoQhA6TuEgO3nG5O1NPMfazIWMTZ/S9nka8xRGCRx1CSOQ5aewJwEQ+mLQwNM0ZqJdRc6WWQlzyeuNxVJCWOXkh01G98K+DSHMAwC0AJMjtTsjguEIlwQhCxj//2Q==" />
              </Box>
              <Flex
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent="center"
              >
                <Text fontSize={["12px", "12px", "15px", "20px", "20px"]}>
                  Default Discount
                </Text>
                <Text
                  color={"green"}
                  fontWeight="bold"
                  fontSize={["10px", "10px", "12px", "15px", "15px"]}
                >
                  You get {singleData?.off} OFF on this product
                </Text>
              </Flex>
            </Flex>

            <Flex w="40%">
              <Text
                fontSize={["10px", "12px", "15px", "20px", "20px"]}
                color="rgb(239,155,189)"
              >
                Offer Appiled
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Skeleton>
    </Box>
  );
}
