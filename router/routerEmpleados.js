const execute = require('./connection');
const express = require('express');
const router = express.Router();

router.post("/login",async(req,res)=>{

    const {app,codsucursal,user,pass} = req.body;

    let qry ='';
    qry = `SELECT CODUSUARIO AS CODIGO, NOMBRE AS USUARIO, TIPO, CODDOC, CODSUCURSAL FROM ME_USUARIOS WHERE CODSUCURSAL='${codsucursal}' AND NOMBRE='${user}' AND PASS='${pass}'`;
    
    execute.Query(res,qry);
})

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/vendedores", async(req,res)=>{
    
    const {app,empnit} = req.query;
        
    let qry ='';
    qry = `SELECT CODVEN,NOMVEN,CLAVE FROM ME_VENDEDORES WHERE EMP_NIT='${empnit}' AND ACTIVO='SI'`     

    execute.Query(res,qry);

})

module.exports = router;
