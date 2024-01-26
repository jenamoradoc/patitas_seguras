import { CCarousel, CImage, CCarouselItem } from "@coreui/react";
import { AiOutlineHeart } from "react-icons/ai";

import "@coreui/coreui/dist/css/coreui.min.css";

export const CuidadorCarousel = () => {
  return (
    <CCarousel indicators controls transition='crossfade' pause>
      <CCarouselItem className='relative lg:w-full sm:w-52'>
        <CImage
          className='d-block w-100 lg:h-52 xl:h-72 sm:h-52 xxs:h-72 md:h-52 rounded-2xl'
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='slide 1'
        />
        <button className='absolute top-3 right-3 z-50 text-2xl text-white '>
          <AiOutlineHeart />
        </button>
      </CCarouselItem>
      <CCarouselItem className='relative lg:w-full sm:w-52'>
        <CImage
          className='d-block w-100 lg:h-52 xl:h-72 sm:h-52 xxs:h-72 md:h-52 rounded-2xl'
          src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
          alt='slide 2'
        />
        <button className='absolute top-3 right-3 z-50 text-2xl text-white '>
          <AiOutlineHeart />
        </button>
      </CCarouselItem>
      <CCarouselItem className='relative lg:w-full sm:w-52'>
        <CImage
          className='d-block w-100 lg:h-52 xl:h-72 sm:h-52 xxs:h-72 md:h-52 rounded-2xl'
          src='https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'
          alt='slide 3'
        />
        <button className='absolute top-3 right-3 z-50 text-2xl text-white '>
          <AiOutlineHeart />
        </button>
      </CCarouselItem>
    </CCarousel>
  );
};
