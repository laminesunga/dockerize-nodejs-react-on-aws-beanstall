import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import { Header,AdminMenu} from "../components/layout/Header"
import React, {useContext,useState,useEffect} from "react"


import Login from '../components/Login'
import Signup from '../components/Signup'
import Status from '../components/Status'
import About from "../components/About"
import { Account, AccountContext } from "../components/Accounts"

export default function AppRoutes() {


  

  const {getSession, curentUser} = useContext(AccountContext);
  
  const user = curentUser()
  console.log("app route user",user)
  if (user){
    console.log("user is login in")
    
  }
  
  




  
  return (
    <div>
      
      <Header user={user}/>

          {
            !user ? (
              <PublicRoutes />
              
            ) : (
              <PrivateRoutes  />
            )
          }

    </div>
  )
 }

export function PublicRoutes() {
    return (
      <div>
        
        
        <Routes>
          <Route index element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Signup />} />
          <Route exact path='/about' element={<About />} />
          
        </Routes>
        
      </div>
    )
  }

  function PrivateRoutes({ user }) {

    useEffect(() => {
  
   
          
    
        }, [user])
    
  

    return (
      <div>
        
        <AdminMenu/>
        <div className="p-2 m-2">
          <AdminRoutes  />
        </div>
      
      </div>
    )


  }

  const AdminRoutes = ({}) => {
    return (
      <div>
        <Routes>
         
         <Route index element={<Status />} />
         <Route path='/settings' element={<Status />} />
         <Route exact path='/about' element={<About />} />
          
        </Routes>
      </div>
    )
  
  
  }

 






