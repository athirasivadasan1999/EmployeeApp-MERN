import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function AddEmployeeForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

  const sendDataToApi = () => {
    var token = sessionStorage.getItem("usertoken");
    const employeeData = {
      "token": token,
      "name": name,
      "email": email,
      "place": place,
      "designation": designation,
      "salary": salary

    }

    axios.post(`http://localhost:5000/api/v1/employee/add`, employeeData)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Employee added successfully");
          navigate('/home');
        }
        else {
          alert("Error");
          navigate("/home")
        }
      })
  }

  return (
    <div>
      {/*employee add starts*/}
      <Navbar />
      <br /><br /><br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card text-black ">
              <div class="card-body p-md-5 " >
                <h1 className="text-center" >Add Employee</h1>
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" placeholder='Enter employee Name' onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder='Enter employee ID' onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">LOCATION</label>
                    <input type="text" className="form-control" placeholder='Enter Employee location' onChange={(e) => setPlace(e.target.value)} required />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">DESIGNATION</label>
                    <input type="text" className="form-control" placeholder='Enter Employee Designation' onChange={(e) => setDesignation(e.target.value)} required />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">SALARY</label>
                    <input type="text" className="form-control" placeholder='Enter Employee Salary' onChange={(e) => setSalary(e.target.value)} required />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center ">
                    <button type="button" class="btn btn-success btn-lg" onClick={sendDataToApi}>Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* employee add ends */}

      <br />
      <br />
    </div>
  );
}

export default AddEmployeeForm;
