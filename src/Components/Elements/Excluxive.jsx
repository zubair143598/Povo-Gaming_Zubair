import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,

    // slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Excluxive = () => {
  return (
    <div className="excluxive-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Povo Exclusive NFT's</h1>
          </div>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={1500}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={1500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
            <div><img className="w-100 p-2" src="./Assists/1.png" alt="" /></div>
            <div><img className="w-100 p-2" src="./Assists/2.png" alt="" /></div>
            <div><img className="w-100 p-2" src="./Assists/3.png" alt="" /></div>
          <div><img className="w-100 p-2" src="./Assists/4.png" alt="" /></div>
          <div><img className="w-100 p-2" src="./Assists/5.png" alt="" /></div>
          <div><img className="w-100 p-2" src="./Assists/6.png" alt="" /></div>
          <div><img className="w-100 p-2" src="./Assists/7.png" alt="" /></div>
        </Carousel>
      </div>
    </div>
  );
};

export default Excluxive;
