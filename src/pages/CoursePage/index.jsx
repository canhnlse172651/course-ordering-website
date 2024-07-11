import useQuery from "@/hooks/useQuery";
import { courseService } from "@/services/courseService";
import CourseItem from "@/components/CourseItem";
import { Empty } from "antd";


function CoursePage() {

  const {data, loading } = useQuery(courseService.getCourses)

  const courses = data?.courses || []

  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        {!loading && courses?.length === 0 ? <Empty description="No found the courses" /> : (
        <div className="courses__list" >
          {courses?.map((course, index) => {
            return (
              <CourseItem  {...course} key={course.id || index + new Date()} />
            );
          })}
        </div>
      )} 
      </div>
    </main>
  );
}

export default CoursePage;