// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Flex, Image } from "@chakra-ui/react";

function CardSlider({ item }) {
   return (
      <Flex w={"full"} zIndex={1}>
         <Swiper
            slidesPerView={3}
            spaceBetween={17}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            // pagination={{
            //    clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            {item[0] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[0].img}
                  />
               </SwiperSlide>
            )}
            {item[1] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[1].img}
                  />
               </SwiperSlide>
            )}
            {item[2] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[2].img}
                  />
               </SwiperSlide>
            )}
            {item[3] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[3].img}
                  />
               </SwiperSlide>
            )}
            {item[4] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[4].img}
                  />
               </SwiperSlide>
            )}
            {item[5] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[5].img}
                  />
               </SwiperSlide>
            )}
            {item[6] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[6].img}
                  />
               </SwiperSlide>
            )}
            {item[7] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[7].img}
                  />
               </SwiperSlide>
            )}
            {item[8] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[8].img}
                  />
               </SwiperSlide>
            )}
            {item[9] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[9].img}
                  />
               </SwiperSlide>
            )}
            {item[10] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[10].img}
                  />
               </SwiperSlide>
            )}
            {item[11] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[11].img}
                  />
               </SwiperSlide>
            )}
            {item[12] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[12].img}
                  />
               </SwiperSlide>
            )}
            {item[13] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[13].img}
                  />
               </SwiperSlide>
            )}
            {item[14] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[14].img}
                  />
               </SwiperSlide>
            )}
            {item[15] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[15].img}
                  />
               </SwiperSlide>
            )}
            {item[16] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[16].img}
                  />
               </SwiperSlide>
            )}
            {item[17] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[17].img}
                  />
               </SwiperSlide>
            )}
            {item[18] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[18].img}
                  />
               </SwiperSlide>
            )}
            {item[19] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[19].img}
                  />
               </SwiperSlide>
            )}
            {item[20] && (
               <SwiperSlide>
                  <Image
                     borderRadius={"lg"}
                     cursor={"pointer"}
                     src={item[20].img}
                  />
               </SwiperSlide>
            )}
         </Swiper>
      </Flex>
   );
}

export default CardSlider;
