import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className = "" }: Props) => {
  return (
    <section
      className={`xxs:px-2 xxs:py-6 xxs:mx-0 sm:py-10 xxs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto ${className}`.trim()}
    >
      {children}
    </section>
  );
};
