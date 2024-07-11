import React, { createContext, useContext, useEffect, useState } from "react";
import { authenService } from "@/services/authenService";
import { MODAL_TYPE } from "@/constant/general";
import { localToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import PATHS from "@/constant/path";
import { message } from "antd";
import { orderService } from "@/services/orderService";

const AuthenContext = createContext({});

export const AuthenContextProvider = ({ children }) => {
  const [showModal, setShowMadal] = useState("");

  const [privateRegister, setPrivateRegister] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  const [profile, setProfile] = useState({});

  const [courseInfor, setCourseInfor] = useState([]);
  const [paymentInfor, setPaymentInfor] = useState([]);


 


  const navigate = useNavigate();

  const handlePrivateRegister = (state) => {
    setPrivateRegister(state);
  };

  useEffect(() => {
    if (!!localToken.get()?.accessToken){
      handleGetProfile?.();
      handleGetProfileCourse?.();
      handleGetProfilePayment?.();
    } 
  }, []);

  const handleShowModal = (type_modal, path = null) => {
    setShowMadal(type_modal || "");
    setRedirectPath(path);
  };

  const handleShowModalClose = () => {
    setShowMadal("");
  };

  const handleLogin = async (loginData, callBack) => {
    const payload = { ...loginData };

    try {
      const res = await authenService.login(payload);

      if (res?.data.data) {
        const { token: accessToken, refreshToken } = res?.data.data || {};
        // save token on client storage
        localToken.set({
          accessToken,
          refreshToken,
        });

        // get infor profile
        handleGetProfile?.();
      
        handleShowModalClose();
        message.success("Đăng nhập thành công");

        if (redirectPath) {
          navigate(redirectPath);
          setRedirectPath(null);
        } else {
          // redirect home page after login if user not access on private route (origin login)
          navigate(PATHS.HOME);
        }
        // use toast
      } else {
        console.log("Đăng nhập thất bại");
      }
    } catch (error) {
      console.log("error", error);
      //use toast
    } finally {
      callBack?.();
    }
  };

  const handleRegister = async (registerData, callBack) => {
    const payload = {
      firstName: registerData?.name,
      lastName: "",
      email: registerData?.email,
      password: registerData?.password,
    };

    try {
      const res = await authenService.register(payload);
      if (res?.data?.data?.id) {
        // call handle login after finish register
        // call handleLogin here and push email & password for login after register
        //handleLogin({payload.email, payload.password})
        message.success("Đăng ký thành công");
        handleShowModal(MODAL_TYPE.login);
      } else {
        message.success("Đăng ký thất bại");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      callBack?.();
    }
  };

  const handleLogout = () => {
    localToken.remove();
    navigate(PATHS.HOME);
    message.success("Đăng xuất thành công");
  };

  const handleGetProfile = async () => {
    try {
      const res = await authenService.getProfile();
      if (res?.data?.data) {
        setProfile(res.data.data);
      }
    } catch (error) {
      message.error(error);
      // handleLogout();
    }
  };

  const handleGetProfileCourse = async () => {
    try {
      const res = await orderService.getCourseHistories();
      const orderedCourses = res?.orders || [];
      console.log('orderedCourses', orderedCourses)

      setCourseInfor(orderedCourses);
    } catch (error) {
      console.log("error - handleGetProfileCourse", error);
    }
  };


  const handleGetProfilePayment = async () => {
    try {
      const res = await orderService.getPaymentHistories();
      const payments = res?.orders || [];
      setPaymentInfor(payments);
    } catch (error) {
      console.log("handleGetProfilePayment - error", error);
    }
  };

  const handleUpdateProfile = async (formData) => {
    if (!formData) return;

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      facebookURL: formData.facebookURL,
      website: formData.website,
      phone: formData.phone,
      introduce: formData.introduce || "",
    };

    console.log("payload", payload);
    try {
      const res = await authenService.updateProfile(payload);

       if(res?.data?.data?.id){
        console.log("res- updateProfile", res);
       
        handleGetProfile?.();
       }

      

    } catch (error) {
      console.log("handleUpdateProfile - error", error);
    }
  };
  return (
    <AuthenContext.Provider
      value={{
        showModal,
        handleShowModal,
        handleShowModalClose,
        handleLogin,
        handleRegister,
        handleLogout,
        profile,
        handlePrivateRegister,
        privateRegister,
        handleGetProfileCourse,
        handleGetProfilePayment,
        handleUpdateProfile,
        courseInfor,
        paymentInfor
       
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};

export const useAuthenContext = () => useContext(AuthenContext);
