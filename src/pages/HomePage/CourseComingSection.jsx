import { useEffect } from "react";
import { Empty } from "antd";
import CourseItem from "@/components/CourseItem";

function CourseComingSection({ commingCourses, loading }) {

  console.log('🚀---->commingCourses', commingCourses);
  useEffect(() => {
    function courseComingList() {
      let courseComingSlider = $("#coursecoming__slider");
      courseComingSlider.flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        dragThreshold: 0,
        wrapAround: true,
      });

      $(".coursecoming .control .control__next").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("next");
      });
      $(".coursecoming .control .control__prev").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("previous");
      });
    }

    if (!!commingCourses?.length) {
      courseComingList();
    }
  }, [JSON.stringify(commingCourses)]);

  return (
    <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <div className="control">
            <div className="control__prev">
              <img src="/img/icon-btn-control.svg" alt="icon prev" />
            </div>
            <div className="control__next">
              <img src="/img/icon-btn-control.svg" alt="icon next" />
            </div>
          </div>
        </div>
      </div>
      {!loading && commingCourses?.length === 0 ? <Empty description="No found the courses" /> : (
        <div className="coursecoming__list" id="coursecoming__slider">
          {commingCourses?.map((course, index) => {
            return (
              <CourseItem type="slider" {...course} key={course.id || index + new Date()} />
            );
          })}
        </div>
      )} 
     
    </section>
  );
}

export default CourseComingSection;
