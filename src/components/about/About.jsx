import "./about.css"
import Foto from "../../img/tina.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" ></div>
        <div className="a-card">
          <img src={Foto} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sup">
        Olá! Com a vida em constante movimento, traduzi um sonho no meu trabalho e me
        desenvolvi na área de <b>Engenharia Civil</b>, com uma paixão intensa por 
        Design de Interiores e sua maneira de <b>conectar espaços a pessoas</b>.
        </p>
        <p className="a-desc">
        Descobri no campo da tecnologia da informação a possibilidade de mudança de carreira e 
        traduzir novas formas de interações como <b>Desenvolvedora Front-End</b>.
        </p>
        <p className="a-desc">
        Quer saber mais sobre mim? Me siga no <a a-link href="https://www.linkedin.com/in/valentina-hastenreiter/">LindekIn</a>
        </p>
      </div>
    </div>
  )
}

export default About
