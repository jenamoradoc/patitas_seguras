import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";

import Logo from "/logo_blue.svg";

export const Footer = () => {
  return (
    <footer className='bg-slate-50 xxs:pt-10 xxs:pb-20 sm:py-10'>
      <div className='grid lg:grid-cols-4 xxs:grid-cols-1 sm:grid-cols-2 sm:gap-12 xxs:px-4 sm:py-10 xxs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto xxs:gap-16'>
        <div className='flex flex-col justify-between mr-10 xxs:gap-4 sm:mr-0 sm:gap-4'>
          <img
            src={Logo}
            alt='Patitas Seguras'
            draggable='false'
            className='w-28'
          />
          <p className='text-slate-500 text-sm !leading-6'>
            Facilitamos información sobre hospedajes para ayudar a las personas
            a encontrar el lugar ideal para sus mascotas
          </p>
          <div className='flex gap-6 text-neutral-700 text-2xl xxs:mt-2'>
            <BiLogoFacebook />
            <FaTwitter />
            <AiFillInstagram />
          </div>
        </div>

        <div>
          <h3 className='text-lg text-neutral-900 font-semibold mb-4'>
            Sobre Nosotros
          </h3>
          <ul className='grid gap-3.5'>
            <li className='text-neutral-500 xxs:text-sm'>
              Política de privacidad
            </li>
            <li className='text-neutral-500 xxs:text-sm'>
              Normas de la comunidad
            </li>
            <li className='text-neutral-500 xxs:text-sm'>Trabajo</li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg text-neutral-900 font-semibold mb-4'>
            Artículos
          </h3>
          <ul className='grid gap-3.5'>
            <li className='text-neutral-500 xxs:text-sm'>Nuevos artículos </li>
            <li className='text-neutral-500 xxs:text-sm'>
              Artículos populares
            </li>
            <li className='text-neutral-500 xxs:text-sm'>Más Leídos</li>
            <li className='text-neutral-500 xxs:text-sm'>Tips & trucos</li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg text-neutral-900 font-semibold mb-4'>
            Contacto
          </h3>
          <ul className='grid gap-3.5'>
            <li className='text-neutral-500 xxs:text-sm'>
              2464 La Plata, Buenos Aires 45463
            </li>
            <li className='text-neutral-500 xxs:text-sm'>(671) 555-0110</li>
            <li className='text-neutral-500 xxs:text-sm'>
              <a href='mailto:hola@patitasseguras.com'>
                hola@patitasseguras.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
