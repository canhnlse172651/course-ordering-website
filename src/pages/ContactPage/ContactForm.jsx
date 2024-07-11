import Input from "@/components/Input";
import { useState } from "react";
import Button from "@/components/Button";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";

function ContactForm({ handleFormSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    content: "",
  });

  const [error, setEror] = useState({});

  const _onSubmit = () => {
    //start validate
    const errObject = {};

    if (!!!form.name) {
      errObject.name = "Please enter your name";
    }
    if (!!!form.email) {
      errObject.email = "Please enter your email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      errObject.email = "Your email is not valid !!! Please try again";
    }
    if (!!!form.phone) {
      errObject.phone = "Please enter your phone";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(form.phone)) {
      errObject.phone = "Your number phone is not valid !!! please try again";
    }
    if (!!!form.topic) {
      errObject.topic = "please choose your topic";
    }
    if (!!!form.content) {
      errObject.content = "please enter your content";
    }

    //end validate
    //handle state for UI
    setEror(errObject);

    if (Object.keys(errObject).length > 0) {
      console.log("submit-fail", errObject);
    } else {
      console.log("submit-success", form);
      handleFormSubmit?.(form);
    }
  };

  const _onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="form">
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
      <Input
        name="name"
        value={form.name}
        label="Your full name"
        required={false}
        placeholder="Please enter your full name"
        err={error.name}
        onChange={_onChange}
      />
      <Input
        name="email"
        value={form.email}
        label="Your Email"
        required={false}
        placeholder="Please enter your full Email"
        err={error.email}
        onChange={_onChange}
      />
      <Input
        name="phone"
        value={form.phone}
        label="Your number phone"
        required={false}
        placeholder="Please enter your number phone"
        err={error.phone}
        onChange={_onChange}
      />
      <Input
        name="topic"
        label="Choose the topic for support"
        required={false}
        placeholder="Please choose your toptic"
        err={error.topic}
        onChange={_onChange}
        renderInput={(inSideProps) => {
          return (
            <Select
              options={[
                { value: "", label: "--" },
                { value: "React", label: "React JS" },
                { value: "responsive", label: "Web Responsive" },
              ]}
              {...inSideProps}
            />
          );
        }}
      />
      <Input
        name="content"
        label="Content"
        required
        error={error.content}
        value={form.content}
        onChange={_onChange}
        renderInput={(inSideProps) => {
          return <TextArea {...inSideProps} />;
        }}
      />
      <div className="btncontrol">
        <Button    onClick={_onSubmit}>Send</Button>
      </div>
    </div>
  );
}

export default ContactForm;
