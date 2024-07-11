
import HeaderHumburger from "./HeaderHumburger";
import HeaderLogo from "./HeaderLogo";
import HeaderAuthen from "./HeaderAuthen";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PATHS from "@/constant/path";

function Header() {
  
  const {pathname} = useLocation();
  const isTransparent = [PATHS.HOME, PATHS.ABOUT].includes(pathname)
  
  useEffect (() => {
    function setBgHeader(scrollY) {
      let header = $('header')
      if (scrollY > header.height()) {
          header.addClass('--bgwhite');
      } else {
        if(isTransparent){
          header.removeClass('--bgwhite');
        }
      }
  }
  function scrollBgHeader() {
      let scrollY = $(window).scrollTop();
      if ($('.header').hasClass('--transparent')) {
          setBgHeader(scrollY);
      }
      // hideDropDown()
  }

  window.addEventListener("scroll",scrollBgHeader);

  return (() => {
    window.removeEventListener("scroll",scrollBgHeader)
  })


  },[isTransparent] )

  function setBgHeader(scrollY) {
    let header = $('header')
    if (scrollY > header.height()) {
        header.addClass('--bgwhite');
    } else {
        header.removeClass('--bgwhite');
    }
}
function scrollBgHeader() {
    let scrollY = $(window).scrollTop();
    if ($('.header').hasClass('--transparent')) {
        setBgHeader(scrollY);
    }
    hideDropDown()
}
  
  return (
    <>
      <header className="header --transparent">
        <div className="container-fluid">
         <HeaderHumburger/>
         <HeaderLogo/>
         <HeaderAuthen/>
         
        </div>
      </header>
    </>
  );
}

export default Header;
