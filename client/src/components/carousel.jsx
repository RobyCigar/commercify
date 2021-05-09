import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import pic2 from "../assets/banner-3.png";
import pic3 from "../assets/banner-4.png";
import pic4 from "../assets/banner-5.jpg";
import pic5 from "../assets/banner-6.jpg";

const items = [  {
    src: pic2,
  },
  {
    src: pic3,
  },
];

const Crsl = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} className="d-block w-100" alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div
      className="d-flex flex-column flex-md-row align-items-center my-5"
      style={{
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: 30,
        minWidth: 200,
      }}
    >
      <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      </div>
      <div className="d-flex flex-column flex-sm-row flex-md-column flex-lg-column align-items-center">
        <img className="m-3" src={pic4} style={{width: '25vw', minWidth: 200}} alt=""/>
        <img className="m-3" src={pic5} style={{width: '25vw', minWidth: 200}} alt=""/>
      </div>
    </div>
  );
};

export default Crsl;
