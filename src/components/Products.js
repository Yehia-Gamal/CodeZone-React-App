
function Products(props) {
  return (
    <div className="card col-sm-12 col-md-4 col-lg-3 m-2 p-3 rounded-3">
      <img className="img rounded-3" src={props.product.image} alt="" />
      <h1 className="title fw-bold overflow-hidden">{props.product.title}</h1>
      <p className="desc">{props.product.description}</p>
      <p className="price">Price: {props.product.price}</p>
      <button className="btn-buy w-100 rounded-3 p-1 text-white border-0" onClick={() => {
        console.log('You are going to buy this product', props.product.price)
      }}>Buy</button>
    </div>
  )
}

export default Products