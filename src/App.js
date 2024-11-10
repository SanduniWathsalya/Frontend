import './App.css';
import Home from './Pages/Home/App';
import About from './Pages/AboutUs/App';
import Login from './Pages/Login/App';
import Register from './Pages/Register/App';
import ContactUs from './Pages/ContactUs/App'

import WelcomePage from './Pages/Login/components/WelcomePage';
import LoginFormAdmin from './Pages/Login/components/admin/adminlogin';
import Signup from  './Pages/Login/components/admin/adminsignup';
import LoginFormTeacher from './Pages/Login/components/teacher/teacherlogin';
import LoginFormStudent from './Pages/Login/components/student/studentlogin';
import WelcomePage2 from './Pages/Register/components/WelcomePage2';
import RegisterFormMI from './Pages/Register/components/mass institute/massregister';
import RegisterFormSchool from './Pages/Register/components/school/RegisterFormSchool';
import RegisterFormSI from './Pages/Register/components/small institute/RegisterFormSI';
import AdminLayout from './Pages/Login/components/admin/adminlayout';





import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './Pages/Home/components/Footer';
import Header from './Pages/Home/components/Header';





function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
       
        <Route path="/Loginpage" element={<WelcomePage/>} />
        <Route path="/adminlogin" element={<LoginFormAdmin/>} />
        <Route path="/adminsignup" element={<Signup/>} />
        <Route path="/teacherlogin" element={<LoginFormTeacher/>} />
        <Route path="/studentlogin" element={<LoginFormStudent />} />
        <Route path="/Registerpage" element={<WelcomePage2/>} />
        <Route path="/massregister" element={<RegisterFormMI/>} />
        <Route path="/schoolregister" element={<RegisterFormSchool/>}/>
        <Route path="/smallregister" element={<RegisterFormSI/>}/>
        <Route path="/admindashboard" element={<AdminLayout/>}/>
       
        



       
        
      </Routes>
     
    </Router>
  );
}

export default App;
