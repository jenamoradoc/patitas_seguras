import {
  AboutUs,
  Featured,
  Footer,
  Header,
  Navbar,
  Newsletter,
  Reservation,
  Services,
} from "@/components";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className='bg-slate-50'>
        <Featured />
        <Reservation />
        <AboutUs />
        <Services />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};
