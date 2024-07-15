import Input from "@/components/Input";
import { useAuthenContext } from "@/components/context/AuthenContext";
import { useEffect, useState } from "react";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import { message } from "antd";
function MyInfor() {
  const { profile, handleUpdateProfile } = useAuthenContext();
 

  const { firstName, introduce, email, phone, website, facebookURL, lastName } =
    profile || {};

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName : "",
    phone: "",
    email: "",
    facebookURL: "",
    website: "",
    introduce :"",
  });

  useEffect(() => {
    setForm({
      firstName,
      lastName,
      phone,
      email,
      facebookURL,
      website,
      introduce,
    });
  }, [profile]);

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

    if (!!!form.firstName) {
      errorObject.firstName = "Vui lòng nhập tên";
    }
    if (!!!form.phone) {
      errorObject.phone = "vui lòng nhập số điện thoại";
    } else if (!/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObject.phone =
        "Số điện thoại không đúng định dạng VN !!, vui lòng nhập lại";
    }
    if (!!!form.email) {
      errorObject.email = "Vui lòng nhập email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      errorObject.email = "Vui lòng nhập đúng định dạng email";
    }

    if (
      !/https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([\/\w\.-]*)*\/?/.test(
        form.facebookURL
      )
    ) {
      errorObject.facebookURL =
        "link facebook sai định dạng !! , vui lòng thử lại";
    }

    if (
      !/https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([\/\w\.-]*)*\/?/.test(
        form.website
      )
    ) {
      errorObject.website = "Website không đúng định dạng !!, vui lòng thử lại";
    }

    setError(errorObject);
    // end validate

    // handle submit
    if (Object.keys(errorObject).length > 0) {
      message.error("Lưu Thông tin thất bại");
    } else {
      // start loading
     
      
      setLoading(true);
       handleUpdateProfile?.(form)
      //  window.location.reload();
       
    }
  };

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="form">
        <div className="form-container">
          <Input
            label="Họ Và Tên"
            required
            placeholder="Họ Và Tên"
            {...register("firstName")}
          />
          <Input
            label="Số điện thoại"
            required
            placeholder="Số điện thoại"
            {...register("phone")}
          />
        </div>
        <div className="form-container">
          <Input
            label="Email"
            required
            placeholder="Email"
            {...register("email")}
          />
          <Input label="Mật khẩu" value="*******" disabled />
        </div>
        <Input
          label="facebook link"
          required
          placeholder="facebook link"
          {...register("facebookURL")}
        />
        <Input
          label="website"
          required
          placeholder="website"
          {...register("website")}
        />
        <Input
          label="Gioi thiệu bản thân"
          renderInput={(inputProps) => {
            return <TextArea {...inputProps} />;
          }}
          {...register("introduce")}
        />

        <Button
          onClick={_onSubmit}
          className="btnmodal"
          style={{ width: "100%" }}
        >
          send
        </Button>
      </div>
    </div>
  );
}

export default MyInfor;
