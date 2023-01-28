import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import ProductOneCard from "./ProductOneCard";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({})
  const params = useParams()
  
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
  }, [])

  return (
    <>
      <h1><Link to="/">Back to Back Page</Link></h1>
      <h1>
        Product Details - {product.title} {params.productId}
      </h1>
      <ProductOneCard product={product} showButton={false} />
    </>
  )
}

export default ProductDetails