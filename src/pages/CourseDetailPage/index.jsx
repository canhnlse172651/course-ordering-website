
import HeroDetailSection from "./HeroDetailSection";
import ContentDetailSection from "./ContentDetailSection";
import FeaturedSection from "./FeaturedSection";
import FeqSection from "./FaqSection";
import CoursesSection from "./CoursesSection";
import { useMutation } from "@/hooks/useMutation";
import { courseService } from "@/services/courseService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ROLE } from "@/constant/role";
import { formartDate } from "@/utils/formartDate";
import { formatCurrency } from "@/utils/formatCurrency";
import useQuery from "@/hooks/useQuery";
import { questionService } from "@/services/questionService";

function CourseDetailPage() {

  const params = useParams();
  const {courseSlug} = params;

  const {
    data : questionData,
    loading : questionLoading
  } = useQuery (questionService.getAllQuestion)

  const {
    data : coursesData,
    loading : coursesLoading
  } = useQuery (courseService.getCourses)


  const {
    data : courseDetailData,
    loading : courseDetailLoading,
    execute,
  } = useMutation(courseService.getCourseBySlug);


  useEffect(() => {
    if(courseSlug) {
      execute(courseSlug, {})

    }
  },[courseSlug])

  //modify data

  const questions = questionData?.questions || []

  const courses = coursesData?.courses || []

  const courseDetail = courseDetailData?.data


  const {teams, startDate, price} = courseDetail || {}
  
  const orderLink = '/course-order/' + courseSlug;

  const modifiedProps = {
    ...courseDetail,
    teacherInfor : teams?.find((item) => item.tags.includes(ROLE.teacher)),
    startDate : formartDate(startDate,"DD/MM/YYYY"),
    price : formatCurrency(price),
    orderLink,

  }
 
  return (
    <main className="mainwrapper coursedetailpage">
     <HeroDetailSection {...modifiedProps}  loading={courseDetailLoading}/>
     <ContentDetailSection   {...modifiedProps} loading={courseDetailLoading} />
     <FeaturedSection  />
      <FeqSection  questions={questions}  loading={questionLoading}/>
     <CoursesSection   courses={courses}  loading={coursesLoading} />
    </main>
  );
}

export default CourseDetailPage;