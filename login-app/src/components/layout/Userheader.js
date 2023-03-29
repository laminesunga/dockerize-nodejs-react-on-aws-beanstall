import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Accounts'
import { Link, useNavigate } from "react-router-dom"
import logo from "./ucmlogo.png"
import Login from '../Login';

export const Header = () =>{

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser1, setCurrentUser] = useState(undefined);
    
    const navigate = useNavigate()
    const { getSession, logout,currentUser } = useContext(AccountContext);
    const user = currentUser
    console.log("header user",user)
    if (user){


        setCurrentUser(user);
        setShowAdminBoard(true)
        }


    const signOut = (e) =>{
        e.preventDefault()
        logout();
        navigate('/')
        window.location.reload();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);

    }




    return (
        


<div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link to={"/"} className="navbar-brand">
          Lamine Sunga
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            
              Home
            
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              
                Moderator Board
              
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              
                Admin Board
              
            </li>
          )}

        </div>

        
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/status"} className="nav-link">
                Lamine
              </Link>
            </li>
            <li className="nav-item">
              
            <a href="/" className="nav-link" onClick={signOut}>
                LogOut
              </a>
              
            </li>
          </div>
   
      </nav>
      


    </div>
    

    )


}





// export const AdminMenu = () =>{

//     const navigate = useNavigate()
//     const { getSession, logout } = useContext(AccountContext);


//     const signOut = (e) =>{
//         e.preventDefault()
//         logout();
//         navigate('/')
//         window.location.reload();
//     }

//     return (
    


//         <div className="head">
//         <div className="bg-secondary navbar border border-black">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn m-1 btn-md bg-midgrey">Lamine </label>
//                     <div className="">
//                         <ul className="menu dropdown-content mt-1 p-2 shadow rounded-box w-52">
//                             <li> Users</li>
                      

//                         </ul>
//                     </div>
//                 </div>

//             </div>
//             <div className="navbar-end">
//                 <div className="dropdown ">
//                     <label tabIndex={0} className="btn m-1 btn-md bg-midgrey">
//                         Lamine 2
//                     </label>
//                     <ul tabIndex={0} className="menu menu-compact right-0 dropdown-right dropdown-content dropdown-end mt-1 p-2 shadow rounded-box w-52">
//                         <li><Link onClick={(signOut)}>Log Out</Link></li>
//                         <li><Link to={'/status'}>Profile</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )


// }