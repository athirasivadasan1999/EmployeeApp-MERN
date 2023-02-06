import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Update() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [ID, setID] = useState(null);

  const sendDataToApi = () => {
    const employeeData = {
      "name": name,
      "email": email,
      "place": place,
      "designation": designation,
      "salary": salary
    }
    axios.put(`http://localhost:5000/api/v1/employee/${ID}`, employeeData)
      .then((response) => {
        if (response.data.success === true) {
          alert("Updated successfully");
          navigate('/home');
        }
        else {
          alert("Update Failed");
        }
      })
  }

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPlace(localStorage.getItem("place"));
    setDesignation(localStorage.getItem("designation"));
    setSalary(localStorage.getItem("salary"));
    setID(localStorage.getItem('ID'));
  }, [])
  return (
    <div>
      <Navbar />
      {/* new form starts  */}
      <br /> <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div class="card text-black ">
              <div class="card-body p-md-5 " >
                <h1 className="text-center" >Update Employee</h1>
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" placeholder='Enter employee Name' name={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder='Enter email ID' name={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">LOCATION</label>
                    <input type="text" className="form-control" placeholder='Enter Employee location' name={place} onChange={(e) => setPlace(e.target.value)} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">DESIGNATION</label>
                    <input type="text" className="form-control" placeholder='Enter Employee Designation' name={designation} onChange={(e) => setDesignation(e.target.value)} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">SALARY</label>
                    <input type="text" className="form-control" placeholder='Enter Employee Salary' name={salary} onChange={(e) => setSalary(e.target.value)} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center ">
                    <button type="button" class="btn btn-success btn-lg" onClick={sendDataToApi}>Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      {/* form ends */}
    </div>
  )
}

export default Update