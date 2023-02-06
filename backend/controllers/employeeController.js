const Employee = require("../models/employeeModel");
const jwt = require("jsonwebtoken");

//Get employees 
exports.getEmployee = async (req, res) => {
  try {
    const data = await Employee.find()
    res.send(data);
  }
  catch (err) {
    res.status(400).json({ error: "No employee to display" });
  }
};

//Admin Add employee 
exports.createEmployee = async (req, res) => {

  jwt.verify(req.body.token, "EmployeeToken", (err, decoded) => {
    if (decoded && decoded.email) {
      let data = new Employee({
        name: req.body.name,
        email: req.body.email,
        place: req.body.place,
        designation: req.body.designation,
        salary: req.body.salary
      })

      data.save()
      res.json({ "status": "success", data })

    }
    else {
      res.json({ "status": "Failed... Unuthorized User...!" })

    }
  })
};


//Admin Update Employee 
exports.updateEmployee = async (req, res) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return res.status(500).json({
      success: false,
      message: "Employee Not Found...!",
    });
  }

  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    employee
  });
};

// Admin Delete employee 
exports.deleteEmployee = async (req, res) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return res.status(500).json({
      success: false,
      message: "Employee Not Found",
    });
  }
  await employee.remove();
  res.status(200).json({
    success: true,
    employee
  });
}