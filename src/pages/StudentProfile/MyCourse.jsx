import { useAuthenContext } from "@/components/context/AuthenContext";
import CourseItem from "@/components/CourseItem";
import { Empty } from "antd";

function MyCourse() {
  const { courseInfor } = useAuthenContext();

  console.log("courseInfor", courseInfor);

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {courseInfor?.length === 0 ? (
          <Empty description="No found any course" style={{margin:"0 auto"}} />
        ) : (
          courseInfor?.map((course, index) => {
            <CourseItem key={index + new Date()} {...course} />;
          })
        )}
      </div>
    </div>
  );
}

export default MyCourse;
