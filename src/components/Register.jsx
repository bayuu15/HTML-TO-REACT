import React from 'react'
import "../style/Register.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 


const Register = () => {
  return (
    <div className="container">
      <form action="" method="">
        <div className="regis">
          <label htmlFor="uname">
            <b />
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="uname"
            style={{ width: 400, height: 40 }}
            required
          />
          <br />
          <br />
          <label htmlFor="uname">
            <b />
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            style={{ width: 400, height: 40 }}
            required
          />
          <br />
          <br />
          <label htmlFor="psw">
            <b />
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            style={{ width: 400, height: 40 }}
            required
          />
          <br />
          <br />
          <label htmlFor="psw">
            <b />
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw"
            style={{ width: 400, height: 40 }}
            required
          />
          <br />
          <br />
          <br />
          <button type="submit">Sign up</button>
          <i
            className="icon bi bi-facebook bi-3x"
            style={{
              color: "white",
              marginLeft: 20,
              marginRight: 5,
              fontSize: "2rem",
              position: "absolute",
              top: 90,
            }}
          />{" "}
          <i
            className="icon bi bi-google"
            style={{ color: "white", fontSize: "2rem" }}
          />
          <br />
          <br />
          <Link to="/Login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register
