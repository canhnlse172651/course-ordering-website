import { useAuthenContext } from "@/components/context/AuthenContext";
import { MODAL_TYPE } from "@/constant/general";
import PATHS from "@/constant/path";
import { localToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

function HeroSection() {
  const navigate = useNavigate();
  const { handleShowModal } = useAuthenContext();

  const _start = () => {
    if (!!localToken.get()) {
      navigate(PATHS.PROFILE.MY_COURSE);
    } else {
      handleShowModal?.(MODAL_TYPE.login);
    }
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="container">
          <h1 className="title --white">
            {/* Học Viện Đào Tạo */}
            {/* <br /> Lập Trình Front-End Thực Chiến */}
             Học Lập Trình Online
          </h1>
          <p className="text">
            {/* Dạy từ kinh nghiệm, học từ thực tế để tạo ra sản phẩm có giá trị. */}
          </p>
          <Button onClick={_start} className="btnmodal" data-modal="mdlogin">
            Bắt đầu học
          </Button>
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container-fluid">
          <div className="hero__bottom-social">
            <a href="https://www.facebook.com/cfdcircle" target="_blank">
              <img src="/img/icon-facebook.svg" alt="Facebook CFD" />
            </a>
            <a href="https://www.youtube.com/cfdcircle" target="_blank">
              <img src="/img/icon-youtube.svg" alt="Youtube CFD" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__background">
        <img
          className="hero__background-img"
          src="img/bg-hero-home.jpg"
          alt="CFD Training Background"
         
        />
        <div
          className="hero__background-video"
          data-src="video/CFD-video-bg2.mp4"
        />
      </div>
    </section>
  );
}

export default HeroSection;
