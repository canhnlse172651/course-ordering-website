import Button from "../Button";
import Input from "../Input";
import PATHS from "@/constant/path";
import { MODAL_TYPE } from "@/constant/general";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComponentLoading from "../ComponentLoading";
import { useAuthenContext } from "../context/AuthenContext";

const RegisterForm = () => {
  const { handleShowModal, handleShowModalClose, handleRegister, handlePrivateRegister,privateRegister } =
    useAuthenContext();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

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

    if (!!!form.name) {
      errorObject.name = "Vui lòng nhập họ và tên";
    }

    if (!!!form.email) {
      errorObject.email = "Vui lòng nhập email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      errorObject.email = "Vui lòng nhập đúng định dạng email";
    }

    if (!!!form.password) {
      errorObject.password = "Vui lòng nhập mật khẩu";
    }

    if (!!!form.confirmPassword) {
      errorObject.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (form.password !== form.confirmPassword) {
      errorObject.confirmPassword = "Mật khẩu xác nhận không đúng";
    }

    setError(errorObject);
    // end validate

    if (Object.keys(errorObject)?.length > 0) {
      console.log("Submit error", errorObject);
    } else {
      setLoading(true);
      handleRegister?.(form, () => {
        setLoading(false);
        console.log("end API");
      });
    }
  };
  return (
    <div
      className="modal__wrapper-content mdregister active"
      style={{ position: "relative" }}
    >
      {loading && <ComponentLoading />}
      <div className="form__bottom">
        <p>Bạn đã có tài khoản?</p>
        <div
          className="color--primary btnmodal"
          data-modal="mdlogin"
          onClick={() => {
            handleShowModal(MODAL_TYPE.login)
            handlePrivateRegister(!privateRegister)
          }}
        >
          <strong>Đăng nhập</strong>
        </div>
      </div>
      <form onSubmit={_onSubmit} className="form">
        <Input
          label="Họ và tên"
          placeholder="Họ và tên"
          required
          {...register("name")}
        />
        <Input
          label="Email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <Input
          label="Mật khẩu"
          placeholder="Mật khẩu"
          required
          type="password"
          {...register("password")}
        />
        <Input
          label="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
          required
          type="password"
          {...register("confirmPassword")}
        />
        <p className="form__argee">
          Với việc đăng ký, bạn đã đồng ý{" "}
          <Link
            className="color--primary"
            to={PATHS.PRIVACY}
            onClick={handleShowModalClose}
          >
            Chính Sách Điều Khoản
          </Link>{" "}
          của CFD
        </p>
        <Button className="form__btn-register" type="submit">
          Đăng ký tài khoản
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
