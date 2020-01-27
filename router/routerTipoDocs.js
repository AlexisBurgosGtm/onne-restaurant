const execute = require('./connection');
const express = require('express');
const router = express.Router();

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/tipo", async(req,res)=>{
    const {app,empnit,tipo} = req.query;
        
    let qry ='';

    qry = `SELECT CODDOC,CORRELATIVO FROM ME_TIPODOCUMENTOS WHERE EMP_NIT='${empnit}' AND TIPODOC='${tipo}'`     
  
    execute.Query(res,qry);

});

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/correlativodoc", async(req,res)=>{
    const {app,empnit,tipo,coddoc} = req.query;
        
    let qry ='';

    qry = `SELECT CODDOC,CORRELATIVO FROM ME_TIPODOCUMENTOS WHERE EMP_NIT='${empnit}' AND TIPODOC='${tipo}' AND CODDOC='${coddoc}'`     
    
    execute.Query(res,qry);

});

module.exports = router;
