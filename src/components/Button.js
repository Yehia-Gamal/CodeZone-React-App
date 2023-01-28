
function Button(props) {
  const btnHandler = () => {
    console.log("Hello From btn ✌")
  }
  return (
    <button className="react-btn btn btn-primary m-2" onClick={btnHandler}>
      {props.title}
    </button>
  )
}

export default Button