import { useAuthenContext } from "@/components/context/AuthenContext";
import CourseItem from "@/components/CourseItem";
import { Empty } from "antd";

function MyCourse() {
  const { courseInfor } = useAuthenContext();

  
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {courseInfor?.length === 0 ? (
          <Empty
            description="No found any course"
            style={{ margin: "0 auto" }}
          />
        ) : (
          courseInfor?.map((course, index) => {
            const { name, price, image, tags, title, slug } = course.course;

            return (
              <CourseItem
                key={index + new Date()}
                name={name}
                price={price}
                image={image}
                tags={tags}
                title={title}
                slug={slug}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default MyCourse;
