import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HomeCarousel from "./HomeCarousel";
import DealCard from "./DealCard";
import {
  slides,
  categoryArr,
  dealArr,
  offerArr,
  healthLibraryArr,
  extraInfo,
  exploreBeautyArr,
  healthConcernsArr,
  newOnMedimedArr,
  topBrandArr,
  focusArr,
  trendingTodayArr,
  shopByCategoryArr,
} from "../../../db.json";
import HeaderComp from "./HeaderComp";
import OfferCard from "./OfferCard";
import PreviousOrder from "./PreviousOrder";
import BeautyComp from "./BeautyComp";
import HealthLibrary from "./HealthLibrary";
import ExtraInfo from "./ExtraInfo";
import ExtraContent from "./ExtraContent";
import BGHeading from "./BGHeading";
import ExploreBeautyCard from "./ExploreBeautyCard";
import EasyOnlineCard from "./EasyOnlineCard";
import RefillCard from "./RefillCard";
import HealthConcernCard from "./HealthConcernCard";
import TopBrandCard from "./TopBrandCard";
import MembershipCard from "./MembershipCard";
import CardSlider from "./CardSlider";

function Home() {
  return (
    <Container
     
      minH={"100vh"}
      maxW={"container"}
      p={0}
      m={0}
      pb={7}
      align={"center"}
      bg={"#f3f6fb"}
    >
      <HeaderComp />
      <HStack
        p={3}
        justify={"center"}
        spacing={{ base: 3, lg: 6 }}
        flexWrap={"wrap"}
        display={{ base: "none", md: "flex" }}
      >
        {categoryArr.map((item) => (
          <Text
            key={item.id}
            fontSize={{ base: 11, lg: "sm" }}
            cursor={"pointer"}
          >
            {item}
          </Text>
        ))}
      </HStack>
      <HomeCarousel slides={slides} />
      <Flex
        py={4}
        px={{ base: 2, md: 4, lg: 7 }}
        gap={{ base: 3, lg: 6 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        {dealArr.map((item) => (
          <DealCard key={item.id} {...item} />
        ))}
      </Flex>
      <VStack py={4} px={{ base: 2, md: 4, lg: 7 }}>
        <HStack w={"full"} justify={"space-between"}>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily={"sans-serif"}
          >
            Payment Partner Offers
          </Heading>
          <Button
            p={0}
            color={"red.500"}
            fontSize={"sm"}
            variant={"none"}
            rightIcon={
              <Icon
                as={MdOutlineKeyboardArrowRight}
                color={"red.500"}
                boxSize={4}
                mt={0.5}
                ml={-2}
              />
            }
          >
            View All
          </Button>
        </HStack>
        <Flex
          w={"full"}
          py={4}
          gap={{ base: 3, lg: 6 }}
          direction={{ base: "column", md: "row" }}
        >
          {offerArr.map((item) => (
            <OfferCard key={item.id} {...item} />
          ))}
        </Flex>
      </VStack>
      <Flex
        w={"full"}
        py={4}
        px={{ base: 2, md: 4, lg: 7 }}
        justify={"space-between"}
        gap={{ base: 3, lg: 50 }}
        direction={{ base: "column", md: "row" }}
      >
        <PreviousOrder />
        <BeautyComp />
      </Flex>
      <BGHeading heading="Trending Today" color="#32aeb0" height="170">
        <CardSlider item={trendingTodayArr} />
        <Heading
          py={5}
          w={"full"}
          align={"left"}
          fontSize={{ base: "xl", md: "2xl" }}
          fontFamily={"sans-serif"}
        >
          Shop by Category
        </Heading>
        <Flex
          w={"full"}
          pb={10}
          zIndex={1}
          gap={{ base: 3, lg: 6 }}
          justify={"center"}
          direction={{ base: "column", md: "row" }}
        >
          {shopByCategoryArr.map((item) => (
            <ExploreBeautyCard key={item.id} {...item} />
          ))}
        </Flex>
      </BGHeading>
      <BGHeading heading="New on Medimed" color="#32aeb0" height="170">
        <CardSlider item={newOnMedimedArr} />
        <Heading
          py={5}
          w={"full"}
          align={"left"}
          fontSize={{ base: "xl", md: "2xl" }}
          fontFamily={"sans-serif"}
        >
          Top Brands
        </Heading>
        <Flex
          w={"full"}
          pb={10}
          zIndex={1}
          gap={{ base: 3, lg: 6 }}
          direction={{ base: "column", md: "row" }}
          borderBottom={"1px solid"}
          borderColor={"blackAlpha.200"}
        >
          {topBrandArr.map((item) => (
            <TopBrandCard key={item.id} {...item} />
          ))}
        </Flex>
        <MembershipCard />
        <Heading
          py={5}
          w={"full"}
          align={"left"}
          fontSize={{ base: "xl", md: "2xl" }}
          fontFamily={"sans-serif"}
        >
          Categories in Focus
        </Heading>
        <Flex
          w={"full"}
          pb={10}
          zIndex={1}
          gap={{ base: 3, lg: 6 }}
          direction={{ base: "column", md: "row" }}
        >
          {focusArr.map((item) => (
            <TopBrandCard key={item.id} {...item} />
          ))}
        </Flex>
      </BGHeading>
      <BGHeading heading="Explore Beauty" color="#ef4281" height="200">
        <Flex
          w={"full"}
          pb={10}
          zIndex={1}
          gap={4}
          justify={"space-between"}
          direction={{ base: "column", md: "row" }}
          borderBottom={"1px solid"}
          borderColor={"blackAlpha.200"}
        >
          {exploreBeautyArr.map((item) => (
            <ExploreBeautyCard key={item.id} {...item} />
          ))}
        </Flex>
        <EasyOnlineCard />
        <RefillCard />
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
      </BGHeading>
      <BGHeading heading="Health Library" color="#ef4281" height="150">
        <Flex
          w={"full"}
          gap={4}
          zIndex={1}
          direction={{ base: "column", md: "row" }}
        >
          {healthLibraryArr.map((item) => (
            <HealthLibrary key={item.id} {...item} />
          ))}
        </Flex>
        <VStack px={2} pt={7} align={"stretch"}>
          {extraInfo.map((item) => (
            <ExtraInfo key={item.id} {...item} />
          ))}
          <ExtraContent />
        </VStack>
      </BGHeading>
    </Container>
  );
}

export default Home;
