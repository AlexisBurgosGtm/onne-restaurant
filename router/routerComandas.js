const execute = require('./connection');
const express = require('express');
const router = express.Router();

//obtiene las mesas
router.post('/mesas',async(req,res)=>{
    const sucursal = req.body.sucursal;
    let qry = `SELECT ID, CODMESA AS CODIGO, DESMESA AS NOMBRE, OCUPADA FROM RESTAURANTE_MESAS WHERE EMPNIT='${sucursal}'`
    execute.Query(res,qry);

})

//obtiene la LISTA DE PRODUCTOS
router.post('/productos',async(req,res)=>{
    const sucursal = req.body.sucursal;
    let qry = `SELECT PRECIOS.CODPROD, PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, PRECIOS.CODMEDIDA, PRECIOS.EQUIVALE, PRECIOS.COSTO, PRECIOS.PRECIO, PRECIOS.MAYOREOA, PRECIOS.MAYOREOB, 
                PRECIOS.MAYOREOC, PRODUCTOS.CODMARCA, MARCAS.DESMARCA, PRODUCTOS.CODCLAUNO, CLASIFICACIONUNO.DESCLAUNO
                FROM PRECIOS INNER JOIN
                PRODUCTOS ON PRECIOS.EMPNIT = PRODUCTOS.EMPNIT AND PRECIOS.CODPROD = PRODUCTOS.CODPROD LEFT OUTER JOIN
                CLASIFICACIONUNO ON PRODUCTOS.CODCLAUNO = CLASIFICACIONUNO.CODCLAUNO AND PRODUCTOS.EMPNIT = CLASIFICACIONUNO.EMPNIT LEFT OUTER JOIN
                MARCAS ON PRODUCTOS.CODMARCA = MARCAS.CODMARCA AND PRODUCTOS.EMPNIT = MARCAS.EMPNIT
                WHERE (PRECIOS.EMPNIT = '${sucursal}') ORDER BY PRODUCTOS.DESPROD`
    execute.Query(res,qry);

});

// obtiene el total de temp ventas según sea el usuario
router.post("/totalcuenta", async(req,res)=>{
    const {sucursal,idmesa,cuenta} = req.body;

    let qry = '';
    if(cuenta==0){
        qry = `SELECT ID,CODPROD,DESPROD, CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,CUENTA,DESPACHADO
        FROM TEMP_COMANDA
        WHERE (EMPNIT = '${sucursal}') AND (IDMESA = ${idmesa}) ORDER BY DESPACHADO`

    }else{
        qry = `SELECT ID,CODPROD,DESPROD, CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,CUENTA,DESPACHADO
        FROM TEMP_COMANDA
        WHERE (EMPNIT = '${sucursal}') AND (IDMESA = ${idmesa}) AND (CUENTA=${cuenta})  ORDER BY DESPACHADO`
    }
    

    execute.Query(res,qry);
    
});

// obtiene el total de temp ventas según sea el usuario
router.post("/editarproducto", async(req,res)=>{
    const {id,cantidad,totalunidades,totalcosto,totalprecio,obs} = req.body;

    let qry = '';
    qry = `UPDATE TEMP_COMANDA SET 
            CANTIDAD=${cantidad},TOTALUNIDADES=${totalunidades},TOTALCOSTO=${totalcosto},
            TOTALPRECIO=${totalprecio},OBS='${obs}' WHERE ID=${id}`;

    execute.Query(res,qry);
    
});

// obtiene el total de temp ventas según sea el usuario
router.post("/eliminarproducto", async(req,res)=>{
    const {id} = req.body;

    let qry = '';
    qry = `DELETE FROM TEMP_COMANDA WHERE ID=${id}`;

    execute.Query(res,qry);
    
});

router.post("/statusmesa", async(req,res)=>{
    const {id,ocupada} = req.body;

    let qry = '';
    qry = `UPDATE RESTAURANTE_MESAS SET OCUPADA='${ocupada}' WHERE ID=${id}`;

    execute.Query(res,qry);
    
});

// inserta un nuevo registro en temp ventas   
router.post("/agregarproducto", async(req,res)=>{
    let empnit = req.body.empnit;
    let coddoc = req.body.coddoc;
    let usuario = req.body.usuario;
    let idmesa = req.body.idmesa;
    let codprod = req.body.codprod;
    let desprod = req.body.desprod;
    let codmedida= req.body.codmedida;
    let cantidad=Number(req.body.cantidad);
    let equivale = Number(req.body.equivale);
    let totalunidades = Number(req.body.totalunidades);
    let costo = Number(req.body.costo);
    let precio=Number(req.body.precio);
    let totalcosto =Number(req.body.totalcosto);
    let totalprecio=Number(req.body.totalprecio);
    let exento=Number(req.body.exento);
    let obs = req.body.obs;
    let cuenta = Number(req.body.cuenta);

    

    let qry = '';

    
            qry = `INSERT INTO TEMP_COMANDA 
            (EMPNIT,CODDOC,IDMESA,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,EXENTO,OBS,DESPACHADO,CUENTA) 
    VALUES ('${empnit}','${coddoc}',${idmesa},'${codprod}','${desprod}','${codmedida}',${cantidad},${equivale},${totalunidades},${costo},${precio},${totalcosto},${totalprecio},${exento},'${obs}','AN',${cuenta})`    
    console.log(qry);
   execute.Query(res,qry);

});

// manda el pedido a cocina
router.post("/confirmarproductos", async(req,res)=>{
    const {sucursal,idmesa} = req.body;

    let qry = '';
    qry = `UPDATE TEMP_COMANDA SET DESPACHADO='NO' WHERE EMPNIT='${sucursal}' AND DESPACHADO='AN' AND IDMESA=${idmesa}`;

    execute.Query(res,qry);
    
});

// confirma que ya se despachado
router.post("/confirmardespacho", async(req,res)=>{
    
    const {sucursal,id} = req.body;

    let qry = '';
    qry = `UPDATE TEMP_COMANDA SET DESPACHADO='SI' WHERE EMPNIT='${sucursal}' AND ID=${id}`;

    execute.Query(res,qry);
    
});

router.post("/solicitarcuenta", async(req,res)=>{
    const {id,sucursal} = req.body;

    let qry = '';
    qry = `UPDATE RESTAURANTE_MESAS SET CUENTA='SI', OCUPADA='NO' WHERE ID=${id} AND EMPNIT='${sucursal}'`;

    execute.Query(res,qry);
    
});

// obtiene el total de temp ventas según sea el usuario
router.post("/pedidospendientes", async(req,res)=>{
    const {sucursal,status} = req.body;

    let qry = '';
    
        qry = `SELECT TEMP_COMANDA.ID, TEMP_COMANDA.CODPROD, TEMP_COMANDA.DESPROD, TEMP_COMANDA.CODMEDIDA, TEMP_COMANDA.CANTIDAD, TEMP_COMANDA.EQUIVALE, TEMP_COMANDA.TOTALUNIDADES, 
                TEMP_COMANDA.COSTO, TEMP_COMANDA.PRECIO, TEMP_COMANDA.TOTALCOSTO, TEMP_COMANDA.TOTALPRECIO, TEMP_COMANDA.CUENTA, TEMP_COMANDA.DESPACHADO, RESTAURANTE_MESAS.DESMESA, 
                TEMP_COMANDA.OBS
                FROM TEMP_COMANDA LEFT OUTER JOIN
                RESTAURANTE_MESAS ON TEMP_COMANDA.EMPNIT = RESTAURANTE_MESAS.EMPNIT AND TEMP_COMANDA.IDMESA = RESTAURANTE_MESAS.ID
                WHERE (TEMP_COMANDA.EMPNIT = '${sucursal}') AND (TEMP_COMANDA.DESPACHADO = '${status}')
                ORDER BY TEMP_COMANDA.ID,TEMP_COMANDA.IDMESA`

    execute.Query(res,qry);
    
});

// INSERTA EL DOCUMENTO
router.post("/documento", async (req,res)=>{
    const {app,empnit,anio,mes,dia,coddoc,fecha,fechaentrega,formaentrega,codcliente,nomclie,codbodega,totalcosto,totalprecio,nitclie,dirclie,obs,direntrega,usuario,codven} = req.body;
    let correlativo = req.body.correlativo;
    let ncorrelativo = correlativo;

    //variables sin asignar
    let concre = 'CON';
    let abono = totalprecio; let saldo = 0;
    let pagotarjeta = 0; let recargotarjeta = 0;
    let codrep = 0;
    let totalexento=0;
    
    let nuevocorrelativo = Number(ncorrelativo) + 1;


    let qry = ''; // inserta los datos en la tabla documentos
    let qrydoc = ''; // inserta los datos de la tabla docproductos
    let qrycorrelativo = ''; //actualiza el correlativo del documento

                
        qry = `INSERT INTO DOCUMENTOS 
        (EMPNIT,ANIO,MES,DIA,FECHA,HORA,MINUTO,	CODDOC,CORRELATIVO,CODCLIENTE,DOC_NIT,DOC_NOMCLIE,DOC_DIRCLIE,TOTALCOSTO,TOTALPRECIO,CODEMBARQUE,STATUS,CONCRE,USUARIO,CORTE,SERIEFAC,NOFAC,CODVEN,PAGO,VUELTO,MARCA,OBS, DOC_ABONO, DOC_SALDO,TOTALTARJETA, RECARGOTARJETA,TOTALEXENTO,DIRENTREGA) 
            VALUES
        ('${empnit}',${anio},${mes},${dia},'${fecha}',0,0,'${coddoc}',${ncorrelativo},${codcliente},'${nitclie}','${nomclie}','${dirclie}',${totalcosto},${totalprecio},'GENERAL','O','${concre}','${usuario}','NO','${coddoc}',${ncorrelativo},${codven},${totalprecio},0,'NO','${obs}',${abono},${saldo},${pagotarjeta},${recargotarjeta},${totalexento},'${direntrega}')`;
        
        qrydoc = `INSERT INTO DOCPRODUCTOS 
        (EMPNIT,ANIO,MES,DIA,CODDOC,CORRELATIVO,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,ENTREGADOS_TOTALUNIDADES,
            ENTREGADOS_TOTALCOSTO,ENTREGADOS_TOTALPRECIO,COSTOANTERIOR,COSTOPROMEDIO,CANTIDADBONIF,TOTALBONIF,NOSERIE,EXENTO) 
        SELECT EMPNIT,${anio} AS ANIO, ${mes} AS MES,${dia} AS DIA, CODDOC,${ncorrelativo} AS CORRELATIVO, CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,
            TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,TOTALUNIDADES,TOTALCOSTO,TOTALPRECIO,COSTO,COSTO,BONIF,TOTALBONIF,NOSERIE,EXENTO 
        FROM TEMP_VENTAS WHERE EMPNIT='${empnit}' AND USUARIO='${usuario}' AND CODDOC='${coddoc}'`;

        qrycorrelativo =`UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevocorrelativo} WHERE EMPNIT='${empnit}' AND CODDOC='${coddoc}'`

    execute.Query(res,qry + qrydoc + qrycorrelativo);
    
});


module.exports = router;
