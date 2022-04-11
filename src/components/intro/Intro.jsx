import "./intro.css"


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hey 👋, meu nome é </h2>
          <h1 className="i-name">Valentina Hastenreiter</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
            <div className="i-title-item">Desenvolvedora</div>
            <div className="i-title-item">Interior Design</div>
            <div className="i-title-item">Design lover</div>
            </div>
          </div>
          <p className="i-desc">
            Sou uma desenvolvedora Front-end, polímata e apaixonada por Design.   
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro

