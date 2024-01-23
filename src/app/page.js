import Banner from "@/components/homeComponents/Banner";
import Faq from "@/components/homeComponents/Faq";
import SurveyBenefits from "@/components/homeComponents/SurveyBenefits";
import WhatPeopleSay from "@/components/homeComponents/WhatPeopleSay";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SurveyBenefits />
      <WhatPeopleSay />
      <Faq></Faq>
      <Footer />
    </>
  );
};

export default HomePage;