const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/verify_codprod", async(req,res)=>{
   
    const {sucursal,codprod} = req.body;
        
    let qry ='';

    qry = `SELECT CODPROD FROM PRODUCTOS WHERE EMPNIT = '${sucursal}' AND CODPROD='${codprod}'; `     
  
    execute.Query(res,qry);

});

router.post("/verify_movimiento_codprod", async(req,res)=>{
   
    const {sucursal,codprod} = req.body;
        
    let qry ='';

    qry = `SELECT TOP 1 CODPROD FROM DOCPRODUCTOS WHERE EMPNIT = '${sucursal}' AND CODPROD='${codprod}'; `     
  
    execute.Query(res,qry);

});

router.post("/insert_producto", async(req,res)=>{
   
    const {sucursal,codprod,desprod,desprod2,costoun,precio,codmarca,fecha} = req.body;
        
    let qryprod =''; let qrypre = ''; let qryinv = '';

    qryprod = `INSERT INTO PRODUCTOS (EMPNIT,CODPROD, CODPROD2, DESPROD, DESPROD2, DESPROD3, UXC,COSTO,CODMARCA,CODCLAUNO,CODCLADOS,CODCLATRES,HABILITADO,TIPOPROD,EXENTO,NF,EXISTENCIA,PORCDESCUENTO,INVMINIMO, INVMAXIMO, SERIE, LASTUPDATE)
        VALUES ('${sucursal}','${codprod}', '${codprod}', '${desprod}', '${desprod2}', '${desprod}', 1,${costoun},${codmarca},1,1,1,'SI','P',0,0,0,0,0,0,0,'${fecha}');`     
    
    qrypre = `INSERT INTO PRECIOS (EMPNIT, CODPROD, CODMEDIDA, EQUIVALE, COSTO, PRECIO, MAYOREOA, MAYOREOB, MAYOREOC,UTILIDAD,PORCUTILIDAD,PESO,MARGEN,LASTUPDATE)
            VALUES ('${sucursal}','${codprod}', 'UNIDAD', 1, ${costoun}, ${precio}, ${precio}, ${precio}, ${precio},0,0,0,0,'${fecha}');`

    qryinv = `INSERT INTO INVSALDO (EMPNIT,CODPROD,ANIO,MES,ENTRADAS,SALIDAS,SALDOINICIAL,SALDO) VALUES ('${sucursal}','${codprod}',0,0,0,0,0,0);`
    
    
    execute.Query(res, qryprod + qrypre + qryinv);


});


router.post("/edit_producto", async(req,res)=>{
   
    const {sucursal,codprod,desprod,desprod2,costoun,precio,codmarca,fecha} = req.body;
        
    let qryprod =''; let qrypre = ''; 

    qryprod = `UPDATE PRODUCTOS SET 
                    DESPROD='${desprod}',
                    DESPROD2='${desprod2}',
                    COSTO=${costoun},
                    CODMARCA=${codmarca},
                    LASTUPDATE='${fecha}'
                WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';`     
    
    qrypre = `UPDATE PRECIOS SET
                    COSTO=${costoun}, 
                    PRECIO=${precio}, 
                    MAYOREOA=${precio}, 
                    MAYOREOB=${precio}, 
                    MAYOREOC=${precio},
                    LASTUPDATE='${fecha}'
                WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}' AND CODMEDIDA='UNIDAD';`

    
    execute.Query(res, qryprod + qrypre);


});



router.post("/listadoproductos", async(req,res)=>{
   
    const {sucursal,tipo} = req.body;
        
    let qry ='';

    qry = `SELECT PRODUCTOS.EMPNIT, PRODUCTOS.CODPROD, PRODUCTOS.CODPROD2, PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, PRODUCTOS.DESPROD3, PRODUCTOS.COSTO, PRODUCTOS.CODMARCA, 
                PRODUCTOS.HABILITADO, PRODUCTOS.LASTUPDATE, MARCAS.DESMARCA, PRECIOS.PRECIO, PRODUCTOS.EXISTENCIA
            FROM  PRODUCTOS LEFT OUTER JOIN
                PRECIOS ON PRODUCTOS.CODPROD = PRECIOS.CODPROD AND PRODUCTOS.EMPNIT = PRECIOS.EMPNIT LEFT OUTER JOIN
                MARCAS ON PRODUCTOS.EMPNIT = MARCAS.EMPNIT AND PRODUCTOS.CODMARCA = MARCAS.CODMARCA
        WHERE (PRODUCTOS.EMPNIT = '${sucursal}') AND (PRODUCTOS.HABILITADO='${tipo}')`     
  
    execute.Query(res,qry);

});





router.post("/getmarcas", async(req,res)=>{
   
    const {sucursal} = req.body;
        
    let qry ='';

    qry = `SELECT CODMARCA, DESMARCA FROM MARCAS WHERE EMPNIT = '${sucursal}'; `     
  
    execute.Query(res,qry);

});




router.post("/delete_producto", async(req,res)=>{
   
    const {sucursal,codprod} = req.body;
        
    let qry ='';

    qry = `DELETE FROM PRODUCTOS WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
            DELETE FROM PRECIOS WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
            DELETE FROM INVSALDO WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';`     
  
    execute.Query(res,qry);

});


router.post("/deshab_producto", async(req,res)=>{
   
    const {sucursal,codprod,tipo} = req.body;
        
    let qry ='';

    qry = `UPDATE PRODUCTOS SET HABILITADO='${tipo}' WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
          `     
  
    execute.Query(res,qry);

});




module.exports = router;
