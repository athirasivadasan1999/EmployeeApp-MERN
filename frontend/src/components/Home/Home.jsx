import React from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [apiData, setApiData] = useState([]);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    if (role === 'user') {
      setVisible(false)
    }
    else {
      setVisible(true)
    }
    axios.get(`http://localhost:5000/api/v1/employees`).then((getData) => {
      setApiData(getData.data)
    })
  }, []);

  const getData = () => {
    axios.get(`http://localhost:5000/api/v1/employees`).then((getData) => {
      setApiData(getData.data);
      console.log(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/api/v1/employee/${id}`)
      .then((response) => {
        if (response.data.success === true) {
          alert("Employee deleted successfully");
          getData();
        }
        else {
          alert("Something went wrong");
        }

      })
  }

  const setData = (id, name, email, place, designation, salary) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("place", place);
    localStorage.setItem("designation", designation);
    localStorage.setItem("salary", salary);

  }

  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="row>">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Place</Table.HeaderCell>
                <Table.HeaderCell>Designation</Table.HeaderCell>
                <Table.HeaderCell>salary</Table.HeaderCell>
                {visible && <Table.HeaderCell>Update</Table.HeaderCell>}
                {visible && <Table.HeaderCell>Update</Table.HeaderCell>}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {Array.isArray(apiData)
                ? apiData.map(data => {
                  return (
                    <Table.Row key={data.id}>
                      <Table.Cell>{data.name}</Table.Cell>
                      <Table.Cell>{data.email}</Table.Cell>
                      <Table.Cell>{data.place}</Table.Cell>
                      <Table.Cell>{data.designation}</Table.Cell>
                      <Table.Cell>{data.salary}</Table.Cell>
                      {visible &&
                        <Table.Cell>
                          <Link to='/updateEmp'>
                            <Button color="green" onClick={() => setData(data._id, data.name, data.email, data.place, data.designation, data.salary)}>Update</Button>
                          </Link>
                        </Table.Cell>}
                      {visible &&
                        <Table.Cell>
                          <Button color="red" onClick={() => onDelete(data._id)}>Delete</Button>
                        </Table.Cell>}
                    </Table.Row>
                  );
                }) : null}
            </Table.Body>
          </Table>
          <Link to="/addEmp">
            {visible && <Button className="btn btn-secondary btn-lg">Add Employee</Button>}
          </Link>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Home;
