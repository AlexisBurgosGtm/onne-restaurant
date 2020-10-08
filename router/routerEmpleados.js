const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/login",async(req,res)=>{

    const {sucursal,user,pass} = req.body;

    
    let qry ='';
    qry = `SELECT CODTIPOEMPLEADO AS TIPO FROM EMPLEADOS WHERE EMPNIT='${sucursal}' AND NOMEMPLEADO='${user}' AND CLAVE='${pass}' AND ACTIVO='SI';`
              
    execute.Query(res,qry);
});

// OBTIENE LA LISTA DE VENDEDORES DISPONIBLES DE LA LISTA DE USUARIOS
router.post("/vendedores", async(req,res)=>{
    
    const {sucursal} = req.body;
        
    let qry =''; 
    qry = `SELECT EMPNIT, CODEMPLEADO AS CODIGO, NOMEMPLEADO AS NOMBRE, CLAVE FROM EMPLEADOS WHERE EMPNIT='${sucursal}' AND ACTIVO='SI' AND CODTIPOEMPLEADO=3`;     
        
    execute.Query(res,qry);

});

// OBTIENE LA LISTA DE EMPRESAS
router.post("/empresas", async(req,res)=>{
    
           
    let qry =''; 
    qry = `SELECT EMPNIT, EMPNOMBRE AS NOMBRE FROM EMPRESAS`;     
    console.log(qry);
    
    execute.Query(res,qry);

});

module.exports = router;
