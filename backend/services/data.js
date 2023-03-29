const express = require('express')
const cors = require ('cors')

const con = require('./auth')

const services = express()

services.use(express.json())
services.use(cors())

//services.post('/data', "lamine sunga")


services.get("/data", (req,res)=>{
    //res.json({message: "lamine sunga"});
    console.log("inside get dat")
    
    let query = "select  * from user ";

    con.query(query, (err, result) =>{
        if (err){
            console.log('error query')
            res.json({message: "lamine sunga"});
        }
        console.log("users",result)
        res.send(result)
    })
    

});


module.exports = services