import InforOrder from "./InforOrder";
import FormOrder from "./FormOrder";
import PaymentOrder from "./PaymentOrder";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@/hooks/useMutation";
import { courseService } from "@/services/courseService";
import { useEffect } from "react";
import { formartDate } from "@/utils/formartDate";
import { formatCurrency } from "@/utils/formatCurrency";
import { ROLE } from "@/constant/role";
import { useState } from "react";
import { useAuthenContext } from "@/components/context/AuthenContext";
import { message } from "antd";
import { orderService } from "@/services/orderService";
import PATHS from "@/constant/path";
import Button from "@/components/Button";

function CourseOrderPage() {
  const { courseSlug } = useParams();
  const navigate = useNavigate();

  const { handleGetProfileCourse, handleGetProfilePayment, courseInfor } =
    useAuthenContext();

  const { data: courseDetail, execute: executeDetailCourse } = useMutation(
    courseService.getCourseBySlug
  );

  const { data: order, execute: orderCourse } = useMutation(
    orderService.orderCourse
  );

  const courseOrdered = order?.data || [];

  console.log("courseInfor", courseInfor);

  const isOrdered = courseInfor?.some((item) => {
    return item.course.slug === courseSlug;
  });

  console.log("isOrdered", isOrdered);

  useEffect(() => {
    if (courseSlug) {
      executeDetailCourse?.(courseSlug);
    }
  }, [courseSlug]);

  const courseDetailData = courseDetail?.data || [];

  const { teams, startDate, price, tags } = courseDetailData || {};

  //modify data
  const modifiedProps = {
    ...courseDetailData,
    teacherInfor: teams?.find((item) => item.tags.includes(ROLE.teacher)),
    startDate: formartDate(startDate, "DD/MM/YYYY"),
    price: formatCurrency(price),
  };

  // validate and manage form
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    phone: "",
    email: "",
    studyForm: "",
  });

  // handle payment method
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethod = (payment) => {
    setPaymentMethod(payment);
  };

  const { profile } = useAuthenContext();

  useEffect(() => {
    setForm({
      firstName: profile.firstName || "",
      phone: profile.phone || "",
      email: profile.email || "",
    });
  }, [profile.firstName, profile.phone, profile.email]);

  const register = (registerField) => {
    return {
      name: registerField,
      err: error[registerField],
      value: form[registerField],
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  const _onSubmit = (e) => {
    e.preventDefault();

    // start validate
    const errorObject = {};

    if (!!!form.firstName) {
      errorObject.firstName = "Vui lòng nhập tên";
    }
    if (!!!form.phone) {
      errorObject.phone = "vui lòng nhập số điện thoại";
    } else if (!/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObject.phone =
        "Số điện thoại không đúng định dạng VN !!, vui lòng nhập lại";
    }
    if (!!!form.email) {
      errorObject.email = "Vui lòng nhập email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      errorObject.email = "Vui lòng nhập đúng định dạng email";
    }
    if (!!!form.studyForm) {
      errorObject.studyForm = "Vui lòng chọn thình thức học";
    }

    setError(errorObject);
    // end validate

    // handle submit
    if (Object.keys(errorObject).length > 0) {
      console.log("errorObject", errorObject);
    } else {
      if (paymentMethod) {
        const payload = {
          name: form.firstName,
          phone: form.phone,
          course: courseDetailData?.id,
          type: form.studyForm,
          paymentMethod: paymentMethod,
        };
        console.log("payload", payload);

        orderCourse(payload, {
          onSuccess: () => {
            handleGetProfileCourse?.();
            handleGetProfilePayment?.();

            navigate(PATHS.PROFILE.INDEX);
            message.success("Order thành công");
          },
          onFail: () => {
            message.error("Order thất bại");
          },
        });
      } else {
        message.error("Vui lòng chọn phương thức thanh toán");
      }
    }
  };

  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <InforOrder {...modifiedProps} />
          <FormOrder register={register} types={tags || []} disable={isOrdered} />
          <PaymentOrder
            handleChange={handlePaymentMethod}
            selectedPayment={paymentMethod}
            disable={isOrdered}
          />

          {/* addclass --processing khi bấm đăng ký */}
          <Button onClick={_onSubmit} disable={isOrdered} style={{width:"100%"}} >
            <span>Đăng ký khoá học</span>
            {/* <svg
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
            </svg> */}
          </Button>
        </div>
      </section>
    </main>
  );
}

export default CourseOrderPage;
