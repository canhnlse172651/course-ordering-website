import BannerSection from "./BannerSection";
import AboutStorySection from "./AboutStorySection";
import AboutBenifitSection from "./AboutBenifitSection";
import AboutNumbersSection from "./AboutNumbersSection";
import AboutStudySection from "./AboutStudySection";
import AboutGallerySection from "./AboutGallerySection";
import AboutTeacherSection from "./AboutTeacherSection";
import CallregisterSection from "./CallRegisterSection";

function AboutPage() {
  return (
    <main className="mainwrapper aboutpage">
      <BannerSection />
      <AboutStorySection />
      <AboutBenifitSection />
      <AboutNumbersSection />
      <AboutStudySection />
      <AboutGallerySection />
      <AboutTeacherSection />
      <CallregisterSection />
    </main>
  );
}

export default AboutPage;
