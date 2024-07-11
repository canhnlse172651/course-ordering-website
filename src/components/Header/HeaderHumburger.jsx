import { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";

function HeaderHumburger() {

  const {isShowNav, handleShowNav} = useContext(MainContext);

  useEffect(() => {
    if (isShowNav) {
      $("body").addClass("menu-show");
    } else {
      $("body").removeClass("menu-show");
    }
  }, [isShowNav]);

    
  const tonggleMenu = (e) => {
    e.stopPropagation();
    handleShowNav?.(!isShowNav)
  }

  return (
    <div className = {`header__humburger ${!!isShowNav ? "--close" : ""}`} onClick={tonggleMenu} >
      <div className="header__humburger-button">
        <span />
        <span />
        <span />
      </div>
      <div className="header__humburger-text">
       {<span>{!!isShowNav ? "Đóng" : ""}</span>}
      </div>
    </div>
  );
}

export default HeaderHumburger;
