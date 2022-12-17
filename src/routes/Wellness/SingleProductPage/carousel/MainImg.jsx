import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box,Image } from "@chakra-ui/react";

export default function MainImg({ url, off }) {
  // 'horizontal', 'vertical
  return (
    
      <Carousel dynamicHeight={true}  >
        <Box>
          <img  src={url} />
          <p className="legend">{off}</p>
        </Box>
        <Box>
          <img src={url} />
          {/* <p className="legend">Legend 2</p> */}
        </Box>
        <Box>
          <img src={url} />
          {/* <p className="legend">Legend 3</p> */}
        </Box>
      </Carousel>
  
  );
}
