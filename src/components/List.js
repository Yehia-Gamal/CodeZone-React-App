function List() {

  // let arr = ["Html", "Css", "Js", "Bootstrap", "React Js"]
  let arr = [
    { id: "Html", name: "Html" },
    { id: "Css", name: "Css" },
    { id: "Js", name: "Js" },
    { id: "Bootstrap", name: "Bootstrap" },
    { id: "React Js", name: "React Js" }
  ]

  let li = arr.map((el) => {
    return <li key={el.id}>{el.name}</li>
  })

  return (
    <ul>
      {li}
    </ul>
  )
}

export default List;