'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageProps {
  src: string;
  alt: string;
  caption: string;
}

const images: ImageProps[] = [
  { src: '/hero.jpg', alt: 'Hero Image 1', caption: 'Materi Rutin' },
  { src: '/image2.jpg', alt: 'Image 2', caption: 'Hiking' },
  { src: '/image3.jpg', alt: 'Image 3', caption: 'Repling' },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 pr-1 rounded-full z-10 w-12 h-12 hidden sm:flex items-center justify-center transition-all duration-300 hover:bg-opacity-75"
    aria-label="Next slide"
  >
    <span className="block w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 pl-1 rounded-full z-10 w-12 h-12 hidden sm:flex items-center justify-center transition-all duration-300 hover:bg-opacity-75"
    aria-label="Previous slide"
  >
    <span className="block w-4 h-4 border-t-2 border-l-2 border-black transform -rotate-45" />
  </button>
);

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="mt-52 mb-26 md:my-24 lg:my-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-all duration-500 ${index === currentSlide ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity duration-500 ${index === currentSlide ? 'opacity-50' : 'opacity-0'}`}></div>
                <div className={`absolute bottom-5 left-5 text-white transition-all duration-500 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <h2 className="text-xl font-bold mb-1">{image.caption}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
