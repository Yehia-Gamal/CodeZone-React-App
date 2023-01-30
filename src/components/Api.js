import Home from "../Pages/Home";
import Sidebar from "./Sidebar";

function Api() {
  return (
    <>
      <div className="row align-items-start">
        <div className="col-12 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Home />
        </div>
      </div>
    </>
  )
}

export default Api