import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Accounts'
import { Link, useNavigate } from "react-router-dom"
import logo from "./lam1.png"
import Login from '../Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = (user) =>{
    console.log("header user",user)
    



    return (

        <div className="head"> 
        <Container fluid="true">
        <Navbar className='nav-bar-1' variant="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="/home" className="justify-content-center"> 
            <a >
            <img src={logo} width="90" height="70" alt=""/>
             Lamine Geordan Sunga Kouangue
            </a>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/about">About Me</Nav.Link>
            
           
            { 
              !user.user && (
                           <><Nav.Link href="/Login">Login</Nav.Link><Nav.Link href="/register">Signup</Nav.Link></>
                           )}
            
        
           

          

          </Nav>
        </Container>
        </Navbar>
        </Container>


        

        </div>
        
    

    )


}





export const AdminMenu = () =>{

    const navigate = useNavigate()
    const { getSession, logout } = useContext(AccountContext);


    const signOut = (e) =>{
        e.preventDefault()
        logout();
        navigate('/')
        window.location.reload();
    }

    return (
    


    <div className="head">
      <Container>
        <Navbar className="nav-bar-2" variant="ligth" expand="lg"  >
        <Container>
          <Nav >
            <Nav.Item >Hello User Name</Nav.Item>
          
          </Nav>
          <Nav className="justify-content-end">
          
          

          <NavDropdown className='NavDropdown' title="User Name" id="nav-dropdown" align="end" >
            <NavDropdown.Item href='/settings' eventKey="4.1">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" onClick={signOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
    

          </Nav>
        </Container>
        </Navbar>
        </Container>
    </div>
    )


}