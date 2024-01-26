import { HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";

import { SectionContainer } from "@/containers";
import Reserva from "@/assets/reservaFeliz.png";

export const Reservation = () => {
  return (
    <SectionContainer className='grid grid-cols-2 xxs:grid-cols-1 place-items-center'>
      <div className='xxs:flex xxs:gap-4 justify-between xxs:mb-4'>
        <img
          src={Reserva}
          alt='Reserva'
          draggable='false'
          className='xxs:h-28'
        />
        <h2 className='text-4xl xxs:text-3xl text-blue-dark font-black sm:hidden'>
          Reserva con cuidadores de confianza
        </h2>
      </div>
      <div className='flex flex-col justify-between'>
        <h2 className='sm:text-[40px] xxs:text-3xl text-blue-dark sm:font-black xxs:font-semibold mb-5 xxs:hidden'>
          Reserva con cuidadores de confianza
        </h2>

        <ul className='grid gap-3'>
          <li className='flex gap-2'>
            <div className='text-indigo-600 text-xl'>
              <HiOutlineCheck />
            </div>
            <p className='text-gray-primary xxs:text-sm font-medium !leading-7'>
              Cada cuidador debe someterse a un proceso de verificación de
              identidad.
            </p>
          </li>
          <li className='flex gap-2'>
            <div className='text-indigo-600 text-xl'>
              <HiOutlineCheck />
            </div>
            <p className='text-gray-primary xxs:text-sm font-medium !leading-7'>
              Cada proveedor de cuidados debe suministrar un perfil completo y
              datos personales.
            </p>
          </li>
          <li className='flex gap-2'>
            <div className='text-indigo-600 text-xl'>
              <HiOutlineCheck />
            </div>
            <p className='text-gray-primary xxs:text-sm font-medium !leading-7'>
              Todos los cuidadores son evaluados y aprobados por nuestro equipo
              de control de calidad.
            </p>
          </li>
        </ul>

        <div className='xxs:mt-4 sm:mt-5'>
          <button className='flex items-center gap-2 bg-orange-400 text-white py-3 px-10 rounded-full text-sm font-bold'>
            <HiOutlineShieldCheck />
            Buscar un cuidador de confianza
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};
