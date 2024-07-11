import InforOrder from "./InforOrder";
import FormOrder from "./FormOrder";
import PaymentOrder from "./PaymentOrder";
import { useParams } from "react-router-dom";
import { useMutation } from "@/hooks/useMutation";
import { courseService } from "@/services/courseService";
import { useEffect } from "react";
import { formartDate } from "@/utils/formartDate";
import { formatCurrency } from "@/utils/formatCurrency";
import { ROLE } from "@/constant/role";

function CourseOrderPage() {
  const { courseSlug } = useParams();
  const { data: courseDetail, execute: executeDetailCourse } = useMutation(
    courseService.getCourseBySlug
  );

  useEffect(() => {
    if (courseSlug) {
      executeDetailCourse?.(courseSlug);
    }
  }, [courseSlug]);

  const courseDetailData = courseDetail?.data || [];

  const { teams, startDate, price } = courseDetailData || {};

  //modify data
  const modifiedProps = {
    ...courseDetailData,
    teacherInfor: teams?.find((item) => item.tags.includes(ROLE.teacher)),
    startDate: formartDate(startDate, "DD/MM/YYYY"),
    price: formatCurrency(price),
  };

  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <InforOrder {...modifiedProps} />
          <FormOrder />
          <PaymentOrder />

          {/* addclass --processing khi bấm đăng ký */}
          <div className="btn btn--primary">
            <span>Đăng ký khoá học</span>
            <svg
              version="1.1"
              id="L9"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 0 0"
              xmlSpace="preserve"
            >
              <path
                fill="#fff"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CourseOrderPage;
