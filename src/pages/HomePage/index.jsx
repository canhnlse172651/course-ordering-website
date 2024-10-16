import useQuery from "@/hooks/useQuery";
import { courseService } from "@/services/courseService";
import { teamService } from "@/services/teamServices";
import { questionService } from "@/services/questionService";
import { galleryService } from "@/services/galleryService";
import HeroSection from "./HeroSection";
import CourseComingSection from "./CourseComingSection";
import CourseSection from "./CoursesSection";
import TeacherSection from "./TeacherSection";
import FeaturedSection from "./FeaturedSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import CallregisterSection from "./CallRegisterSection";

function HomePage() {
  const {
    data: courseData,
    error: courseError,
    loading: courseLoading,
    refetch,
  } = useQuery(courseService.getCourses);

  const courses = courseData?.courses || [];

  const commingCourses = courses.filter((course) => {
    return course?.startDate && new Date(course?.startDate) > new Date();
  });
  
  // If commingCourses is empty, fallback to courses
  const finalCommingCourses = commingCourses.length > 0 ? commingCourses : courses;
  
  
  const {
    data: coachData,
    error: coachError,
    loading: coachLoading,
    refetch : refetchCoaching,
  } = useQuery(teamService.getAllCoach);

  const teamCoaching = coachData?.teams || []


  const {
    data: faqData,
    error: faqError,
    loading: faqLoading,
    refetch : refetchFaq,
  } = useQuery(questionService.getAllQuestion);

    
  const questions = faqData?.questions || []


  // const {
  //   data: galleryData,
  //   error: galleryError,
  //   loading: galleryLoading,
  //   refetch : refetchGallery,
  // } = useQuery(galleryService.getAllGalleries);

  
  // const galleryImage  = galleryData?.galleries[0]?.images || [];



  return (
    <main className="mainwrapper">
      <HeroSection />
      <CourseComingSection commingCourses={finalCommingCourses} loading={courseLoading} />
      <CourseSection  courses={courses}  loading={courseLoading} />
       <TeacherSection  teachers={teamCoaching} loading = {coachLoading} />
      <FeaturedSection />
      {/* --------------------------------Testimonial-------------------------------- */}
      <TestimonialSection />
      {/* --------------------------------faq-------------------------------- */}
      <FaqSection  questions = {questions} loading = {faqLoading}  />
      {/* <GallerySection galleries = {galleryImage} loading = {galleryLoading}  /> */}
      <CallregisterSection />
    </main>
  );
}

export default HomePage;
