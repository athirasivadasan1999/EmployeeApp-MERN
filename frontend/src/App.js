import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/Signup/SignUp';
import Home from './components/Home/Home';
import Update from './components/Update/Update';
import AddEmployeeForm from './components/AddEmployee/AddEmployeeForm';


function App() {
  return (
    
    <div>
      <BrowserRouter>
         <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element ={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/updateEmp' element={<Update/>}/>
        <Route path='/addEmp' element={<AddEmployeeForm/>} />    
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
