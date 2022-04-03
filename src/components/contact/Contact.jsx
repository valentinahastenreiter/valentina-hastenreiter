import "./contact.css"
import Phone from "../../../src/img/whatsapp.png"
import Email from "../../../src/img/email.png"
import Adress from "../../../src/img/adress.png"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_rut9adl', 'service_rut9adl', form.current, 'ODMbDqvVN8ftnvM9A')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img 
              src={Phone} 
              alt="" 
              className="c-icon"
              />
              +55 27 99274-6778
            </div>
            <div className="c-info-item">
              <img 
              src={Email} 
              alt="" 
              className="c-icon"
              />
              valentina.hastenreiter@gmail.com
            </div>
            <div className="c-info-item">
              <img 
              src={Adress} 
              alt="" 
              className="c-icon"
              />
              Vitória, ES.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor sit amet consectetur</b>adipisicing elit. Sunt, dolore repellat libero veniam obcaecati quam minus eaque aliquam aliquid ad necessitatibus labore nulla nesciunt nobis suscipit cum quisquam molestias fugiat!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subject" name="user_subject"/>
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
