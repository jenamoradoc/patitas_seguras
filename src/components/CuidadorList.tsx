import { SectionContainer } from "@/containers";
import { CuidadorCard } from ".";

export const CuidadorList = () => {
  return (
    <SectionContainer className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxs:grid-cols-1 sm:mt-44 md:mt-36 xxs:mt-40 gap-8'>
      <CuidadorCard />
      <CuidadorCard />
      <CuidadorCard />
      <CuidadorCard />
      <CuidadorCard />
      <CuidadorCard />
      <CuidadorCard />
      <CuidadorCard />
    </SectionContainer>
  );
};
