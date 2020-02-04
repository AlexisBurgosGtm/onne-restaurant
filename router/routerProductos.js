const execute = require('./connection');
const express = require('express');
const router = express.Router();


//LISTADO MARCAS
router.post('/marcas', async(req,res)=>{
    
    let qry = `SELECT CODMARCA, DESMARCA FROM ME_MARCAS ORDER BY DESMARCA`;

    execute.Query(res,qry);
});

//LISTADO PRODUCTOS
router.post('/listado', async(req,res)=>{
    
    const filtro = req.body.filtro;

    let qry = `SELECT ME_Productos.CODPROD, ME_Productos.DESPROD, ME_Productos.EQUIVALEINV, isnull(ME_Productos.PRECIOMONEDA,0) AS COSTO, ME_Productos.NOHABILITADO, ME_Marcas.DESMARCA, ME_Productos.LASTUPDATE
                FROM ME_Productos LEFT OUTER JOIN ME_Marcas ON ME_Productos.CODSUCURSAL = ME_Marcas.CODSUCURSAL AND ME_Productos.CODMARCA = ME_Marcas.CODMARCA AND ME_Productos.EMP_NIT = ME_Marcas.EMP_NIT
                WHERE (ME_Productos.DESPROD LIKE '%${filtro}%')`;

    console.log(qry);
    
    execute.Query(res,qry);
});

router.put('/status',async(req,res)=>{
    const {codprod,status} = req.body;
    let st;
    if(status==0){
        st =1;
    }else{
        st=0;
    }

    let qry = `UPDATE ME_PRODUCTOS SET NOHABILITADO=${st} WHERE CODPROD='${codprod}'`;
    execute.Query(res,qry);
    
}); 

module.exports = router;
