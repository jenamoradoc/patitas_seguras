import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineVilla, MdApartment } from "react-icons/md";

import { SectionContainer } from "@/containers";
import { SectionTitle } from "@/components/SectionTitle";
import { PetloverCard } from "@/components/PetloverCard";
import { useScroll } from "@/hooks";

export const Featured = () => {
  const { scrollContainerRef, scrollLeft, scrollRight } = useScroll();

  return (
    <SectionContainer>
      <div className='flex items-start justify-between'>
        <div>
          <SectionTitle title='Nuestras Recomendaciones' />
          <h2 className='font-semibold text-[32px] text-blue-dark ml-10 capitalize'>
            Petlover destacados
          </h2>
        </div>

        <div className='lg:flex gap-4 xxs:hidden sm:hidden'>
          <div className='flex items-center gap-2 text-emerald-500 bg-green-100 py-3 px-6 rounded-lg text-lg font-medium'>
            <div className='text-xl'>
              <AiFillHome />
            </div>
            <p>Casas</p>
          </div>
          <div className='flex items-center gap-2 text-neutral-500 border-teal-100 border-2 py-3 px-6 rounded-lg text-lg font-medium'>
            <div className='text-xl'>
              <MdOutlineVilla />
            </div>
            <p>Villas</p>
          </div>
          <div className='flex items-center gap-2 text-neutral-500 border-teal-100 border-2 py-3 px-6 rounded-lg text-lg font-medium'>
            <div className='text-xl'>
              <MdApartment />
            </div>
            <p>Apartamentos</p>
          </div>
        </div>

        <div className='flex gap-4 xxs:hidden'>
          <button
            className='text-xl p-4 bg-neutral-300 text-neutral-700 rounded-xl cursor-pointer'
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </button>
          <button
            className='text-xl p-4 bg-green-500 text-white rounded-xl cursor-pointer'
            onClick={scrollRight}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        className='mt-10 gap-10 grid grid-flow-col overflow-x-scroll no-scrollbar scroll-smooth'
        ref={scrollContainerRef}
      >
        <PetloverCard />
        <PetloverCard />
        <PetloverCard />
        <PetloverCard />
        <PetloverCard />
        <PetloverCard />
      </div>
    </SectionContainer>
  );
};
