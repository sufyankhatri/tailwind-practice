import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex justify-center">
      <Slider {...settings} style={{ width: '80%' }}>
        <div className="">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651&width=1024"
            className="w-full h-min"
          />
        </div>
        <div className="h-20 w-full">
          <img
            src="https://media.istockphoto.com/photos/scandinavian-concept-of-living-room-interior-with-design-sofa-coffee-picture-id1251694108?b=1&k=20&m=1251694108&s=170667a&w=0&h=mJEQKP7RzRc_sAoy2jdZEQAhMmm48esKlNkQ_Dg-x50="
            className="w-full"
          />
        </div>{' '}
        <div className="h-20 w-full">
          <img
            src="https://hips.hearstapps.com/hbu.h-cdn.co/assets/16/42/1476907189-study.jpg"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
