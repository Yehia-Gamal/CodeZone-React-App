import { NavLink, Link } from "react-router-dom"

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100">
        <div className="container">
          <Link className="navbar-brand" to="/">React App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/welcome">welcome</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/welcomeFC">WelcomeFC</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/Products-1">Products 1</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/Products-2">Products 2</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/Products-3">Products 3</NavLink>
              </li>
              <li className="nav-item fs-4 m-2 mb-0 mt-0">
                <NavLink className="nav-link" to="/Api">Api</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header