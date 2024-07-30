import { MODAL_TYPE } from "@/constant/general";
import { useAuthenContext } from "../context/AuthenContext";
import { localToken } from "@/utils/token";
import { Link } from "react-router-dom";
import PATHS from "@/constant/path";
import { useEffect } from "react";
function HeaderAuthen() {
  const { handleShowModal, handleLogout, profile } = useAuthenContext();

  const { profileImage, firstName } = profile || {};

  useEffect(() => {
    function hideDropDown() {
      let dropdown = $(".dropdown");
      dropdown.removeClass("active");
    }
    function dropDown() {
      let btndropdown = $("[data-dropdown]"),
        dropdown = $(".dropdown");
      btndropdown.on("click", function (e) {
        e.stopPropagation();
        let data = $(this).attr("data-dropdown");
        dropdown.removeClass("active");
        $(`.${data}`).toggleClass("active");
        closeMenu();
      });
      dropdown.on("click", function (e) {
        // e.stopPropagation();
      });

      $(document).click(function () {
        hideDropDown();
      });
    }
    const myTimeOut = setTimeout(() => {
      dropDown();
    }, 200);
  }, [profile]);

  const _onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleLogout?.();
  };
  const token = localToken.get();
  if (!!token) {
    return (
      <div className="header__logged">
        <div className="userlogged">
          <div
            className="userlogged__avatar user"
            data-dropdown="userlogged__dropdown"
          >
            <div className="userlogged__avatar-img user__img">
              <img
                src={profileImage || "/img/avatar_nghia.jpg"}
                alt="Avatar teacher"
              />
            </div>
            <i className="userlogged__avatar-icon">
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
              </svg>
            </i>
          </div>
          <div className="userlogged__dropdown dropdown">
            <div className="userlogged__dropdown-info">
              <div className="user__img">
                <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
              </div>
              <a href="student-profile.html" className="user__info">
                <p className="title --t4">
                  <strong>{firstName}</strong>
                </p>
                <span className="email">Thông tin tài khoản</span>
              </a>
            </div>
            <div className="userlogged__dropdown-list">
              <Link to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi </Link>
              <Link to={PATHS.PROFILE.MY_PAYMENT}>Lịch sử thanh toán</Link>
              <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
              <a style={{ pointerEvents: "auto" }} href="#" onClick={_onClick}>
                Đăng xuất
                <i>
                  <img src="/img/iconlogout.svg" alt="" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="header__auth">
      <div
        href="javascript:void(0)"
        className="btn btn--transparent btnmodal"
        data-modal="mdlogin"
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            handleShowModal(MODAL_TYPE.register);
          }}
        >
          Đăng ký /&nbsp;
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            handleShowModal(MODAL_TYPE.login);
          }}
        >
          Đăng nhập
        </span>
      </div>
    </div>
  );
}

export default HeaderAuthen;
