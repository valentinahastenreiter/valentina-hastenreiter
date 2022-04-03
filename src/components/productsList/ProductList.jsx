import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portifolio</h1>
        <p className="pl-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores inventore totam aliquid perferendis consequuntur expedita quis a odit in. Vitae recusandae, tempore suscipit nostrum assumenda laudantium incidunt non provident earum.
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
