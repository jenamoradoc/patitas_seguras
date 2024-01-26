import { SectionContainer } from "@/containers";

export const Header = () => {
  return (
    <header className='sm:h-screen xxs:h-[550px] sm:bg-hero-pattern-mobile lg:bg-hero-pattern  xxs:bg-hero-pattern-mobile bg-no-repeat bg-center bg-cover flex items-center sm:mt-48 lg:mt-32 xxs:mt-40'>
      <SectionContainer className='flex flex-col justify-evenly h-full'>
        <h2 className='text-white md:text-[40px] sm:text-3xl xxs:text-3xl !leading-[42px] sm:font-bold xxs:font-semibold sm:w-2/3 md:h-1/2 md:w-1/2 xxs:pl-5 xxs:w-3/4'>
          La mejor plataforma para alojamiento de mascotas, paseos, veterinarias
          y mucho más...
        </h2>

        <div className='flex gap-4 items-center xxs:overflow-x-scroll sm:overflow-x-scroll no-scrollbar'>
          <div className='bg-white flex rounded-3xl p-4'>
            <div className='relative w-28 flex items-center'>
              <div className='h-14 w-14 bg-black rounded-full border-4 border-white absolute'></div>
              <div className='h-14 w-14 bg-black rounded-full border-4 border-white absolute left-5'></div>
              <div className='h-14 w-14 bg-black rounded-full border-4 border-white absolute left-10'></div>
            </div>
            <div className='w-40'>
              <h4 className='font-semibold text-blue-dark leading-6'>
                1K+ Petlover
              </h4>
              <span className='text-gray-secondary leading-5 font-normal text-[12px]'>
                Volvieron a casa con mascotas más felices
              </span>
            </div>
          </div>
          <div className='bg-white flex rounded-3xl p-4 gap-5 items-center'>
            <div>
              <div className='h-14 w-14 bg-black rounded-full'></div>
            </div>
            <div className='w-40'>
              <h4 className='font-semibold text-blue-dark leading-6'>
                56 Hospedajes
              </h4>
              <span className='text-gray-secondary leading-5 font-normal text-[12px]'>
                que han sido alquilados solo este mes
              </span>
            </div>
          </div>
          <div className='bg-white flex rounded-3xl p-4 gap-5 items-center'>
            <div>
              <div className='h-14 w-14 bg-black rounded-full'></div>
            </div>
            <div className='w-48'>
              <h4 className='font-semibold text-blue-dark leading-6'>4K+</h4>
              <span className='text-gray-secondary leading-5 font-normal text-[12px]'>
                Personas buscando hospedar a sus mascotas
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
};
