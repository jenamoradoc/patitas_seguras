import AboutUsImg from "@/assets/aboutUs.png";

import { SectionContainer } from "@/containers";
import { SectionTitle } from "@/components/SectionTitle";

export const AboutUs = () => {
  return (
    <SectionContainer className='lg:grid lg:grid-cols-2 lg:gap-20 flex flex-col-reverse gap-4'>
      <div>
        <SectionTitle title='Sobre Nosotros' />

        <div className='grid gap-3'>
          <h2 className='font-semibold text-[32px] text-blue-dark ml-10'>
            Quiénes Somos
          </h2>
          <p className='font-medium sm:text-2xl xxs:text-xl xxs:!leading-5 text-gray-primary sm:!leading-7 text-justify'>
            Somos Patitas Seguras, amigos de las mascotas como tú. En nuestra
            comunidad, las mascotas son familia, y entendemos lo que más te
            importa.
          </p>
          <div>
            <h4 className='text-blue-dark text-2xl font-semibold mb-3'>
              Nuestra Misión:
            </h4>
            <p className='text-gray-primary sm:!leading-7 xxs:!leading-5 text-justify font-normal sm:text-xl xxs:text-base'>
              Conectar corazones peludos con cuidadores cariñosos en tu
              comunidad. Porque tu mascota merece ser tratada como realeza,
              siempre.
            </p>
          </div>
          <div>
            <h4 className='text-blue-dark text-2xl font-semibold mb-3'>
              Confía en nosotros:
            </h4>
            <p className='text-gray-primary sm:!leading-7 xxs:!leading-5 text-justify font-normal sm:text-xl xxs:text-base'>
              Aquí la amistad es nuestra garantía. Tu mascota y su compañero de
              juegos siempre estarán protegidos.
            </p>
          </div>
        </div>
      </div>
      <img
        src={AboutUsImg}
        alt='Sobre Nosotros'
        className='w-full h-full object-cover rounded-2xl'
      />
    </SectionContainer>
  );
};
