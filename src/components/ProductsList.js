import productsData from "../productsData"
import Products from "./Products"

function ProductList() {
  console.log(productsData)
  const products = productsData.map((product) => {
    return <Products product={product} key={product.id} />
  })

  return (
    <div className="products-list">
      <h2 className="text-center p-3">Our Products</h2>
      {products.length === 0 ? <h1>Loading</h1> : null}
      <div className="row justify-content-center">
        {products}
      </div>
    </div>
  )
}

export default ProductList