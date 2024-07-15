import { NavLink, Outlet } from "react-router-dom";
import { useAuthenContext } from "@/components/context/AuthenContext";
import Sidebar from "./Sidebar";

function StudentProfile() {
  const { profile } = useAuthenContext();


  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
         <Sidebar    {...profile}   />
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink end to="/profile">
                  Thông tin cá nhân
                </NavLink>
                <NavLink end to="/profile/my-course">
                  Thông tin khóa học
                </NavLink>
                <NavLink end to="/profile/my-payment">
                  Thông tin thanh toán
                </NavLink>
              </div>
              <div className="tab__content">
                <Outlet />
                {/* Thông tin cá nhân */}

                {/* Khoá học của tôi */}

                {/* Lịch sử thanh thánh */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StudentProfile;
