import { AiFillStar } from "react-icons/ai";

import { CuidadorCarousel } from ".";

export const CuidadorCard = () => {
  return (
    <a className='grid gap-2' href='/info' target='_blank'>
      <CuidadorCarousel />
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <h3 className='font-extralight text-sm'>Groveland, California</h3>
          <p className='font-medium flex items-center gap-1 text-sm text-shade-02'>
            <span>
              <AiFillStar />
            </span>{" "}
            4.91
          </p>
        </div>
        <h4 className='text-sm text-neutral-08 font-normal'>
          Yosemite National Park
        </h4>
        <h4 className='text-sm text-neutral-08 font-normal'>Oct 23 - 28</h4>
        <div className='font-extralight text-sm text-shade-02 flex'>
          <p className=''>
            $289 <span className='font-normal'>night</span>
          </p>
        </div>
      </div>
    </a>
  );
};
