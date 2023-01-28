function Greeting() {

  const myName = "Yehia";

  function greeting(name) {
    const profileLink = 'https://google.com'
    if (name) {
      return <h2 className="name-title">Hello, <a href={profileLink}>{name}</a></h2>
    }
    return <h2>Hello, Guest</h2>
  }

  return (
    <>
      {greeting(myName)}
    </>
  )
}

export default Greeting