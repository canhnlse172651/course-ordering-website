import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const { pathname } = useLocation();

  const [isShowNav, setIsShowNav] = useState(false);

  useEffect(() => {
    // scroll on top when move another page

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setIsShowNav(false);
  }, [pathname]);

  const handleShowNav = (show) => {
    setIsShowNav(show);
  };

  return (
    <MainContext.Provider value={{ isShowNav, handleShowNav }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
