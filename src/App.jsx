import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CompanysLogo from "../components/CompaniesLogo";
import SubService from "../components/SubService";
import subServiceData from "../components/subServiceData";
import Service2nd from "../components/Service2nd";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Trail from "../components/Trial";
import Footer from "../components/footer";




// import { useState } from 'react'
function App() {

  return (
    <>
      {/* Header  */}
      <Header />

      {/* Hero Section */}
      <HeroSection heroImageUrl="./assets/hero.png" />

      {/* CompanysLogos */}
      <CompanysLogo />

      {/* Service -1 */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <SubService data={subServiceData[0]} orderChange={false} />
        <SubService data={subServiceData[1]} orderChange={true} />
      </div>

      {/* Service -2  */}
      <Service2nd></Service2nd>

      {/* Testimonial */}
      <Testimonial name="Micheal Gough" position="CEO at Google" imgUrl="./assets/avatar/michael-gouch.png" comment="Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."/>

      {/* Pricing */}
      <Pricing/>

      {/* FAQ */}
      <Faq />

      {/* Trail  */}
      <Trail />

      {/* footer */}

      <Footer/>
    </>
  );
}

export default App;
