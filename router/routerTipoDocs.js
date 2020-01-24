const execute = require('./connection');
const express = require('express');
const router = express.Router();

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/tipo", async(req,res)=>{
    const {app,empnit,tipo} = req.query;
        
    let qry ='';

    switch (app) {
        case 'ISC':
            qry = `SELECT CODDOC,CORRELATIVO FROM TIPODOCUMENTOS WHERE EMP_NIT='${empnit}' AND TIPODOC='${tipo}'`     
            break;
        case 'COMMUNITY':
            qry = `SELECT CODDOC,CORRELATIVO FROM TIPODOCUMENTOS WHERE TIPODOC='FAC' AND EMPNIT='${empnit}'`  
            break;
    
        default:
            break;
    }
  
    execute.Query(res,qry);

});

// VENTAS BUSCAR PRODUCTO POR DESCRIPCION
router.get("/correlativodoc", async(req,res)=>{
    const {app,empnit,tipo,coddoc} = req.query;
        
    let qry ='';

    switch (app) {
        case 'ISC':
            qry = `SELECT CODDOC,CORRELATIVO FROM TIPODOCUMENTOS WHERE EMP_NIT='${empnit}' AND TIPODOC='${tipo}' AND CODDOC='${coddoc}'`     
            break;
        case 'COMMUNITY':
            qry = `SELECT CODDOC,CORRELATIVO FROM TIPODOCUMENTOS WHERE EMPNIT='${empnit}' AND TIPODOC='FAC' AND CODDOC='${coddoc}'`  
            break;
    
        default:
            break;
    }
    
    execute.Query(res,qry);

});

module.exports = router;
