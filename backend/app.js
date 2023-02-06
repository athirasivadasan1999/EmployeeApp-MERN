const express  = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT_NUMBER || 5000;
const connectDatabase = require("./config/database");

const app = express();

//config
dotenv.config()

//connecting to databse
connectDatabase();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


//Routes
const employee = require("./routes/employeeRoute");
app.use("/api/v1",employee);

const user = require("./routes/userRoute");
app.use("/api/v1",user);


app.listen(PORT,()=>{
    console.log(`server is started on http://localhost:${PORT}`);
})