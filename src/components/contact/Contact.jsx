import "./contact.css"
import Phone from "../../../src/img/whatsapp.png"
import Email from "../../../src/img/email.png"
import Adress from "../../../src/img/adress.png"
import React, { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"


const Contact = () => {
  const formContact = useRef();
  const [done, setDone] = useState(false)
 
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rut9adl', 'template_zqwyq6s', formContact.current, 'ODMbDqvVN8ftnvM9A')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
};

return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Vamos discutir sobre o seu Projeto?</h1>
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
          <b>Entre em contato</b> e vamos discutir sobre as possibilidades do seu projeto!
          Te retorno o mais breve possível.
          </p>
          <form ref={formContact} onSubmit={sendEmail}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/> 
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
            {done && "Obrigada pela mensagem, te responderei em breve..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
