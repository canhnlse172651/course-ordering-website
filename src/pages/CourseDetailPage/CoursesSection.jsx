import { useAuthenContext } from "@/components/context/AuthenContext";
import CourseItem from "@/components/CourseItem";
import { Empty } from "antd/es";


function CoursesSection({courses, loading}) {

  const {courseInfor} = useAuthenContext();

  
  const myCourseName = courseInfor?.map((item) => item.course.name)

  const listCourseName = courses?.map((item) => item)
  

  const relatedCourses = listCourseName?.filter(
    item =>  !myCourseName.includes(item.name) 
  );

  
   console.log('relatedCourses', relatedCourses)
  
  return (
    <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
            {
               !loading && relatedCourses?.length === 0 ? (<Empty description="No found any courses" />) :
               (
                 relatedCourses?.map((course ,index) => {

                  return (
                     <CourseItem  key={course.id} {...course} />
                  )
                 })
               )
                 
            }
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
