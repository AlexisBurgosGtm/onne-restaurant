const execute = require('./connection');
const express = require('express');
const router = express.Router();

// LISTA DE NOTICIAS
router.get("/listado", async(req,res)=>{
    
            
    let qry ='';

    qry = `SELECT ID,USUARIO,NOTICIA,FECHA,PRIORIDAD FROM ME_NOTICIAS WHERE ACTIVO=0 ORDER BY ID DESC`;     
  
    execute.Query(res,qry);

});



module.exports = router;
