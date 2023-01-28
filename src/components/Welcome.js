import React from "react";

class Welcome extends React.Component {

  state = {
    firstNanme: "Yehia",
    lastName: "Elspaa"
  }

  changeName = () => {
    this.setState({
      lastName: "Gamal"
    })
  }


  render() {
    console.log(this.state)
    return (
      <>
        <h1>Hello, {this.props.name} From Class Component</h1>
        <p>Age: {this.props.age}</p>
        <p>Title: {this.props.title}</p>

        <button className="btn btn-primary m-2" onClick={this.changeName}>
          Change My Name
        </button>s

        <h6>Created by, {this.state.firstNanme} {this.state.lastName}</h6>
      </>
    )
  }
  componentDidMount() {

  }
}


export default Welcome


