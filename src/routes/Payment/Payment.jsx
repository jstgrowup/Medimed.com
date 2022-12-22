import {
  Box,
  Text,
  Image,
  Button,
  Checkbox,
  Input,
  Select,
  useDisclosure,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import useRazorpay from "react-razorpay";
import PayButton from "./PayButton";
import { getpaymentdetails } from "../../store/paymentDetails/PaymentActions";

const Payment = () => {
  const Razorpay = useRazorpay();
  const [discountAmount, setdiscountAmount] = useState("");
  const prop = useSelector((store) => store.auth);
  const pay = useSelector((store) => store.paymentState);
  const [flag, setFlag] = useState(false);
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();
  const {
    data: { _id },
  } = prop;

  useEffect(() => {
    dispatch(getpaymentdetails(_id));

  }, [_id]);

  const toast = useToast();
  const navigate = useNavigate();
  const handleAmount = async (rupess) => {
    const { data } = await axios.post("https://frantic-foal-sweatpants.cyclic.app/payment/order", {
      amount: rupess,
    });

    const options = {
      key: "rzp_test_fKqaOka3L8s0hG", //Enter the Key ID generated from the Dashboard
      amount: rupess * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      description: "Test Transaction",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkFPrfEVTY2M5rSCFmBKH1GhpF3_A2UNZqXrDZ_zpe4HCsmzCD2y_OZvvCtndJD3yvfQ&usqp=CAU",
      order_id: data.order, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        toast({
          description: response.razorpay_payment_id,
          status: "success",
        });
        toast({
          description: response.razorpay_order_id,
          status: "success",
        });
        toast({
          description: response.razorpay_signature,
          status: "success",
        });
      },
      prefill: {
        name: prop.data.firstName,
        email: prop.data.email,
      },

      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new Razorpay(options);

    rzp1.open();
    navigate("/");
  };


  return (
    <>
      <Box
        direction={["column", "column", "row", "row"]}
        width={"100%"}
        marginTop={"20px"}
      >
        <Flex
          borderRadius={"10px"}
          paddingTop={"15px"}
          padding={"20px"}
          height={"70px"}
          width={"80%"}
          background={"#151b39"}
          justifyContent={"space-between"}
          margin={"auto"}
        >
          <Text
            fontWeight={500}
            fontSize={"x-large"}
            paddingY={-5}
            pl={5}
            color={"white"}
          >
            Payment Details
          </Text>
          <Box mr={8} mt={2} color={"white"} display={"flex"} gap={8}>
            <Box>
              <Link to="/cart">
                {" "}
                <Text fontSize={"smaller"}>Your Cart</Text>{" "}
              </Link>
            </Box>

            <Box>
              <Text fontSize={"smaller"}>Order Review</Text>
            </Box>
            <Box>
              <Text fontSize={"smaller"}>Payment Details</Text>
            </Box>
          </Box>
        </Flex>

        <Box height={"auto"} bg={"#F3F7FB"}>
          <Box
            direction={["column", "column", "row", "row"]}
            display={"flex"}
            gap={8}
            mt={7}
            width={"80%"}
            ml={145}
            height={"auto"}
          >
            <Box
              bg={"#F3F7FB"}
              p={0}
              rounded={"lg"}
              height={"auto"}
              width={"100%"}
            >
              <Box bg={"white"} p={0} rounded={"lg"} height={50} width={"100%"}>
                <Box display={"flex"} gap={5} p={4}>
                  <Checkbox />
                  <Text fontSize={"smaller"}>VOUCHERS</Text>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}>PREFERRED PAYMENT</Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      height={30}
                      src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png"
                      alt="paytm"
                    />
                    <Text pt={1}>Paytm</Text>
                    <Text></Text>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Link to="/">LINK</Link>{" "}
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> REWARD PAY </Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      height={30}
                      src="https://www.netmeds.com/msassets/images/icons/TWID.png"
                      alt="paytm"
                    />
                    <Text pt={1}>Pay With Rewards </Text>
                    <Text></Text>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Checkbox />{" "}
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> WALLET </Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      marginTop={"10px"}
                      height={37}
                      src="	https://www.netmeds.com/assets/pgicon/Free_Charge_lo.png"
                      alt="paytm"
                    />
                    <Box fontSize={"sm"}>
                      <Text pt={1}>Freecharge PayLater | Wallet </Text>
                      <Text>
                        Get up to Rs. 30 Freecharge cashback (10%) on your
                        transaction using Freecharge wallet on Netmeds. Offer
                        valid ONCE per user till 30th June 2022. *T&C apply
                      </Text>
                    </Box>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Link to="/">LINK</Link>{" "}
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> Simpl </Text>
                <Box
                  display={"flex"}
                  pt={3}
                  gap={8}
                  justifyContent={"space-between"}
                >
                  <Image
                    marginTop={"10px"}
                    height={37}
                    src="https://www.netmeds.com/msassets/images/icons/simpl-logo.png"
                    alt="paytm"
                  />
                  <Box fontSize={"sm"}>
                    <Text pt={1}>
                      Get flat 5% Simpl cashback up to Rs. 500. Valid for all
                      customers. OR Get flat 8% Simpl cashback up to 500. Valid
                      for new customers.
                    </Text>
                    <Text>
                      Link Account is required to complete the payment
                    </Text>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Link to="/">LINK</Link>{" "}
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> OTHER PAYMENTS </Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      marginTop={"3px"}
                      height={30}
                      src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png"
                      alt="paytm"
                    />
                    <Text pt={1}> PhonePe </Text>
                    <Text></Text>
                  </Box>
                  <Box>
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent={"end"}
                        pt={3}
                        fontSize={"smaller"}
                      >
                        {" "}
                        <Checkbox pl={10} onChange={(e) => setCheck(!check)} />
                      </Box>
                      <Box>
                        {!check ? (
                          <Box></Box>
                        ) : (
                          <>
                            <Button
                              onClick={() => handleSuccess()}
                              mt={3}
                              mr={0}
                              bg={"#24AEB1"}
                              color={"white"}
                            >
                              PAY Rs {discountAmount}
                            </Button>
                          </>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> UPI </Text>
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={8}>
                    <Image
                      height={38}
                      src="	https://www.netmeds.com/assets/pgicon/googlepaylogo.png"
                      alt="paytm"
                    />
                    <Text pt={1}>Google Pay </Text>
                    <Text></Text>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Checkbox />{" "}
                  </Box>
                </Box>
              </Box>

              <Box
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Text fontSize={"smaller"}> CREDIT CARDS & DEBIT CARDS </Text>
                <Box textAlign={"center"} mt={4} borderTop={"1px solid grey"}>
                  {!flag ? (
                    <Button
                      border={"none"}
                      bg={"white"}
                      onClick={() => setFlag(true)}
                    >
                      ADD NEW CARD
                    </Button>
                  ) : (
                    <>
                      <Box textAlign={"left"}>
                        <Text mb={3} fontSize={"sm"}>
                          ENTER CARD DETAILS
                        </Text>
                        <Text color={"#24AEB1"}>CARD NUMBER</Text>
                        <Input mb={3} variant="flushed" type={"number"} />
                        <Box display={"flex"} gap={2}>
                          <Box>
                            <Text color={"#24AEB1"}>EXPIRY DATE</Text>
                            <Input
                              mb={3}
                              width={150}
                              placeholder={"MM"}
                              variant="flushed"
                              type={"number"}
                            />
                          </Box>
                          <Box>
                            <Input
                              mb={3}
                              mt={6}
                              width={150}
                              placeholder={"YY"}
                              variant="flushed"
                              type={"number"}
                            />
                          </Box>
                          <Box>
                            <Text color={"#24AEB1"}>CVV</Text>
                            <Input
                              mb={3}
                              width={150}
                              variant="flushed"
                              type={"number"}
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Text color={"#24AEB1"}>NAME ON CARD</Text>
                          <Input
                            mb={3}
                            width={150}
                            variant="flushed"
                            type={"text"}
                          />
                        </Box>
                        <Box display={"flex"} mb={6} gap={8}>
                          <Checkbox />
                          <Text>Save this card for future payments. </Text>
                        </Box>

                        <Button bg={"#24AEB1"}>PAY</Button>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>

              <Box
                bg={"teal"}
                mt={8}
                p={0}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Box
                  bg={"white"}
                  mt={8}
                  p={0}
                  rounded={"lg"}
                  height={"auto"}
                  width={"100%"}
                >
                  <Text p={3} fontSize={"smaller"}>
                    NET BANKING{" "}
                  </Text>
                  <Box
                    display={"flex"}
                    pt={3}
                    gap={8}
                    justifyContent={"space-around"}
                  >
                    <Box>
                      <Image
                        pl={2}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/axis.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        Axis Bank
                      </Text>
                    </Box>

                    <Box>
                      <Image
                        pl={2}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/Hdfc.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        HDFC Bank
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        pl={1}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/icici.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        ICICI Bank
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        pl={2}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/kotak.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        Kotak Bank
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        pl={7}
                        height={50}
                        src="https://www.netmeds.com/assets/pgicon/Sbi.png"
                        alt="paytm"
                      />
                      <Text fontSize={"smaller"} pt={1}>
                        State Bank of India
                      </Text>
                    </Box>
                  </Box>
                  <Select
                    p={3}
                    width={200}
                    placeholder="More Banks"
                    size={"sm"}
                  >
                    <option value="option1">Bank of Maharashtra</option>
                    <option value="option2">Central Bnak of India </option>
                    <option value="option3">Abhyudaya Co-Op Bank</option>
                    <option value="option2">Central Bank of India </option>
                    <option value="option3">Yes Bank</option>
                    <option value="option3">Union Bank</option>
                    <option value="option3">Canara Bank</option>
                  </Select>
                </Box>
              </Box>
              <Box
                fontSize={"smaller"}
                p={4}
                bg={"white"}
                mt={5}
                rounded={"lg"}
                height={"auto"}
                width={"100%"}
              >
                <Box display={"flex"} pr={3} justifyContent={"space-between"}>
                  <Box display={"flex"} pt={3} gap={5}>
                    <Image
                      height={30}
                      src="https://www.netmeds.com/assets/pgicon/COD.png"
                      alt="paytm"
                    />
                    <Box>
                      <Text pt={1}>Cash On Delivery </Text>
                      <Text>
                        Hear us out! Pay online and earn 100% NMS SuperCash (up
                        to Rs. 3000) on all prepaid orders
                      </Text>
                    </Box>
                  </Box>
                  <Box color={"#EF4281"} pt={3} fontSize={"smaller"}>
                    {" "}
                    <Checkbox />{" "}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              bg={"white"}
              rounded={"lg"}
              p={5}
              pr={8}
              width={470}
              height={"300px"}
            >
              <Text fontWeight={"bold"} mb={1} color={"grey"} fontSize={"sm"}>
                PAYMENT DETAILS
              </Text>
              <Box
                fontSize={"sm"}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text> MRP Total</Text>
                <Text>Rs,{pay.MRP}</Text>
              </Box>
              <Box
                fontSize={"sm"}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text> Nedmeds Discount</Text>
                <Text>-Rs{pay.discount}</Text>
              </Box>
              <Box
                fontSize={"sm"}
                fontWeight={500}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text>Total Amount*</Text>
                <Text>Rs,{pay.Total}</Text>
              </Box>
              <Box
                bg={"#F3F8EC"}
                p={2}
                fontWeight={500}
                fontSize={"smaller"}
                mt={3}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Text pl={1} color={"green"}>
                  TOTAL SAVINGS -Rs{pay.discount}
                </Text>
              </Box>

              <Box
                p={2}
                fontWeight={500}
                bg={"white"}
                mt={0}
                justifyContent={"space-between"}
                display={"flex"}
              >
                <Box>
                  <Text fontSize={"xs"}>TOTAL AMOUNT </Text>
                  <Text fontSize={"larger"}>Rs,{pay.Total}</Text>
                </Box>

                <Box>
                  {" "}
                  <Button onClick={() => handleAmount(total)} size={"md"}>
                    <PayButton />
                  </Button>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
