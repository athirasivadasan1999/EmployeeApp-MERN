import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import HomeNavbar from "../Navbar/HomeNavbar";

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("")
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const sendDataToApi = () => {
    const userData = {
      "userName": userName,
      "email": email,
      "password": password
    }
    axios.post(`http://localhost:5000/api/v1/user/register`, userData)
      .then((response) => {
        if (response.data.success === true) {
          alert("SignUp Successfull Please login");
          navigate("/")
        }
      })
  }

  return (
    <div>
      <HomeNavbar />
      <div>
        {" "}
      </div>
      <div className="container">
        <br /> <br />
        <div class="card text-black ">
          <div class="card-body p-md-5 " >
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">

                <h1 className="text-center" >Signup</h1>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                <label htmlFor="" className="form-label">NAME</label>
                <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)}
                  id="exampleInputEmail1" placeholder="Name" required />
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
                <button className="btn btn-success btn-lg" onClick={sendDataToApi} type="button">SignUp</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12 text-center">
                <p>Already have an account ? Login{" "} <a href="/">here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
}

export default SignUp;
