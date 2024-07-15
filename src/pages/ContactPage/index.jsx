import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactSideBar from "./ContactSidebar";
import { useNavigate } from "react-router-dom";
import contactService from "@/services/contactService";
import { message } from "antd";

function ContactPage() {
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.topic,
      description: formData.content,
    };

    // send data to sever

    try {
      const res = await contactService.getContact(payload);

      if (res?.data) {
        message.success("Tạo liên hệ thành công");
         // back to home page after submit form success
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        message.error("Tạo liên hệ thất bại");
      }
    } catch (error) {
      console.log("error", error);
    }

   
  };

  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactHeader />
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSideBar />
            <ContactForm handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
