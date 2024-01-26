import { FiUserPlus } from "react-icons/fi";

import { Home, Lodging, WalkingDog } from "@/icons";
import { SectionContainer } from "@/containers";
import { SectionTitle } from "./SectionTitle";
import AboutUsImg from "@/assets/aboutUs.png";

export const Services = () => {
  return (
    <SectionContainer className='lg:grid lg:grid-cols-2 lg:gap-20 flex gap-4 flex-col'>
      <img
        src={AboutUsImg}
        alt='Sobre Nosotros'
        className='w-full h-full object-cover rounded-2xl'
      />
      <div>
        <SectionTitle title='Conoce más...' className='justify-end' />
        <h2 className='text-indigo-900 text-[32px] font-semibold text-right mb-4'>
          Servicios
        </h2>

        <div className='grid gap-4 border-b-gray-300 border-b-2 pb-4'>
          <div className='flex gap-3'>
            <div className='w-8'>
              <Lodging />
            </div>

            <div>
              <h4 className='font-lexend text-gray-900 flex items-center justify-between xxs:mb-3'>
                Alojamiento para mascotas
                <span className='bg-orange-400 uppercase text-white rounded-full py-1 px-6 xxs:hidden'>
                  Mayores ingresos
                </span>
              </h4>
              <p className='text-gray-500 leading-5'>
                "¡Cuida de perros y gatos en tu hogar ! Los cuidadores que
                ofrecen alojamiento pueden ganar el doble o más que los que no
                lo hacen."
              </p>
              <div className='sm:hidden xxs:block xxs:mt-2'>
                <span className='bg-orange-400 uppercase text-white rounded-full py-1 px-3'>
                  Mayores ingresos
                </span>
              </div>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='w-8'>
              <WalkingDog />
            </div>

            <div>
              <h4 className='font-lexend text-gray-900 pt-1 xxs:mb-3'>
                Alojamiento para mascotas
              </h4>
              <p className='text-gray-500 leading-5'>
                Elige paseos para una o mas mascotas que se ajusten a tu
                horario...
              </p>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='w-8'>
              <Home />
            </div>

            <div>
              <h4 className='font-lexend text-gray-900 pt-1 xxs:mb-3'>
                Anunciate ahora...
              </h4>
              <p className='text-gray-500 leading-5'>
                La red de dueños de mascotas más grande de Argentina...
              </p>
            </div>
          </div>
        </div>

        <button className='bg-green-500 text-white flex items-center gap-2 rounded-full w-full py-3 px-6 mt-3 lg:ml-auto sm:text-center justify-center lg:justify-start lg:w-auto sm:w-52 sm:ml-auto'>
          <FiUserPlus /> Ser cuidador
        </button>
      </div>
    </SectionContainer>
  );
};
