/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

const ImageCarousel = (props) => {
  return (
    <Carousel>
        <CarouselItem>
          <img
            className="d-block w-100"
            src={props.image}
            alt={props.image}
          />
        </CarouselItem>
    </Carousel>
  );
};

export default ImageCarousel;
