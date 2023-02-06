import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import HomeNavbar from "../Navbar/HomeNavbar";


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const userAuthentication = () => {
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    axios
      .post(`http://localhost:5000/api/v1/user/login`, userData)
      .then((response) => {
        console.log(response.data);

        if (response.data.status === "success") {
          let token = response.data.token;
          let userId = response.data.data[0]._id;
          let role = response.data.data[0].role;

          sessionStorage.setItem("usertoken", token);
          sessionStorage.setItem("userId", userId);
          sessionStorage.setItem("role", role);
          alert("valid user");
          navigate("/home");
        } else {
          alert("invalid user");
        }
      });
  };

  return (
    <div>
      <HomeNavbar />
      {/* LoginForm starts */}
      <div className="container">
        <br /><br/>
        <div class="card text-black ">
          <div class="card-body p-md-5 " >
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                <h1 className="text-center" >LOGIN</h1>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                <label htmlFor="" className="form-label">EMAL ID</label>
                <input type="text" className="form-control" onChange={(e) => setemail(e.target.value)}
                  id="exampleInputEmail1" placeholder="Email Id" required />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" name="" className="form-control" onChange={(e) => setPassword(e.target.value)}
                  id="exampleInputPassword1" placeholder="Password" required />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12 text-center">
                <button className="btn btn-success btn-lg" onClick={userAuthentication} type="button">Login</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12 text-center">
                <a href='/signup'>New users click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login page ends*/}
      <br /><br /><br />
    </div>
  );
}

export default Login;
