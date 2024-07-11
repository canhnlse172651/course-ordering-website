import { Navigate, Outlet } from "react-router-dom";
import { localToken } from "@/utils/token";
import { useAuthenContext } from "../context/AuthenContext";
import { MODAL_TYPE } from "@/constant/general";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function PrivateRoute() {
  const { handleShowModal, privateRegister } = useAuthenContext();
  const location = useLocation();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (!localToken.get()?.accessToken) {
      if (!privateRegister) {
        handleShowModal(MODAL_TYPE.login, location.pathname); // get location where the page show model login
      } else {
        handleShowModal(MODAL_TYPE.register);
      }
    } else {
      setIsAuthChecked(true);

      
    }
  }, [location, handleShowModal]);

  return <Outlet />;
}

export default PrivateRoute;
