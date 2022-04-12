import "./about.css"

import Me from "../../img/me.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-bg"></div>
        <img src={Me} alt="Foto pessoal" className="a-img"/>
        
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sup">
        Sou uma mulher transgênero e estou em processo de transição de carreira para área Tech como <b>Desenvolvedora
        Frontend</b> . Essa descisão surgiu após 8 anos de trabalho na área de
        Construção Civil, onde me iniciei como auxiliar técnica e encerrei minhas
        atividades como Subsecretária de Obras e Tecnologia, liderando um equipe
        com 4 pessoas e monitorando diversas obras.
        </p>
        <p className="a-desc">
        Minha paixão sempre foi <b>conectar espaços a pessoas</b>  e descobri na área de
        tecnologia uma possibilidade de traduzir novas formas de interações. Sendo assim, em 2021
        decidi iniciar minhar jornada num Bootcamp da <b>Reprograma</b> que finalizou em Dezembro, mas tenho mantido meu ritmo de estudo diário.
        </p>
        <p className="a-desc">
        Quer saber mais sobre mim? Me siga no <a className="a-desc-link" href="https://www.linkedin.com/in/valentina-hastenreiter/">LindekIn</a>
        </p>
      </div>
    </div>
  )
}

export default About
