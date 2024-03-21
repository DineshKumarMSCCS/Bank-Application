import './app.css'; 
import MyContext from './Mycontext';
import Navbar from './navbar';
import Deposite1 from './deposite';
import Footer from './footer';
import Withdraw from './withdraw';
import { Route,Routes, HashRouter } from "react-router-dom";
import Home from './home';
import AllData from './alldata';
import Login from './login';
import CreateAccount from './createaccount';
import './App.module.css';
 

export default function banking(){

  return(
    <>
    <HashRouter>
      <Navbar/>
    <MyContext.Provider value={{
      users:[{
        name:"",
        email:"",
        password:"",
        balance:""
      }],
      currentUser:[]
    }

    }>
      <Routes> 
       <Route  path='/' exact element={<Home/>}/> 
      <Route path='/createaccount' element={<CreateAccount/>}/>
      <Route  path='/deposit' element={<Deposite1 />}/>
      <Route  path='/withdraw'element={<Withdraw />}/>
      <Route path ='/alldata' element={<AllData/>}/>
      <Route path ='/login' element={<Login/>}/>
      </Routes>
    </MyContext.Provider>
    <Footer/>
    </HashRouter>
    </>
  )
}