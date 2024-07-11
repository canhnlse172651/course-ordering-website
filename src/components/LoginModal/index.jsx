import { useAuthenContext } from "../context/AuthenContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { MODAL_TYPE } from "@/constant/general";

function LoginModel() {
  const { showModal, handleShowModalClose } = useAuthenContext();

  return (
    <div className={`modal modallogin ${!!showModal ? "open" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-close" onClick={handleShowModalClose} >
          <img src="/img/close_icon.svg" alt="CFD Register" />
        </div>

        {showModal === MODAL_TYPE.login && (
           <LoginForm/>
        )}

        {showModal === MODAL_TYPE.register && (
          <RegisterForm/>
        )}
      </div>
      <div className="modal__overlay" />
    </div>
  );
}

export default LoginModel;
