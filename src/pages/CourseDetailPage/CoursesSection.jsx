import CourseItem from "@/components/CourseItem";
import { Empty } from "antd/es";


function CoursesSection({courses, loading}) {

  
  return (
    <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
            {
               !loading && courses?.length === 0 ? (<Empty description="No found any courses" />) :
               (
                 courses?.map((course ,index) => {

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
