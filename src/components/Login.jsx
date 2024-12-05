// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../style/Home.css";

// const Login = () => {
//   return (
//     <div className='container' id='#Login'>
//             <form action="action_page.php" method="post">
//         <div class="flogin">
//           <label for="uname"><b></b></label>
//           <input type="text" placeholder="Enter Username" name="uname" style="width: 400px; height: 40px;" required />
//           <br />
//           <br />
//           <label for="psw"><b></b></label>
//           <input type="password" placeholder="Enter Password" name="psw" style="width: 400px; height: 40px;" required />
//           <br />
//           <br />
//           <button type="submit" style="width: 400px; height: 40px;">Login</button>
//           <br />
//           <br />
//           <i class="bi bi-facebook" style="color: white; margin-left: 44%; margin-right: 5px; "></i> <i class="bi bi-google" style="color: white;"></i>
//         </div>    
//       </form> 
//     </div>
//   )
// }

// export default Login


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../style/Login.css"; 

function Login() {


  return (
    <div className="container">
      <h1 className="judul">LOGIN</h1>
      <form>
        <div className="flogin">
          <label htmlFor="uname"></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            style={{ width: "400px", height: "40px" }}
           
          />
          <br />
          <br />
          <label htmlFor="psw"></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            style={{ width: "400px", height: "40px" }}
      
          />
          <br />
          <br />
          <button type="submit" style={{ width: "400px", height: "40px" }}>
            Login
          </button>
          <br />
          <br />
          <i
            className="bi bi-facebook"
            style={{ color: "white", marginLeft: "44%", marginRight: "5px" }}
          ></i>
          <i className="bi bi-google" style={{ color: "white" }}></i>
        </div>
        
            <div className="regis">
              <a href="/Register">Register</a>
            </div>
        </form>
    </div>
  );
}

export default Login;
