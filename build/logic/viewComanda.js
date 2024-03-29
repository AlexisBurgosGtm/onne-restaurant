function getView(){
    let view = {
        body:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="meseros" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.meseros()}
                        </div>
                        <div class="tab-pane fade" id="mesas" role="tabpanel" aria-labelledby="home-tab">
                            ${view.mesas()}
                        </div>
                        <div class="tab-pane fade" id="comanda" role="tabpanel" aria-labelledby="home-tab">  
                            ${view.comanda_encabezado() + view.comanda_listado() + view.comanda_btnNuevo() + view.comanda_containerCantidad() }
                        </div>
                      
                    </div>
            
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-meseros" data-toggle="tab" href="#meseros" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Meseros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-mesas" data-toggle="tab" href="#mesas" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>Mesas</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-comanda" data-toggle="tab" href="#comanda" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>Comanda</a>
                        </li>
                                
                    </ul>
            </div>
            `
        },
        meseros: ()=>{
            return `
        <div class="row">
            <div class="col-12">

                <div class="card card-user card-rounded shadow">    
                    <div class="card-body">
                        
                        <div class="row">
                        
                                <div class="col-6">
                                    <div class="text-left">
                                        <img class="avatar border-gray" width="70" height="70" src="./logoempresa.png" alt="...">
                                    </div>
                                </div>
 
                                <div class="col-6">

                                    <h4 class="text-info">Seleccione su mesero</h4>
                        
                                </div>
                        </div>

                        
                    
                    </div>
                </div>

            </div>
        </div>

        <hr class="solid">
        
        <div class="row" id='tblListaEmpleados'>
            
        </div>
        
        <div class="btn-bottom-left">
            <button class="btn btn-secondary btn-circle hand shadow btn-xl" id="btnAtrasMeseros">
                <i class="fal fa-home"></i>
            </button>
        </div>
            `
        },
        btnAtras:()=>{
            return `
            <div class="btn-bottom-left">
                <button class="btn btn-info btn-circle hand shadow btn-xl" id="">
                    <i class="fal fa-arrow-left"></i>
                </button>
            </div>
            `
        },
        modalClave:()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalClave">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="dropdown-header bg-danger d-flex justify-content-center align-items-center w-100">
                        <h4 class="m-0 text-center color-white">
                            Ingrese su clave
                        </h4>
                        
                        <button type="button" class="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="" id="">
                                                                        
                            
                            
                        </div>
                        <span id="saving"></span>
                    </div>
                    <div class="modal-footer">

                        <button class="btn btn-sm btn-danger position-absolute pos-bottom pos-right " id="btnCerrarModalMenuLateral" data-dismiss="modal"><<- Regresar</button>
                    </div>
                </div>
            </div>
        </div>
            `
        },
        mesas:()=>{
            return `
            <div class="row" id="tblMesas">
                
            </div>
            <div class="btn-bottom-left">
                <button class="btn btn-secondary btn-circle hand shadow btn-xl" id="btnAtrasMesas">
                    <i class="fal fa-arrow-left"></i>
                </button>
            </div>
            `
        },
        comanda_encabezado :()=>{
            return `
            <div class="row navbar-fixed">
                <div class="col-6 text-left">

                    <h3 id="lbNomMesa"><h3>
                    <h1 class="text-danger" style="font-size:35px" id="lbTotalVenta">Q 0.00</h1>
                                                              
                </div>
                <div class="col-6 text-right">
                    <button class="btn btn-danger btn-circle hand shadow btn-xl" type="button" id="btnSolicitarCuenta">
                        <i class="fal fa-dollar-sign"></i>
                    </button>                
                </div>
                
            </div>
            `
        },
        comanda_listado :()=>{
            return `
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-responsive table-hover table-bordered table-striped col-12">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Producto</td>
                                <td>Cantidad</td>
                                <td></td>
                            </tr>
                        </thead>
                    
                    <tbody id="tblPedido"></tbody>
                    </table>
                </div>
            </div>
            <div class="btn-bottom-left">
                <button class="btn btn-secondary btn-circle hand shadow btn-xl" id="btnAtrasComanda">
                    <i class="fal fa-arrow-left"></i>
                </button>
            </div>
            <div class="btn-bottom-middle">
                <button class="btn btn-primary btn-xl btn-circle hand shadow" id="btnSolicitarProducto">
                    <i class="fal fa-paper-plane"></i>
                </button>

            </div>

            `
        },
        comanda_btnNuevo:()=>{
            return `
            <div id="fixed-btn2">
                <button class="btn btn-success btn-circle btn-xl shadow hand" id="btnNuevoProducto">
                    <i class="fal fa-utensils"></i>
                </button>
            </div>
            `
        },
        comanda_containerCantidad:()=>{
            return `<div id="rootModalCantidad"></div>`;
        },
        comanda_listadoProductos:()=>{
            return `
            <div class="row">
                
                <div class="col-12">
                    <div class="table-responsive">
                        <div class="form-group p-4">
                            <label>Buscar</label>
                            <input type="text" class="form-control bg-amarillo border-info negrita" placeholder="Escriba para filtrar" id="txtBuscarProd">
                        </div>
                        <table class="table table-responsive table-striped table-hover table-bordered" id="tablaProductos">
                            <thead class="bg-success text-white">
                                <tr>
                                    <td>Producto</td>
                                    <td>Precio</td>
                                </tr>
                            </thead>
                            <tbody id="tblListaProductos"></tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            `
        },
        comanda_modalFinalizar:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalFinalizar">
                <div class="modal-dialog">
                    <div class="modal-content">
                        
                        <div class="modal-header bg-info text-white">
                            <h3>Datos del Cliente</h3>
                        </div>
                        
                        <div class="modal-body p-4" style="font-size:80%">
                            <div class="card card-rounded shadow  p-4">
                              
                                <div class="form-group">
                                    <label class="negrita">NIT</label>
                                    <input type="text" class="form-control border-info" value="CF" id="txtNit">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">Nombre</label>
                                    <input type="text" class="form-control border-info" value="Consumidor Finalr" id="txtNombre">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">Dirección</label>
                                    <input type="text" class="form-control border-info" value="Ciudad" id="txtDireccion">
                                </div>

                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <input type="text" class="form-control border-info negrita" id="txtMesa" disabled=true>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <select class="form-control border-info" id="cmbFactura">
                                            <option value="NO">SIN FACTURA</option>
                                            <option value="SI">CON FACTURA</option>
                                        </select>
                                    </div>
                                </div>

                                <hr class="solid">

                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-xl btn-secondary btn-circle shadow hand" data-dismiss="modal">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-xl btn-info btn-circle shadow hand" id="btnGuardarComanda">
                                            <i class="fal fa-save"></i>
                                        </button>
                                    </div>   
                                </div>


                            </div>
                        
                        </div>
                       
                    </div>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.body() + view.comanda_modalFinalizar();
    rootMenuLateral.innerHTML = view.comanda_listadoProductos();
};

async function addListeners(){
    
    GlobalSelectedIdMesa =0;

    document.getElementById('txtBuscarProd').addEventListener('keyup',()=>{
        if(document.getElementById('txtBuscarProd').value==''){return}

        funciones.FiltrarTabla('tablaProductos','txtBuscarProd');
    })

    //tab meseros
    document.getElementById('btnAtrasMeseros').addEventListener('click',()=>{
        classNavegar.inicio();
    });

    cargarGrid();
 

    //tab mesas" role="
    document.getElementById('btnAtrasMesas').addEventListener('click',()=>{
        
        document.getElementById('lbUsuario').innerText = 'Meseros';
        GlobalUser = '';

        document.getElementById('tab-meseros').click();
    });

    getMesas();

    //tab comandas
    document.getElementById('btnAtrasComanda').addEventListener('click',()=>{
        getMesas();            
        document.getElementById('tab-mesas').click();
    });

    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',async()=>{
        await cargarGridProductos();
        getMenuLateral();
    });

 
    let btnSolicitarProducto = document.getElementById('btnSolicitarProducto');
    btnSolicitarProducto.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Enviar este Pedido?')
        .then((value)=>{
            if(value==true){
               
                btnSolicitarProducto.disabled = true;
                btnSolicitarProducto.innerHTML = `<i class="fal fa-paper-plane fa-spin"></i>`;

                api.solicitarComanda(GlobalSelectedIdMesa)
                .then(()=>{
                    funciones.Aviso('Pedido solicitado exitosamente !! ')
                    cargarGridPedido(GlobalSelectedIdMesa);
                    
                    socket.emit('comandas nueva','solicitar comanda');

                    btnSolicitarProducto.disabled = false;
                    btnSolicitarProducto.innerHTML = `<i class="fal fa-paper-plane"></i>`;

                })
                .catch(()=>{
                    funciones.AvisoError('Error al enviar el pedido, inténtelo de nuevo');

                    btnSolicitarProducto.disabled = false;
                    btnSolicitarProducto.innerHTML = `<i class="fal fa-paper-plane"></i>`;

                })
            }
        });
    });

    let btnSolicitarCuenta = document.getElementById('btnSolicitarCuenta');
    btnSolicitarCuenta.addEventListener('click',()=>{



        let txtNit = document.getElementById('txtNit');
        let txtNombre = document.getElementById('txtNombre');
        let txtDireccion = document.getElementById('txtDireccion');
        let cmbFactura = document.getElementById('cmbFactura');
        

        txtNit.value = 'CF';
        txtNombre.value = 'CONSUMIDOR FINAL';
        txtDireccion.value = 'CIUDAD';
        cmbFactura.value = 'NO';

        $('#modalFinalizar').modal('show');



        return;

        funciones.Confirmacion('¿Está seguro que desea Solicitar la CUENTA de esta mesa?')
        .then((value)=>{



            /*
            if(value==true){
                api.solicitarCuenta(GlobalSelectedIdMesa)
                .then(()=>{
                    funciones.Aviso('Cuenta solicitada Exitosamente!!')
                    socket.emit('comandas finalizada','')
                    classNavegar.inicioMesas();
                })
                .catch(()=>{
                    funciones.AvisoError('Ocurrió un error!! inténtelo de nuevo.s')
                })
                

            }
            */
        })

    });

   let btnGuardarComanda = document.getElementById('btnGuardarComanda');
   btnGuardarComanda.addEventListener('click',()=>{

                funciones.Confirmacion('¿Está seguro que desea Solicitar la CUENTA de esta mesa?')
                .then((value)=>{

                    let nit = document.getElementById('txtNit').value || 'CF';
                    let nombre = document.getElementById('txtNombre').value || 'CONSUMIDOR FINAL';
                    let direccion = document.getElementById('txtDireccion').value || 'CIUDAD';
                    let cmbFactura = document.getElementById('cmbFactura').value;
                
                    if(value==true){

                        btnGuardarComanda.innerHTML = '<i class="fal fa-save fa-spin"></i>';
                        btnGuardarComanda.disabled = true;

                        api.getCorrelativo(GlobalCoddoc)
                        .then((correlativo)=>{
                            solicitarCuenta(nit, nombre, direccion, cmbFactura,correlativo)
                            .then(()=>{

                                btnGuardarComanda.innerHTML = '<i class="fal fa-save"></i>';
                                btnGuardarComanda.disabled = false;
                                        
                                $('#modalFinalizar').modal('hide');

                                deleteTempComanda(GlobalSelectedIdMesa);   

                                funciones.Aviso('Cuenta Finalizada Exitosamente!!')
                                socket.emit('comandas finalizada','')
                                
                                
                                desocupar_mesa(GlobalSelectedIdMesa)
                                .then(()=>{

                                    document.getElementById('tab-mesas').click();
                                    getMesas();  
    
                                   
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No se logró desocupar la mesa');
                                })
                                
                                                     


                            })
                            .catch(()=>{
                                funciones.AvisoError('Ocurrió un error!! inténtelo de nuevos');
                                btnGuardarComanda.innerHTML = '<i class="fal fa-save"></i>';
                                btnGuardarComanda.disabled = false;
                            })
                        })
                        .catch(()=>{
                            funciones.AvisoError('No se pudo obtener el correlativo');

                        })
                                
                                

                    }
                
                })


   });


    funciones.modalCantidad('rootModalCantidad');
    
    funciones.slideAnimationTabs();

    
};

function initView(){
    getView();
    addListeners();
};




//tab meseros

function getMeseros(idContainer){

    GlobalCodempleado = 0;

    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
        
    let strdata = '';

    axios.post('/empleados/vendedores', {  
        sucursal: GlobalSucursal,
        tipo:3
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
                strdata = strdata + `
            <div class="col-6 p-2">
                <div class="p-4 bg-info-300 card-rounded shadow overflow-hidden position-relative text-white mb-g hand"  onclick="getClaveMesero('${rows.NOMBRE}','${rows.CLAVE}','${rows.CODIGO}','${rows.CODDOC}');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            ${rows.NOMBRE}
                            <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                        </h3>
                    </div>
                    <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                </div>
            </div>
                `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');

    });  
};

function cargarGrid(){
    getMeseros('tblListaEmpleados');
};

function getClaveMesero(usuario,clave,codigo,coddoc){
    
    GlobalCodempleado = Number(codigo);
    GlobalUser = usuario;
    GlobalCoddoc = coddoc;

    document.getElementById('lbUsuario').innerText = GlobalUser;
    document.getElementById('tab-mesas').click();
    getMesas();
  
};


// tab mesas
function getMesas(){

    let container = document.getElementById('tblMesas');
    container.innerHTML = GlobalLoader;
        
    let strdata = '';

    axios.post('/comandas/mesas', {  
        sucursal: GlobalSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            let color = ''; if(rows.OCUPADA=='NO'){color='success'}else{color='danger'}
                strdata = strdata + `
            <div class="col-xs-3 col-sm-3 col-xl-3 col-md-3 col-lg-3 p-2">

                <div class="card card-rounded shadow  bg-${color}-300 hand" style="font-size:60%" onclick="selectMesa(${rows.ID},'${rows.NOMBRE}');">
                    <div class="card-body">
                        <div class="p-3 rounded overflow-hidden position-relative text-white mb-g">
                            <div class="">
                                <h3 class="display-6 d-block l-h-n m-0 fw-500">
                                    ${rows.NOMBRE}
                                    <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                                </h3>
                            </div>
                            <i class="fal fa-utensils position-absolute pos-right pos-bottom opacity-70 mb-n1 mr-n1" style="font-size:4rem"></i>
                        </div>
                    </div>
                </div>

            </div>
                `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');

    });  
};

function BACKUP_getMesas(){

    let container = document.getElementById('tblMesas');
    container.innerHTML = GlobalLoader;
        
    let strdata = '';

    axios.post('/comandas/mesas', {  
        sucursal: GlobalSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            let color = ''; if(rows.OCUPADA=='NO'){color='success'}else{color='danger'}
                strdata = strdata + `
            <div class="col-xs-3 col-sm-3 col-xl-3 col-md-3 col-lg-3 p-2">

                <div class="card card-rounded shadow  bg-${color}-300 hand" style="font-size:60%" onclick="selectMesa(${rows.ID},'${rows.NOMBRE}');">
                    <div class="card-body">
                        <div class="p-3 rounded overflow-hidden position-relative text-white mb-g">
                            <div class="">
                                <h3 class="display-6 d-block l-h-n m-0 fw-500">
                                    ${rows.NOMBRE}
                                    <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                                </h3>
                            </div>
                            <i class="fal fa-utensils position-absolute pos-right pos-bottom opacity-70 mb-n1 mr-n1" style="font-size:4rem"></i>
                        </div>
                    </div>
                </div>

            </div>
                `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');

    });  
};

function selectMesa(idMesa,nombreMesa){

    GlobalSelectedIdMesa = Number(idMesa);

    document.getElementById('lbNomMesa').innerText = nombreMesa;
    document.getElementById('txtMesa').value = nombreMesa;
    

    document.getElementById('tab-comanda').click();

    cargarGridPedido(GlobalSelectedIdMesa);
      
};


//tab comanda
function cargarGridProductos(){
    getComandaProductos('tblListaProductos')
};

async function cargarGridPedido(idMesa){
 
    let cmbCuenta =0;

    await api.getTotalCuenta(idMesa,'lbTotalVenta','tblPedido',cmbCuenta);
    
};

function getComandaProductos(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
        
    let strdata = '';

    axios.post('/comandas/productos', {  
        sucursal: GlobalSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            strdata = strdata + `
                <tr class="border-info hand" onclick="addProduct('${rows.CODPROD}','${rows.DESPROD}','${rows.CODMEDIDA}',${rows.EQUIVALE},${rows.COSTO},${rows.PRECIO})">
                    <td>${rows.DESPROD}<br>
                        <small class="text-info">${rows.DESPROD2}</small>
                    </td>
                    <td class="">
                        <b>${funciones.setMoneda(rows.PRECIO,'Q')}</b>
                        <br>
                        <small class="text-danger"><b>${rows.CODMEDIDA}</b></small>
                    </td>
                   
                </tr>
                `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
    });  

};


function addProduct(codprod,desprod,codmedida,equivale,costo,precio){

    let obs = prompt("Observaciones de la orden", "");

    
    api.insertTempComanda(GlobalSelectedIdMesa,codprod,desprod,codmedida,1,equivale,costo,precio,0,obs,0,GlobalCodempleado)
    .then(()=>{
        //closeMenuLateral();
        funciones.showToast('Producto agregado a la Orden');

        cargarGridPedido(GlobalSelectedIdMesa);
    })
    
};

function getProductoPedidoOpciones(id,costo,precio,cantidad,equivale){
    console.log(`${id},${costo},${precio},${cantidad},${equivale}`);
    GlobalSelectedId =id;
    GlobalSelectedCosto = costo;
    GlobalSelectedPrecio = precio;
    GlobalSelectedEquivale = equivale;

    document.getElementById('lbCalcTotal').innerText='';    
    $("#ModalCantidad").modal('show');

};

function fcnUpdateRowPedido(id,costo,precio,equivale,nuevacantidad){
    //let nuevacantidad = Number(document.getElementById('lbCalcTotal').innerText);
    api.updateTempComanda(id,costo,precio,nuevacantidad,equivale,'')
    .then(async()=>{
        await cargarGridPedido(GlobalSelectedIdMesa);
    })

};

function fcnDeleteRowPedido(id){
    api.deleteTempComanda(id)
    .then(async()=>{
        await cargarGridPedido(GlobalSelectedIdMesa);
    })
};


function solicitarCuenta(nit,nombre,direccion,factura,correlativo){
    
    cargarGridPedido(GlobalSelectedIdMesa);

    let fecha = funciones.getFecha();
    let d = new Date(fecha);

    let hoy = new Date();
    let hora = hoy.getHours();
    let minuto = hoy.getMinutes();

    return new Promise((resolve,reject)=>{
        axios.post('/comandas/solicitarcuenta', {
                sucursal:GlobalSucursal,
                id:GlobalSelectedIdMesa,
                codempleado:GlobalCodempleado,
                nit:nit,
                nombre:nombre,
                direccion:direccion,
                obs:'SN',
                factura:factura,
                fecha:fecha,
                dia:d.getUTCDate(),
                mes:d.getUTCMonth()+1,
                anio:d.getFullYear(),
                hora:hora,
                minuto:minuto,
                coddoc:GlobalCoddoc,
                correlativo:correlativo,
                totalcosto:GlobalTotalCosto,
                totalprecio:GlobalTotalVenta
        })
        .then((response) => {
            const data = response.data.recordset;
            if(response.data.rowsAffected[0]==0){
                reject();
            }else{
                resolve(data);
            }
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            reject(error);
        });

    })

};

function desocupar_mesa(idmesa){
        
    return new Promise((resolve,reject)=>{
        axios.post('/comandas/desocupar_mesa', {
            id:idmesa,
            sucursal:GlobalSucursal
        })
        .then((response) => {
            const data = response.data.recordset;
            if(response.data.rowsAffected[0]==0){
                reject();
            }else{
                resolve(data);
            }
        }, (error) => {
            reject(error);
        });

    })

};


function deleteTempComanda(idmesa){
        
    return new Promise((resolve,reject)=>{
        axios.post('/comandas/eliminarcomanda', {
            id:idmesa,
            sucursal:GlobalSucursal
        })
        .then((response) => {
            const data = response.data.recordset;
            if(response.data.rowsAffected[0]==1){
                resolve(data);
            }else{reject();}
            
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            reject(error);
        });

    })

};



































