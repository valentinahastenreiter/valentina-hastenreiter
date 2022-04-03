import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey 👋, meu nome é </h2>
          <h1 className="i-name">Valentina Hastenreiter</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">UI/UX Designer</div>
            <div className="i-title-item">Interior Design</div>
            <div className="i-title-item">Writer</div>
            <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            Sou uma desenvolvedora Front-end e busco me especializar em criar estilos, wesites modernos e e-commerce. 
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
      </div>
        <img src={Me} alt="Foto pessoal" className="i-img"/>
      </div>
    </div>
  )
}

export default Intro

