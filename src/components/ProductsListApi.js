import { useState } from "react";
import { useEffect } from "react"
import Products from "./Products"

function ProductListApi() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const productsData = products.map((product) => {
    return <Products product={product} key={product.id} />
  })

  return (
    <div className="products-list">
      <h2 className="text-center p-3">Our Products</h2>
      {products.length === 0 ? <h1>Loading</h1> : null}
      <div className="row justify-content-center">
        {productsData}
      </div>
    </div>
  )
}

export default ProductListApi