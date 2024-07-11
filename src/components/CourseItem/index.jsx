

import PATHS from "@/constant/path";
import { ROLE } from "@/constant/role";
import { formartDate } from "@/utils/formartDate";
import { COURSE_ITEM_TYPE } from "@/constant/general";
import { formatCurrency } from "@/utils/formatCurrency";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

function CourseItem({
  type = COURSE_ITEM_TYPE.normal,
  image,
  slug,
  name,
  teams,
  startDate,
  tags,
  price,
}) {
  const detailPath = PATHS.COURSE.INDEX + `/${slug}`;
  const orderPath = PATHS.COURSE.ORDER_SLUG + `/${slug}`;


  const teacherInfor = teams?.find((item) => item.tags.includes(ROLE.teacher));

  if (type === COURSE_ITEM_TYPE.normal) {
    return (
      <div className="courses__list-item">
        <div className="img">
          <Link to={detailPath}>
            <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
            <span className="course__img-badge badge">{tags.join(" | ")}</span>
          </Link>
        </div>
        <div className="content">
          <p className="label">Front-End</p>
          <h3 className="title --t3">
            <Link to={detailPath}>{name}</Link>
          </h3>
          <div className="content__info">
            {teacherInfor?.id && (
              <div className="user">
                <div className="user__img">
                  <img src={teacherInfor.image} alt="Avatar teacher" />
                </div>
                <p className="user__name">{teacherInfor.name}</p>
              </div>
            )}
            <div className="price">
              <strong>{formatCurrency(price)}</strong>
            </div>
          </div>
          {/* <div className="content__action">
            <Link to={orderPath} className="btn btn--primary">
              Đăng ký ngay
            </Link>
            <Link to={detailPath} className="btn btn--default">
              <img src="/img/icon-paper.svg" alt="icon paper" />
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
 // comming course 
  return (
    <div className="coursecoming__item">
      <div className="coursecoming__item-img">
        <Link to={detailPath}>
          <img src={image || ""} alt="Khóa học sắp ra mắt CFD" />
        </Link>
      </div>
      <div className="coursecoming__item-content">
        <p className="category label">Front-end</p>
        <h2 className="title --t2">
          <Link to={detailPath}>{name || ""}</Link>
        </h2>
        {teacherInfor?.id && (
          <div className="user">
            <div className="user__img">
              <img src={teacherInfor.image} alt="Avatar teacher" />
            </div>
            <p className="user__name">{teacherInfor.name || ""}</p>
          </div>
        )}
        <div className="info">
          {startDate && (
            <div className="labeltext">
              <span className="label --blue">Ngày khai giảng</span>
              <p className="title --t2">
                {formartDate(startDate, "DD/MM/YYYY")}
              </p>
            </div>
          )}
          {tags?.length > 0 && (
            <div className="labeltext">
              <span className="label --blue">Hình thức học</span>
              <p className="title --t2">{tags.join(" | ")}</p>
            </div>
          )}
        </div>
        <div className="btnwrap">
          <Button link={orderPath} className="btn btn--primary">
            Đăng Ký Học
          </Button>
          <Button link={detailPath} className="btn btn--border --black">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
