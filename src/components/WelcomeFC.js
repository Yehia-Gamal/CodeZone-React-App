import { useState } from "react";

function WelcomeFC(props) {
  let [counter, setCounter] = useState(0)
  let [name, setName] = useState("Yehia")
  return (
    <>
      <h1>Hello  {props.name}, To WelcomeFC Page</h1>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <h6> {counter} </h6>
      <h6> {name} </h6>
      <button className="btn btn-primary m-2" onClick={() => {
        setName("Yehia Gamal")
      }}>
        Change Name
      </button>
      <button className="btn btn-primary m-2" onClick={() => {
        setCounter(counter + 1)
      }}>
        +
      </button>
    </>
  )
}

export default WelcomeFC;