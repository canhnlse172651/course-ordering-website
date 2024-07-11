import { MODAL_TYPE } from "@/constant/general";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import ComponentLoading from "../ComponentLoading";
import { useAuthenContext } from "../context/AuthenContext";
import { message } from "antd";
const LoginForm = () => {
  const { handleShowModal, handleShowModalClose, handleLogin, handlePrivateRegister,privateRegister } =
    useAuthenContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const [loading, setLoading] = useState(false);

  const register = (registerField) => {
    return {
      name: registerField,
      err: error[registerField],
      value: form[registerField],
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  const _onSubmit = (e) => {
    e.preventDefault();

    // start validate
    const errorObject = {};

    if (!!!form.email) {
      errorObject.email = "Vui lòng nhập email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      errorObject.email = "Vui lòng nhập đúng định dạng email";
    }

    if (!!!form.password) {
      errorObject.password = "Vui lòng nhập password";
    }

    setError(errorObject);
    // end validate

    // handle submit
    if (Object.keys(errorObject).length > 0) {
       message.error("submit thất bại")
    } else {
      // start loading
      setLoading(true);
      // call API
      console.log("Start API");
      handleLogin?.(form, () => {
        setTimeout(() => {
          // Finish API
          console.log("End API");
          handleShowModalClose?.();
          // stop loading
          setLoading(false);
        }, 2000);
      });
    }
  };

  return (
    <div
      className="modal__wrapper-content mdlogin active"
      style={{ position: "relative" }}
    >
      {loading && <ComponentLoading />}
      <div className="form__bottom">
        <p>Bạn chưa có tài khoản?</p>
        <div
          className="color--primary btnmodal"
          onClick={() => {
            handleShowModal(MODAL_TYPE.register)
            handlePrivateRegister(!privateRegister)
          }
                      
          }
        >
          <strong>Đăng ký</strong>
        </div>
      </div>
      <span className="line">Hoặc</span>
      <form onSubmit={_onSubmit} className="form">
        <Input
          label="Email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <Input
          label="Password"
          placeholder="Password"
          required
          type="password"
          {...register("password")}
        />
        <Button className="form__btn-register" type="submit">
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
