import { AiFillStar } from "react-icons/ai";

import { SectionContainer } from "@/containers";

import Dogs from "@/assets/Frame 2.png";

export const OpenCard = () => {
  return (
    <div className='bg-slate-50'>
      <SectionContainer className='my-32 xxs:mt-40'>
        <div className='xl:w-1/2 mx-auto'>
          <h2 className='font-bold text-neutral-80 text-2xl font-open-sans leading-7'>
            Casa Villa hermosa frente a Parque Irlanda
          </h2>

          <div className='grid grid-cols-4 grid-rows-2 gap-1 rounded-md overflow-hidden my-2'>
            <img
              src={Dogs}
              alt='Dogs'
              className='col-span-2 w-full row-span-2'
            />
            <img src={Dogs} alt='Dogs' className='w-full' />
            <img src={Dogs} alt='Dogs' className='w-full' />
            <img src={Dogs} alt='Dogs' className='w-full' />
            <img src={Dogs} alt='Dogs' className='w-full' />
          </div>

          <h4 className='font-bold text-neutral-80 text-lg leading-[22px] font-open-sans w-3/4'>
            Casa de habitación cerca del parque Irlanda zona céntrica
          </h4>

          <div className='md:grid grid-cols-2 gap-5 mt-3'>
            <div className='mt-10'>
              <div className='flex items-center gap-2'>
                <img src={Dogs} alt='Dogs' className='w-10 h-10 rounded-full' />

                <div>
                  <h6 className='text-sm font-medium'>
                    <span className='font-semibold text-black'>Anfitrión:</span>{" "}
                    Dilan Arconte
                  </h6>

                  <p className='font-normal text-[10px]'>
                    Anfitrión: Desde hace 4 años
                  </p>
                </div>
              </div>
            </div>

            <div className='p-4 shadow-xl rounded-lg'>
              <div className='flex justify-between items-center mb-4'>
                <h5 className='font-normal text-base text-shade-02'>
                  <span className='font-extralight text-[22px] line-through text-neutral-07'>
                    $500
                  </span>{" "}
                  <span className='font-extralight text-[22px] text-neutral-07'>
                    $440
                  </span>{" "}
                  night
                </h5>

                <h6 className='flex items-center text-shade-02 font-normal text-sm'>
                  <AiFillStar /> 4.99 &middot;{" "}
                  <span className='text-neutral-08'>337 reviews</span>
                </h6>
              </div>

              <div className='flex flex-col gap-3'>
                <div className='border-[1px] border-neutral-07 rounded-lg'>
                  <div className='grid grid-cols-2'>
                    <div className='border-r-[1px] border-neutral-07 p-2 pt-1'>
                      <span className='font-extralight text-[10px] text-shade-02'>
                        CHECK-IN
                      </span>
                      <p className='text-neutral-08 text-sm font-normal'>
                        2/6/2023
                      </p>
                    </div>
                    <div className='p-2 pt-1'>
                      <span className='font-extralight text-[10px] text-shade-02'>
                        CHECKOUT
                      </span>
                      <p className='text-neutral-08 text-sm font-normal'>
                        2/11/2023
                      </p>
                    </div>
                    <div className='p-2 pt-1 col-span-2 border-t-[1px] border-neutral-07'>
                      <span className='font-extralight text-[10px] text-shade-02'>
                        GUESTS
                      </span>
                      <p className='text-neutral-08 text-sm font-normal'>
                        1 guest
                      </p>
                    </div>
                  </div>
                </div>

                <button className='bg-orange-500 w-full text-white font-normal text-base rounded-lg py-3'>
                  Reservado
                </button>

                <p className='text-neutral-08 text-sm font-normal text-center'>
                  No se te cobrará todavía
                </p>
              </div>

              <hr className='block my-2' />

              <div className='flex justify-between items-center'>
                <span className='font-extralight text-base'>
                  Total before taxes
                </span>
                <span className='text-base font-normal'>$2,400</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
