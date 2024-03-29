const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/empresas",async(req,res)=>{

    
    
    let qry ='';
    qry = `SELECT EMPNIT, EMPNOMBRE AS NOMBRE FROM EMPRESAS`
              
    execute.Query(res,qry);
});


router.post("/verify_clave",async(req,res)=>{

    const {sucursal,clave} = req.body;

    
    let qry ='';
    qry = `SELECT CLAVE FROM EMPLEADOS WHERE EMPNIT='${sucursal}' AND CLAVE='${clave}';`
              
    execute.Query(res,qry);

});


router.post("/login",async(req,res)=>{

    const {sucursal,user,clave} = req.body;

    
    let qry ='';
    qry = ` SELECT CODTIPOEMPLEADO AS TIPO 
            FROM EMPLEADOS 
            WHERE EMPNIT='${sucursal}' AND CLAVE='${clave}' AND ACTIVO='SI';`
              
    execute.Query(res,qry);
});

// OBTIENE LA LISTA DE VENDEDORES DISPONIBLES DE LA LISTA DE USUARIOS
router.post("/vendedores", async(req,res)=>{
    
    const {sucursal,tipo} = req.body;
        
    let qry =''; 
    qry = `SELECT EMPNIT, CODEMPLEADO AS CODIGO, NOMEMPLEADO AS NOMBRE, CLAVE, WHATSAPP AS CODDOC 
            FROM EMPLEADOS
            WHERE EMPNIT='${sucursal}' AND ACTIVO='SI' AND CODTIPOEMPLEADO=${tipo}`;     
        
    execute.Query(res,qry);

});








router.post("/insert_mesero", async(req,res)=>{
   
    const {sucursal,nombre,coddoc,clave,tipo} = req.body;
        
    let qry ='';

    qry = `INSERT INTO EMPLEADOS
            (EMPNIT,CODTIPOEMPLEADO,DPI,IGSS,NOMEMPLEADO,DIRECCION,CODMUNICIPIO,CODDEPTO,TELEFONOS,WHATSAPP,EMAIL,OBS,ACTIVO,CLAVE) 
        VALUES ('${sucursal}',${tipo},'SN','SN','${nombre}','CIUDAD',1,1,'000','${coddoc}','SN','SN','SI','${clave}')`     
  
    execute.Query(res,qry);

});



router.post("/edit_mesero", async(req,res)=>{
   
    const {sucursal,nombre,coddoc,clave,codigo} = req.body;
        
    let qry ='';

    qry = `UPDATE EMPLEADOS SET NOMEMPLEADO='${nombre}',WHATSAPP='${coddoc}',CLAVE='${clave}' 
            WHERE EMPNIT='${sucursal}' AND CODEMPLEADO=${codigo} 
       `     
  
    execute.Query(res,qry);

});


router.post("/delete_mesero", async(req,res)=>{
   
    const {sucursal,codigo} = req.body;
        
    let qry ='';

    qry = `DELETE FROM EMPLEADOS WHERE EMPNIT='${sucursal}' AND CODEMPLEADO=${codigo}`     
  
    execute.Query(res,qry);

});





router.post("/select_mesas", async(req,res)=>{
   
    const {sucursal} = req.body;
        
    let qry ='';

    qry = `SELECT ID AS CODIGO, CODMESA, DESMESA, OCUPADA, CUENTA, SECTOR
             FROM RESTAURANTE_MESAS WHERE EMPNIT='${sucursal}' `;     
  
    execute.Query(res,qry);

});

router.post("/insert_mesa", async(req,res)=>{
   
    const {sucursal,codmesa,desmesa,sector} = req.body;
        
    let qry ='';

    qry = `INSERT INTO RESTAURANTE_MESAS (EMPNIT,CODMESA,DESMESA,OCUPADA,CUENTA,SECTOR)
            VALUES ('${sucursal}','${codmesa}','${desmesa}','NO','NO',${sector});`;     
  
    execute.Query(res,qry);

});

router.post("/edit_mesa", async(req,res)=>{
   
    const {id,sucursal,codmesa,desmesa,sector} = req.body;
        
    let qry ='';

    qry = `UPDATE RESTAURANTE_MESAS 
                SET CODMESA='${codmesa}',
                    DESMESA='${desmesa}',
                    SECTOR=${sector}
                WHERE EMPNIT='${sucursal}' AND ID=${id};`;     
  
    execute.Query(res,qry);

});

router.post("/delete_mesa", async(req,res)=>{
   
    const {sucursal,codigo} = req.body;
        
    let qry ='';

    qry = `DELETE FROM RESTAURANTE_MESAS WHERE EMPNIT='${sucursal}' AND ID=${codigo}`     
  
    execute.Query(res,qry);

});




module.exports = router;
