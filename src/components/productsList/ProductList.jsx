import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-desc">
        Fez parte dos meus projetos, noções de versionamento com Git, além de linguagens como HTML5, CSS3, Javascript e ReactJS. 
        Chamo atenção para meu projeto final de curso o "Projeto Acué" que une profissionais da comunidade LGBTQIA+ à contratantes que apoiam a causa,
        ficou entre um dos 5 selecionados do meu curso na apresentação final.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
