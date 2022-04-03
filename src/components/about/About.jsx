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
        <h1 className="a-title">About me</h1>
        <p className="a-sup">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique, illo qui ut, quia molestiae id fuga placeat sit corrupti debitis culpa vero labore nobis distinctio laboriosam. Laborum, asperiores quaerat?
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni, magnam cumque pariatur asperiores error porro minima maiores at fugiat minus laborum esse doloremque deserunt ut quibusdam voluptate commodi veniam.
        </p>
      </div>
    </div>
  )
}

export default About
