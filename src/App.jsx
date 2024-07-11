import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";
import StudentProfile from "./pages/StudentProfile";
import PrivacyPage from "./pages/PrivacyPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseOrderPage from "./pages/CourseOrderPage";
import BlogDetail from "./pages/BlogDetail";
import MyInfor from "./pages/StudentProfile/MyInfor";
import MyCourse from "./pages/StudentProfile/MyCourse";
import MyPayment from "./pages/StudentProfile/MyPayment";
import PATHS from "./constant/path";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PATHS.COURSE.INDEX} element={<CoursePage />} />
        <Route path={PATHS.COURSE.DETAIL} element={<CourseDetailPage />} />

        
         
          <Route path={PATHS.BLOG.INDEX} element={<BlogPage />}/>
          <Route path={PATHS.BLOG.DETAIL} element={<BlogDetail />} />
      

        <Route path={PATHS.ABOUT} element={<AboutPage />} />

        <Route element={<PrivateRoute />}>
          <Route path={PATHS.COURSE.ORDER} element={<CourseOrderPage />} />
          <Route path={PATHS.PROFILE.INDEX} element={<StudentProfile />}>
            <Route index element={<MyInfor />} />
            <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
            <Route path={PATHS.PROFILE.MY_PAYMENT} element={<MyPayment />} />
          </Route>
        </Route>

        <Route path={PATHS.CONTACT} element={<ContactPage />} />
        <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />

        <Route />
      </Route>
    </Routes>
  );
}

export default App;
