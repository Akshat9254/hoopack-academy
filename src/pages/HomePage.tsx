import {
  AboutMeSection,
  BannerSection,
  Footer,
  HeroSection,
  Navbar,
  OurServicesSection,
  QuoteSection,
  SubscribeForm,
} from "@/components";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <SubscribeForm />
      <AboutMeSection />
      <OurServicesSection />
      <QuoteSection />
      <BannerSection />
      <Footer />
    </div>
  );
};
export default HomePage;
