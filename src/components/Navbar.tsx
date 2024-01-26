import { Link } from "react-router-dom";

import { PiHeartStraightBold, PiMagnifyingGlassLight } from "react-icons/pi";
import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";

import Logo from "/logo.svg";

export const Navbar = () => {
  return (
    <nav className='fixed bg-slate-50 w-full py-3 grid gap-3 top-0 grid-cols-1 z-50'>
      <div className='grid grid-cols-12 items-center xxs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto gap-2 xxs:h-full'>
        <Link to='/' className='xxs:col-span-2 sm:col-span-2 w-32'>
          <img
            src={Logo}
            alt='Patitas Seguras'
            draggable='false'
            className='w-full'
          />
        </Link>

        <button className='bg-orange-400 rounded-full text-slate-50 flex text-xs items-center sm:col-span-1 md:col-span-2 lg:col-span-2 md:justify-center font-medium h-[36px] md:!col-start-9 lg:!col-start-9 xl:!col-start-10 xl:col-span-1 gap-1 px-[2px] xxs:hidden sm:hidden md:flex'>
          <div className='text-base'>
            <PiHeartStraightBold />
          </div>
          ser petlover
        </button>
        <div className='text-gray-500 bg-slate-100 flex text-2xl gap-6 items-center px-4 rounded-full h-[36px] xxs:col-start-9 sm:col-start-10 md:col-start-11'>
          <button>
            <TbMenu2 />
          </button>
          <button>
            <FaRegUserCircle />
          </button>
        </div>
      </div>

      <div className='border-b-[#E3F0F6] border-[1px]'></div>

      <form className='grid grid-cols-12 items-center xxs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto gap-2 xxs:w-full'>
        <div className='relative xxs:col-start-2 sm:col-start-1 sm:col-span-8 md:col-span-12 xxs:col-span-10 lg:col-span-4 xxs:w-full'>
          <button className='absolute h-0 top-1/3 right-5 -translate-y-1/3'>
            <PiMagnifyingGlassLight />
          </button>
          <input
            type='text'
            placeholder='Buscar cerca de tu ciudad'
            className='p-2 text-neutral-500 w-full border-slate-500 border-2 rounded-lg'
          />
        </div>
        <input
          type='date'
          placeholder='Fecha deseada'
          className='border-slate-500 rounded-lg border-2 p-2 text-neutral-500 md:col-span-4 xxs:hidden sm:col-span-4 lg:col-span-2'
        />
        <button className='flex items-center justify-center gap-2 border-slate-500 rounded-lg border-2 p-2 text-neutral-500 md:col-span-4 xxs:hidden sm:col-span-6 lg:col-span-3 xl:col-span-2'>
          Agregar mascota
          <div className='text-2xl'>
            <AiOutlinePlusCircle />
          </div>
        </button>
        <a
          href='/cuidador'
          target='_blank'
          className='flex items-center gap-2 bg-green-500  text-white p-[10px] rounded-xl md:col-span-4 xl:col-span-2 t justify-center text-base xxs:hidden sm:col-span-6 lg:col-span-3'
        >
          Buscar un cuidador
          <div className='text-2xl'>
            <RxMagnifyingGlass />
          </div>
        </a>
      </form>
    </nav>
  );
};
