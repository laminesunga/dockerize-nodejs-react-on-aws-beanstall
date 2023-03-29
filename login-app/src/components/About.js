import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Link,useNavigate} from 'react-router-dom';
import logo from "./layout/lam1.png"



export default function About() {
  
  
  
    
  

  return (
    <div >
      
        <Container>
        <div>

          
          <a >
            <img src={logo} width="300" height="200" alt=""/>
             Lamine Geordan Sunga Kouangue
          </a>
        </div>
        </Container>

      
    </div>
  );
};