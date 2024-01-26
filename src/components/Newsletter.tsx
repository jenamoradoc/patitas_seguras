import { AiOutlineMail } from "react-icons/ai";

import { SectionContainer } from "@/containers/SectionContainer";

export const Newsletter = () => {
  return (
    <section className='bg-slate-50'>
      <SectionContainer>
        <div className='bg-gradient-to-b from-orange-400 to-orange-200 rounded-3xl grid grid-cols-12 xxs:pt-12 xxs:pb-10 pt-3 pb-24 px-3'>
          <div className='lg:col-span-3 lg:relative hidden lg:block'>
            <div className='w-20 h-20 rounded-3xl bg-black absolute border-2 border-white -top-6 left-14'></div>
            <div className='w-9 h-9 rounded-full bg-black absolute border-2 border-white top-3 right-7'></div>
            <div className='w-9 h-9 rounded-full bg-black absolute border-2 border-white bottom-5 left-20'></div>
            <div className='w-14 h-14 bg-black absolute rounded-full border-2 border-white bottom-1 right-5'></div>
          </div>
          <div className='lg:col-span-6 col-span-12 mx-auto sm:w-10/12 md:w-10/12'>
            <h4 className='text-[32px] xxs:text-2xl font-semibold text-blue-dark text-center'>
              Suscríbete para estar al tanto de todas las noticias
            </h4>

            <form className='xxs:mt-4 lg:mt-5 sm:mt-4'>
              <div className='relative grid grid-cols-1'>
                <input
                  type='text'
                  placeholder='Tu email aquí...'
                  className='rounded-full xxs:py-3 lg:py-4 sm:py-3 pl-14 text-sm text-neutral-500 placeholder:text-neutral-500'
                />
                <div className='absolute top-1/2 left-5 -translate-y-1/2 text-xl text-indigo-600'>
                  <AiOutlineMail />
                </div>
                <button className='text-sm text-white bg-green-500 xxs:py-2 xxs:px-4 lg:py-3 lg:px-5 rounded-full absolute top-1/2 right-1 -translate-y-1/2 sm:p-2'>
                  Suscribite
                </button>
              </div>
            </form>
          </div>
          <div className='lg:col-span-3 lg:relative hidden lg:block'>
            <div className='w-[70px] h-[70px] rounded-3xl bg-black lg:absolute border-2 border-white -top-5 left-14'></div>
            <div className='w-9 h-9 rounded-full bg-black absolute border-2 lg:absolute border-white top-10 right-12'></div>
            <div className='w-9 h-9 rounded-full bg-black absolute border-2 lg:absolute border-white bottom-14 left-24'></div>
            <div className='w-14 h-14 bg-black absolute rounded-full border-2 lg:absolute border-white -bottom-1 right-10'></div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
