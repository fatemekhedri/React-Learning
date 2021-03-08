import React from "react";


class Login extends React.Component {
 
  render() {
   
    return (
      <div style={{minHeight:"100vh"}} className="d-flex flex-column justify-content-center align-items-center">
          <div  className="py-3 border col-4 d-flex flex-column align-items-center justify-content-center">

        <h1 className="d-flex">Login </h1>
       { this.renderLoginForm()}
          </div>
      </div>
    );
  }
  renderLoginForm=()=>{
      return(<div>
          <div className="my-2">
              <input placeholder="UserName" className="p-2"></input>
          </div>
          <div className="my-2"><input placeholder="Password" className="p-2"></input></div>
          <div className="m-2">
              <button className="btn btn-primary">Login</button>
          </div>
      </div>)
  }

}
export default Login;
