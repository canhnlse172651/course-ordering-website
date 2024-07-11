import { Empty } from "antd";
import Button from "@/components/Button";
import PATHS from "@/constant/path";
import CourseItem from "@/components/CourseItem";

function CourseSection({courses, courseLoading}) {

  return (
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Tất cả <span className="color--primary">khóa học</span>
          </h2>
        </div>
        <div className="courses__list">
         
           {
             !courseLoading && courses?.length === 0 ? <Empty style={{margin:"0 auto"}} description = "No found any course" /> :
             courses && courses.map((course,index) => {
              return (
                <CourseItem  key = {course?.id || index + new Date()}  {...course}/>
               
              )
            })
           }
        </div>
        <div className="courses__btnall">
         
          <Button link={PATHS.COURSE.INDEX} className="course__btn" variant="grey">
            Tất cả khoá học
          </Button>
        </div>
      </div>
    </section>
  );
}


export default CourseSection;