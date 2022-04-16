import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-desc">
        Fazem parte das minhas skills, noções de UI&UX, versionamento com Git e linguagens como HTML5, CSS3, Javascript e ReactJS. 
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
