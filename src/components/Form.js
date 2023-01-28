import { useState } from "react"

function Form() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')

  const nameHandler = (value) => {
    setName(value)
  }

  const passwordHandler = (value) => {
    setPassword(value)
  }

  const genderHandler = (value) => {
    setGender(value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log("Form Submitted")
      console.log({
        name,
        password,
        gender
      })
    }}>
      <label>Name</label>
      <input type="text" plasceholder="Your Name" onChange={(event) => {
        nameHandler(event.target.value)
      }} />
      <br />
      <label>Password</label>
      <input type="password" plasceholder="Your Password" onChange={(event) => {
        passwordHandler(event.target.value)
      }} />
      <br />
      <label>Gender</label>
      <select onChange={(event) => {
        genderHandler(event.target.value)
      }}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <br />
      <button type="submit" className="btn btn btn-primary m-2">Submit</button>
    </form>
  )
}

export default Form