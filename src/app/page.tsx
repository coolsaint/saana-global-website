import {
  Header,
  HeroSection,
  InquiryBar,
  CarGrid,
  FeaturesSection,
  AuctionRequestForm,
  Footer,
  FAB,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InquiryBar />
        <CarGrid />
        <FeaturesSection />
        <AuctionRequestForm />
      </main>
      <Footer />
      <FAB />
    </>
  );
}
