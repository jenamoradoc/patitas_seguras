import { AiFillFire } from "react-icons/ai";

import FeaturedImg from "@/assets/featured.png";

export const PetloverCard = () => {
  return (
    <a className='grid gap-4 w-64 cursor-pointer' href='/info' target='_blank'>
      <div className='relative'>
        <div className='absolute text-red-500 text-sm font-medium bg-red-100 py-1 px-3 rounded-full bottom-3 left-3 flex items-center gap-2'>
          <AiFillFire />
          <span>Popular</span>
        </div>
        <img src={FeaturedImg} alt='Featured' />
      </div>

      <div>
        <h3 className='text-neutral-900 font-medium text-2xl leading-8'>
          Zona Urbana Mar de la Plata
        </h3>
        <span className='text-neutral-500 text-xl font-medium leading-8'>
          $ 35.000.000
        </span>
      </div>

      <div className='flex items-center gap-3'>
        <div className='h-10 w-10 bg-black rounded-full'></div>
        <div>
          <h4 className='font-medium text-neutral-900 leading-6 text-lg'>
            Camila Díaz
          </h4>
          <p className='text-neutral-500 font-medium text-sm leading-5'>
            Centro, Mar de la Plata
          </p>
        </div>
      </div>
    </a>
  );
};
