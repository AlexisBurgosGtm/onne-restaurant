const execute = require('./connection');
const express = require('express');
const router = express.Router();




router.post("/solicitarcuenta", async(req,res)=>{
    const {sucursal,id,codempleado,nit,nombre,direccion,obs,
        factura,fecha,dia,mes,anio,hora,minuto,coddoc,correlativo,totalcosto,totalprecio} = req.body;
    
        let nuevocorrelativo = Number(correlativo)+1;

    let qry = '';
    qry = `
    INSERT INTO DOCUMENTOS 
                (EMPNIT,ANIO,MES,DIA,FECHA,HORA,MINUTO,	CODDOC,CORRELATIVO,CODCLIENTE,DOC_NIT,DOC_NOMCLIE,DOC_DIRCLIE,TOTALCOSTO,TOTALPRECIO,CODEMBARQUE,STATUS,CONCRE,USUARIO,CORTE,NOCORTE,SERIEFAC,NOFAC,CODVEN,PAGO,VUELTO,MARCA,OBS, DOC_ABONO, DOC_SALDO,TOTALTARJETA, RECARGOTARJETA,CODREP,TOTALEXENTO,DIRENTREGA,VENCIMIENTO,DIASCREDITO,CODCAJA,TOTALIVA,TOTALSINIVA,VALORENTREGA,OBSMARCA) 
				    VALUES
				('${sucursal}',${anio},${mes},${dia},'${fecha}',${hora},${minuto},'${coddoc}',${correlativo},0,'${nit}','${nombre}','${direccion}',${totalcosto},${totalprecio},'COMANDA','O','CON','RESTAURANTE','NO',${id},'${coddoc}',${correlativo},${codempleado},${totalprecio},0,'NO','${obs}',${totalprecio},0,0,0,NULL,0,'SN','${fecha}',0,1,0,0,0,'${factura}');
    INSERT INTO DOCPRODUCTOS 
                (EMPNIT,ANIO,MES,DIA,CODDOC,CORRELATIVO,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,ENTREGADOS_TOTALUNIDADES,
				    ENTREGADOS_TOTALCOSTO,ENTREGADOS_TOTALPRECIO,COSTOANTERIOR,COSTOPROMEDIO,CANTIDADBONIF,TOTALBONIF,NOSERIE,EXENTO,OBS,LASTUPDATE,TIPOPROD, TIPOPRECIO) 
	    SELECT EMPNIT,${anio} AS ANIO, ${mes} AS MES,${dia} AS DIA, '${coddoc}' AS CODDOC,${correlativo} AS CORRELATIVO, 
                    CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,
				    TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,TOTALUNIDADES,TOTALCOSTO,TOTALPRECIO AS ENTREGADOS_TOTALPRECIO,COSTO,COSTO,0 AS BONIF,
                    0 AS TOTALBONIF,CODEMPLEADO AS NOSERIE,0 AS EXENTO,OBS,'${fecha}' AS LASTUPDATE, 'P' AS TIPOPROD, 'P' AS TIPOPRECIO 
	            FROM TEMP_COMANDA WHERE EMPNIT='${sucursal}' AND IDMESA=${id};
    UPDATE TIPODOCUMENTOS SET CORRELATIVO=${nuevocorrelativo} WHERE EMPNIT='${sucursal}' AND CODDOC='${coddoc}';
    `;


    execute.Query(res,qry);
    
});


router.post("/desocupar_mesa", async(req,res)=>{
    const {id,sucursal} = req.body;

    let qry = '';
    qry = `UPDATE RESTAURANTE_MESAS SET OCUPADA='NO' WHERE ID=${id} AND EMPNIT='${sucursal}';`;

    execute.Query(res,qry);
    
});


router.post("/eliminarcomanda", async(req,res)=>{
    const {sucursal,id} = req.body;

    let qry = '';
    qry = `DELETE FROM TEMP_COMANDA WHERE EMPNIT='${sucursal}' AND IDMESA=${id}`;

    execute.Query(res,qry);
    
});


/*
router.post("/solicitarcuenta", async(req,res)=>{
    const {id,sucursal} = req.body;

    let qry = '';
    qry = `UPDATE RESTAURANTE_MESAS SET CUENTA='SI', OCUPADA='NO' WHERE ID=${id} AND EMPNIT='${sucursal}'`;

    execute.Query(res,qry);
    
});
*/

//obtiene las mesas
router.post('/mesas',async(req,res)=>{
    const sucursal = req.body.sucursal;
    let qry = `SELECT ID, CODMESA AS CODIGO, DESMESA AS NOMBRE, OCUPADA FROM RESTAURANTE_MESAS WHERE EMPNIT='${sucursal}' 
                ORDER BY CODMESA`
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
                WHERE (PRECIOS.EMPNIT = '${sucursal}') AND (PRODUCTOS.HABILITADO='SI')
                ORDER BY PRODUCTOS.DESPROD`
    execute.Query(res,qry);

});

// obtiene el total de temp ventas según sea el usuario
router.post("/totalcuenta", async(req,res)=>{
    const {sucursal,idmesa,cuenta} = req.body;

    let qry = '';
    if(cuenta==0){
        qry = `SELECT ID,CODPROD,DESPROD, CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,CUENTA,DESPACHADO, ISNULL(OBS,'SN') AS OBS
        FROM TEMP_COMANDA
        WHERE (EMPNIT = '${sucursal}') AND (IDMESA = ${idmesa}) ORDER BY DESPACHADO`

    }else{
        qry = `SELECT ID,CODPROD,DESPROD, CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,CUENTA,DESPACHADO, ISNULL(OBS,'SN') AS OBS
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
    let codempleado = Number(req.body.codempleado) || 0;
    

    let qry = '';

    
            qry = `INSERT INTO TEMP_COMANDA 
            (EMPNIT,CODDOC,IDMESA,CODPROD,DESPROD,CODMEDIDA,CANTIDAD,EQUIVALE,TOTALUNIDADES,COSTO,PRECIO,TOTALCOSTO,TOTALPRECIO,EXENTO,OBS,DESPACHADO,CUENTA,CODEMPLEADO) 
    VALUES ('${empnit}','${coddoc}',${idmesa},'${codprod}','${desprod}','${codmedida}',${cantidad},${equivale},${totalunidades},${costo},${precio},${totalcosto},${totalprecio},${exento},'${obs}','AN',${cuenta},${codempleado})`    
    //console.log(qry);
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



module.exports = router;
