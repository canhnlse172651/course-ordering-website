import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactSideBar from "./ContactSidebar";
import { useNavigate } from "react-router-dom";
function ContactPage() {

  const navigate  = useNavigate()
  
  const handleFormSubmit = (formData) => {
   
    // send data to sever
     console.log('formData', formData)

     // back to home page after submit form
     setTimeout(() => {
          navigate("/")
     },1000)

  }

  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactHeader/>
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
             <ContactSideBar/> 
              <ContactForm 
               handleFormSubmit = {handleFormSubmit}
              /> 
          </div>
        </div>
      </div>
    </main>
  );
}


export default ContactPage;