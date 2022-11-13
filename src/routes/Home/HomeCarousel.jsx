import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HomeCarousel({ slides }) {
   const [currentSlide, setCurrentSlide] = useState(0);
   const slidesCount = slides.length;
   const carouselStyle = {
      transition: "all 0.5s",
      ml: `-${currentSlide * 100}%`,
   };
   const SLIDES_INTERVAL_TIME = 3000;
   const ANIMATION_DIRECTION = "right";

   const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
   };

   const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
   };

   const setSlide = (slide) => {
      setCurrentSlide(slide);
   };

   useEffect(() => {
      const automatedSlide = setInterval(() => {
         ANIMATION_DIRECTION.toLowerCase() === "left"
            ? prevSlide()
            : nextSlide();
      }, SLIDES_INTERVAL_TIME);
      return () => clearInterval(automatedSlide);
   }, [slidesCount]);

   return (
      <Flex
         w={"full"}
         py={4}
         px={{ base: 2, md: 4 }}
         alignItems={"center"}
         justifyContent={"center"}
         borderRadius={"md"}
      >
         <Flex w={"full"} overflow={"hidden"} pos={"relative"}>
            <Flex
               pos={"relative"}
               h={{ base: "96px", md: "187px", lg: "321px" }}
               w={"full"}
               {...carouselStyle}
               borderRadius={"md"}
            >
               {slides.map((slide, sid) => (
                  <Box
                     key={`slide-${sid}`}
                     flex="none"
                     boxSize="full"
                     shadow="md"
                     bgImage={slide.img}
                     bgPos={"center"}
                     bgRepeat={"no-repeat"}
                     bgSize={"cover"}
                     borderRadius={"md"}
                  ></Box>
               ))}
            </Flex>
            <Icon
               as={IoIosArrowBack}
               pos={"absolute"}
               left={0}
               top={{ base: "39%", lg: "44%" }}
               boxSize={{ base: 4, md: 10 }}
               color={"white"}
               onClick={prevSlide}
               cursor={"pointer"}
            />
            <Icon
               as={IoIosArrowForward}
               pos={"absolute"}
               right={0}
               top={{ base: "39%", lg: "44%" }}
               boxSize={{ base: 4, md: 10 }}
               color={"white"}
               onClick={nextSlide}
               cursor={"pointer"}
            />
            <HStack
               justify="center"
               pos="absolute"
               bottom={{ base: 2, lg: 4 }}
               w="full"
            >
               {Array.from({
                  length: slidesCount,
               }).map((_, slide) => (
                  <Box
                     key={`dots-${slide}`}
                     cursor="pointer"
                     boxSize={{ base: 1, md: 2 }}
                     m="0 2px"
                     bg={currentSlide === slide ? "#32aeb0" : "white"}
                     border={"1px solid gray"}
                     rounded="50%"
                     display="inline-block"
                     transition="background-color 0.6s ease"
                     _hover={{
                        bg: "blackAlpha.500",
                     }}
                     onClick={() => setSlide(slide)}
                  ></Box>
               ))}
            </HStack>
         </Flex>
      </Flex>
   );
}

export default HomeCarousel;
