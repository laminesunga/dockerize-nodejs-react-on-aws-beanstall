import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Link,useNavigate} from 'react-router-dom';


import axios from "axios";

import { AccountContext } from './Accounts';

export default function Status() {
  const [status, setStatus] = useState(false);

  const { getSession, logout , curentUser} = useContext(AccountContext);
  const navigate = useNavigate();
  const user = curentUser()
  console.log("current user from status",user)
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
       const loadData = async () =>{
        setLoading(true);
        const res = await axios.get("/api/data");
        console.log("data",res)
        console.log("res data",res.data)
        setData(res.data);
       }
       loadData()
  }, []);
  
  

  return (
    <div >
      
        <Container>
        <div>
          <h3>Welcome User Name: </h3>
          
          <p>{!data ? "Loading..." : 
          (
           <table  className='table'>
            <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>user groupe</th>
            </tr>
            </thead>
            <tbody>

              {data && data.map((data,index)=>(
                <tr key = {index}>
                  <td>{data.id}</td>
                  <td>{data.userName}</td>
                  <td>{data.other}</td>
                </tr>
              ))}
            </tbody>
           </table>
          )
          
          
          }
          </p>

          
        </div>
        </Container>

      
    </div>
  );
};