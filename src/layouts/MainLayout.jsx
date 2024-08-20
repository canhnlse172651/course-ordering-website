import Header from "@/components/Header";
import Footter from "@/components/Footer";
// import Loading from "@/components/PageLoading";
import Nav from "@/components/Nav";
import Overlay from "@/components/Overlay";
import LoginModel from "@/components/LoginModal";
import { Outlet } from "react-router-dom";
import { MainContextProvider } from "@/components/context/MainContext";
import { AuthenContextProvider } from "@/components/context/AuthenContext";
function MainLayout() {
  return (
    <MainContextProvider>
      <AuthenContextProvider>
        {/* <Loading /> */}
        <Header />
        <Nav />
        <Overlay />
        <Outlet />
        <Footter />
        <LoginModel />
      </AuthenContextProvider>
    </MainContextProvider>
  );
}

export default MainLayout;
