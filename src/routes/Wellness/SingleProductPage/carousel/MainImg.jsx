import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box } from "@chakra-ui/react";

export default function MainImg({ url, off }) {
  // 'horizontal', 'vertical
  return (
    <div>
      <Carousel dynamicHeight={true}>
        <Box>
          <img height={"50%"} src={url} />
          <p className="legend">{off}</p>
        </Box>
        <div>
          <img src={url} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={url} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}
