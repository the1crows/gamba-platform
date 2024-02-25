import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { WelcomeBanner } from '../sections/Dashboard/WelcomeBanner';
import { TokenListingBanner } from '../sections/Dashboard/NewBanner';

export function NewsCarousel() {
  const banners = [
    <WelcomeBanner key={1} />
    <NewBanner key={2} />
  ];

  const settings = {
    dots: true,
    infinite: banners.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {banners.map((banner, index) => (
        <div key={index}>
          {banner}
        </div>
      ))}
    </Slider>
  );
}
