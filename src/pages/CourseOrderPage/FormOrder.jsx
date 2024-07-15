import Input from "@/components/Input";
import Select from "@/components/Select";

function FormOrder({ register, types, disable }) {
  const typeOptions =
    types?.length > 0
      ? [
          { value: "", label: "--" },
          ...types.map((type) => ({ value: type, label: type })),
        ]
      : [{ value: "", label: "--" }];

  return (
    <div className="itemorder formorder">
      <h3 className="title --t3">Thông tin cá nhân</h3>
      <div className="boxorder">
        <div className="form">
          <div className="form-container">
            <Input
              label="Họ Và Tên"
              required
              placeholder="Họ Và Tên"
              {...register("firstName")}
              disabled = {disable}
            />
            <Input
              label="Email"
              required
              placeholder="Email của bạn"
              {...register("email")}
              disabled = {disable}
            />
          </div>
          <div className="form-container">
            <Input
              label="Số điện thoại"
              required
              placeholder="Số điện thoại"
              {...register("phone")}
              disabled = {disable}
            />
            <Input
              label="Hình thức học"
              required
              renderInput={(inputProps)=> {
                return <Select options={typeOptions} {...inputProps} />
              }}
              {...register("studyForm")}
              disabled = {disable}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormOrder;
