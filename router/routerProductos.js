const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listadoproductos", async(req,res)=>{
   
    const {empnit} = req.body;
        
    let qry ='';

    qry = `SELECT PRODUCTOS.EMPNIT, PRODUCTOS.CODPROD, PRODUCTOS.CODPROD2, PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, PRODUCTOS.DESPROD3, PRODUCTOS.COSTO, PRODUCTOS.CODMARCA, 
    PRODUCTOS.HABILITADO, PRODUCTOS.LASTUPDATE, MARCAS.DESMARCA
        FROM PRODUCTOS LEFT OUTER JOIN
    MARCAS ON PRODUCTOS.EMPNIT = MARCAS.EMPNIT AND PRODUCTOS.CODMARCA = MARCAS.CODMARCA
        WHERE (PRODUCTOS.EMPNIT = '${empnit}')`     
  
    execute.Query(res,qry);

});


router.post("/delete_producto", async(req,res)=>{
   
    const {empnit,codprod} = req.body;
        
    let qry ='';

    qry = `DELETE FROM PRODUCTOS WHERE EMPNIT='${empnit}' AND CODPROD='${codprod}';
            DELETE FROM PRECIOS WHERE EMPNIT='${empnit}' AND CODPROD='${codprod}';`     
  
    execute.Query(res,qry);

});




module.exports = router;
