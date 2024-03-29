function getView(){

    let view = {
        menu:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">

                    <ul class="nav nav-tabs" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-productos" data-toggle="tab" href="#productos" role="tab" aria-controls="productos" aria-selected="true">
                                <i class="fal fa-list"></i>Producto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-meseros" data-toggle="tab" href="#meseros" role="tab" aria-controls="meseros" aria-selected="true">
                                <i class="fal fa-comments"></i>Mesero</a> 
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-mesas" data-toggle="tab" href="#mesas" role="tab" aria-controls="mesas" aria-selected="true">
                                <i class="fal fa-edit"></i>Mesa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-admin" data-toggle="tab" href="#admin" role="tab" aria-controls="admin" aria-selected="true">
                                <i class="fal fa-chart-pie"></i>Admins</a>
                        </li>  
                        <li class="nav-item hidden">
                            <a class="nav-link negrita text-warning" id="tab-marcas" data-toggle="tab" href="#marcas" role="tab" aria-controls="marcas" aria-selected="true">
                                <i class="fal fa-chart-pie"></i>Marca</a>
                        </li>
                      
                                
                    </ul>
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="productos" role="tabpanel" aria-labelledby="tab-productos">    
                            ${view.productos()}
                        </div>
                        <div class="tab-pane fade" id="meseros" role="tabpanel" aria-labelledby="tab-meseros">
                            ${view.meseros()}
                        </div>
                        <div class="tab-pane fade" id="mesas" role="tabpanel" aria-labelledby="tab-mesas">  
                            ${view.mesas()}
                        </div>
                        <div class="tab-pane fade" id="admin" role="tabpanel" aria-labelledby="tab-NARCAS">
                            ${view.admins()}
                        </div>
                        <div class="tab-pane fade" id="marcas" role="tabpanel" aria-labelledby="tab-NARCAS">
                            <h1>marcas</h1>
                        </div>
                    </div>
                    
              
            
                    
            </div>
            <div class="btn-bottom-left">
                <button class="btn btn-xl btn-circle btn-secondary hand shadow" id="btnAtrasAdmin">
                    <i class="fal fa-home"></i>
                </button>
            </div>
            `
        },
        productos : ()=>{
            return `
            <div class="row">
                <div class="card card-rounded shadow p-4 col-12 bg-success text-white">
                    <h5>Catálogo de productos</h5>
                    <select class="form-control col-6" id="tipoLista">
                        <option value="SI" class>Habilitados</option>
                        <option value="NO" class="text-danger">Deshabilitados</option>
                    </select>
                </div>
            </div>

            <div class="row">
              
                <div class="form-group">
                    <label></label>
                    <input type="text" class="form-control" placeholder="Escriba y presione BUSCAR.." id="txtBuscarProd">
                    <button class="btn btn-md btn-info hand shadow">
                        <i class="fal fa-search"></i>
                    </button>
                </div>
                <div class="card card-rounded shadow p-4 col-12">
                    <div class="table-responsive" id="containerProductos">



                    </div>
                </div>

                <div class="btn-bottom-right" id="fixed-btn2">
                    <button class="btn btn-xl btn-circle btn-success hand shadow" id="btnNuevoProducto">
                        +
                    </button>
                </div>

            </div>

                      
            ${view.modalNuevoProducto()}      
            
            `
        },
        modalNuevoProducto : ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevoProducto">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                      
                        <div class="modal-body p-2">
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12 bg-success text-white">
                                    <h5>Datos del producto</h5>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12">           
                                    <div class="form-group">
                                        <label>Código</label>
                                        <input type="text" class="form-control" id="txtPCodprod">
                                    </div>
                                    <div class="form-group">
                                        <label>Descripción</label>
                                        <input type="text" class="form-control" id="txtPDesprod">
                                    </div>
                                    <div class="form-group">
                                        <label>Descripción 2</label>
                                        <input type="text" class="form-control" id="txtPDesprod2">
                                    </div>
                                    <div class="form-group">
                                        <label>Marca/Clasificación</label>
                                        <select class="form-control" id="cmbPMarcas">
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Costo Unitario</label>
                                        <input type="number" class="form-control" id="txtPCosto">
                                    </div>

                                    <div class="form-group">
                                        <label>Precio</label>
                                        <input type="number" class="form-control"  id="txtPPrecio">
                                    </div>                
                                    
                                </div>

                            </div>

                           
                        </div>

                        <div class="modal-footer">

                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-xl btn-secondary btn-circle hand shadow" id="" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-xl btn-danger btn-circle hand shadow" id="btnPGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            `
        },
        meseros: ()=>{
            return `
                <div class="card card-rounded shadow p-4 col-12 bg-danger text-white">
                    <h5>Listado de Meseros</h5>
                </div>
                <div class="card card-rounded shadow p-4 col-12" id="containerMeseros">
                    
                </div>

                <div class="btn-bottom-right" id="fixed-btn2">
                    <button class="btn btn-xl btn-circle btn-success hand shadow" id="btnNuevoMesero">
                        +
                    </button>
                </div>

                ${view.modalNuevoMesero()}

            `
        },
        modalNuevoMesero : ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevoMesero">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                      
                        <div class="modal-body p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12 bg-danger text-white">
                                    <h5>Datos del Mesero</h5>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12">           
                                   
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" id="txtMeseroNombre">
                                    </div>
                                    <div class="form-group">
                                        <label>Clave</label>
                                        <input type="text" class="form-control" id="txtMeseroClave">
                                    </div>

                                    <div class="form-group">
                                        <label>Serie</label>
                                        <select class="form-control" id="cmbMeseroSerie">
                                            <option value="ENVIOS01">ENVIOS01</option>
                                            <option value="ENVIOS02">ENVIOS02</option>
                                            <option value="ENVIOS03">ENVIOS03</option>
                                            <option value="ENVIOS04">ENVIOS04</option>
                                            <option value="ENVIOS05">ENVIOS05</option>
                                            <option value="ENVIOS06">ENVIOS06</option>
                                            <option value="ENVIOS07">ENVIOS07</option>
                                            <option value="ENVIOS08">ENVIOS08</option>
                                            <option value="ENVIOS09">ENVIOS09</option>
                                            <option value="ENVIOS10">ENVIOS10</option>
                                        </select>
                                    </div>
                                                                                       
                                </div>
                            </div>
                           
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-xl btn-secondary btn-circle hand shadow" id="" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-xl btn-danger btn-circle hand shadow" id="btnMeseroGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        mesas:()=>{
            return `
            <div class="card card-rounded shadow p-4 col-12 bg-info text-white">
                <h5>Gestión de Mesas</h5>
            </div>
            <div class="card card-rounded shadow p-4 col-12" id="containerMesas">
                
            </div>

            <div class="btn-bottom-right" id="fixed-btn2">
                <button class="btn btn-xl btn-circle btn-success hand shadow" id="btnNuevaMesa">
                    +
                </button>
            </div>

            ${view.modalNuevaMesa()}

        `
        },
        modalNuevaMesa : ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevaMesa">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                      
                        <div class="modal-body p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12 bg-info text-white">
                                    <h5>Datos de la Mesa</h5>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12">           
                                   
                                    <div class="form-group">
                                        <label>Código</label>
                                        <input type="text" class="form-control" maxlength="10" id="txtMesaCodigo">
                                    </div>
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" id="txtMesaNombre">
                                    </div>

                                    <div class="form-group">
                                        <label>Sector</label>
                                        <select class="form-control" id="cmbMesaSector">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                                            
                                </div>
                            </div>
                           
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-xl btn-secondary btn-circle hand shadow" id="" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-xl btn-danger btn-circle hand shadow" id="btnMesaGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        admins: ()=>{
            return `
                <div class="card card-rounded shadow p-4 col-12 bg-secondary text-white">
                    <h5>Listado de Administradores</h5>
                </div>
                <div class="card card-rounded shadow p-4 col-12" id="containerAdmin">
                    
                </div>

                <div class="btn-bottom-right" id="fixed-btn2">
                    <button class="btn btn-xl btn-circle btn-success hand shadow" id="btnNuevoAdmin">
                        +
                    </button>
                </div>

                ${view.modalNuevoAdmin()}

            `
        },
        modalNuevoAdmin : ()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalNuevoAdmin">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                      
                        <div class="modal-body p-2 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12 bg-secondary text-white">
                                    <h5>Datos del Administrador</h5>
                                </div>
                            </div>
        
                            <div class="row">
                                <div class="card card-rounded shadow p-4 col-12">           
                                   
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" id="txtANombre">
                                    </div>
                                    <div class="form-group">
                                        <label>Clave</label>
                                        <input type="text" class="form-control" id="txtAClave">
                                    </div>

                                    <div class="form-group">
                                        <label>Serie</label>
                                        <select class="form-control" id="cmbASerie">
                                            <option value="ENVIOS01">ENVIOS01</option>
                                            <option value="ENVIOS02">ENVIOS02</option>
                                            <option value="ENVIOS03">ENVIOS03</option>
                                            <option value="ENVIOS04">ENVIOS04</option>
                                            <option value="ENVIOS05">ENVIOS05</option>
                                            <option value="ENVIOS06">ENVIOS06</option>
                                            <option value="ENVIOS07">ENVIOS07</option>
                                            <option value="ENVIOS08">ENVIOS08</option>
                                            <option value="ENVIOS09">ENVIOS09</option>
                                            <option value="ENVIOS10">ENVIOS10</option>
                                        </select>
                                    </div>
                                                                                       
                                </div>
                            </div>
                           
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-xl btn-secondary btn-circle hand shadow" id="" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>    
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-xl btn-danger btn-circle hand shadow" id="btnAGuardar">
                                        <i class="fal fa-save"></i>
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            `
        },
    }

    root.innerHTML = view.menu();

};

function addEventListeners(){

    GlobalSelectedIdMesa =0;


    let btnAtrasAdmin = document.getElementById('btnAtrasAdmin');
    btnAtrasAdmin.addEventListener('click',()=>{
        classNavegar.inicio();
    });


    //productos
    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',()=>{
        LimpiarDatos();
        $("#modalNuevoProducto").modal('show');
    });


    let tipoLista = document.getElementById('tipoLista');
    tipoLista.addEventListener('change',()=>{
        getListadoProductos()
    });

    getListadoProductos();



    let btnPGuardar = document.getElementById('btnPGuardar');
    btnPGuardar.addEventListener('click',()=>{

        if(GlobalSelectedCodprod==''){
            //nuevo
            funciones.Confirmacion('¿Está seguro que desea Crear este nuevo producto?')
            .then((value)=>{
                if(value==true){
    
                        let codprod = document.getElementById('txtPCodprod').value || 'SN';
                        let desprod = document.getElementById('txtPDesprod').value || 'SN';
                        let desprod2 = document.getElementById('txtPDesprod2').value || 'SN';
                        let codmarca = document.getElementById('cmbPMarcas').value;
                        let costo = Number(document.getElementById('txtPCosto').value) || 0;
                        let precio = Number(document.getElementById('txtPPrecio').value) || 0;
    
                        if(codprod=='SN'){funciones.AvisoError('Indique un código de producto válido');return;};
                        if(desprod=='SN'){funciones.AvisoError('Indique una descripción válida');return;};
                        if(desprod2=='SN'){document.getElementById('txtPDesprod2').value=desprod;};
                        if(costo==0){funciones.AvisoError('Indique un costo válido');return;};
                        if(precio==0){funciones.AvisoError('Indique un precio válido');return;};
    
    
    
                        api.verify_coprod(codprod)
                        .then(()=>{
    
                                btnPGuardar.disabled = true;
                                btnPGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
            
            
                                insert_producto(codprod,desprod,desprod2,codmarca,costo,precio)
                                .then(()=>{
                                    LimpiarDatos();
                                    $("#modalNuevoProducto").modal('hide');
                                    funciones.Aviso('Producto creado exitosamente!!');
                                
                                    getListadoProductos();
            
                                    btnPGuardar.disabled = false;
                                    btnPGuardar.innerHTML = '<i class="fal fa-save"></i>';
                                    
                                
    
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No pude guardar este producto');
                                    btnPGuardar.disabled = false;
                                    btnPGuardar.innerHTML = '<i class="fal fa-save"></i>';
                                })
                        })
                        .catch(()=>{
                                funciones.AvisoError('Este código de producto ya existe, por favor utilice otro');
                        })
    
                
    
                }
            })

        }else{
            //edi
            funciones.Confirmacion('¿Está seguro que desea EDITAR este producto?')
            .then((value)=>{
                if(value==true){
    
                        let codprod = document.getElementById('txtPCodprod').value || 'SN';
                        let desprod = document.getElementById('txtPDesprod').value || 'SN';
                        let desprod2 = document.getElementById('txtPDesprod2').value || 'SN';
                        let codmarca = document.getElementById('cmbPMarcas').value;
                        let costo = Number(document.getElementById('txtPCosto').value) || 0;
                        let precio = Number(document.getElementById('txtPPrecio').value) || 0;
    
                        //if(codprod=='SN'){funciones.AvisoError('Indique un código de producto válido');return;};
                        if(desprod=='SN'){funciones.AvisoError('Indique una descripción válida');return;};
                        if(desprod2=='SN'){document.getElementById('txtPDesprod2').value=desprod;};
                        if(costo==0){funciones.AvisoError('Indique un costo válido');return;};
                        if(precio==0){funciones.AvisoError('Indique un precio válido');return;};
    
    
    
                        
                                btnPGuardar.disabled = true;
                                btnPGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
            
            
                                edit_producto(codprod,desprod,desprod2,codmarca,costo,precio)
                                .then(()=>{
                                    LimpiarDatos();
                                    $("#modalNuevoProducto").modal('hide');
                                    funciones.Aviso('Producto actualizado exitosamente!!');
                                
                                    getListadoProductos();
            
                                    btnPGuardar.disabled = false;
                                    btnPGuardar.innerHTML = '<i class="fal fa-save"></i>';
                                    
                                
    
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No pude editar este producto');
                                    btnPGuardar.disabled = false;
                                    btnPGuardar.innerHTML = '<i class="fal fa-save"></i>';
                                })
                      
    
                
    
                }
            })

        }
     
    });



    //Meseros
    let btnNuevoMesero = document.getElementById('btnNuevoMesero');
    btnNuevoMesero.addEventListener('click',()=>{
        LimpiarDatosMesero();
        $("#modalNuevoMesero").modal('show');

    });

    let btnMeseroGuardar = document.getElementById('btnMeseroGuardar');
    btnMeseroGuardar.addEventListener('click',()=>{

        if(GlobalSelectedCodempleado==0){
            funciones.Confirmacion('¿Está seguro que desea CREAR este nuevo MESERO?')
            .then((value)=>{
                if(value==true){
    
                    btnMeseroGuardar.disabled = true;
                    btnMeseroGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
    
                    let nombre = document.getElementById('txtMeseroNombre').value || 'SN';
                    let clave = document.getElementById('txtMeseroClave').value || 'SN';
                    let coddoc = document.getElementById('cmbMeseroSerie').value;
    
                    if(nombre=='SN'){funciones.AvisoError('Debe indicar un nombre de mesero');return;};
                    if(clave=='SN'){funciones.AvisoError('Debe indicar una clave de mesero');return;};
                    
    
                    api.verify_clave(clave)
                    .then(()=>{
                        insert_mesero(nombre,clave,coddoc,3)
                        .then(()=>{
                           
                            funciones.Aviso('Mesero creado exitosamente!!');
                                                  
        
                            getTblMeseros();
                            
                            btnMeseroGuardar.disabled = false;
                            btnMeseroGuardar.innerHTML = '<i class="fal fa-save"></i>';
        
                            $("#modalNuevoMesero").modal('hide');
                            LimpiarDatosMesero()
                        })
                        .catch(()=>{
                            funciones.AvisoError('Es posible que esta clave de mesero ya exista, por favor escriba otra');
                            btnMeseroGuardar.disabled = false;
                            btnMeseroGuardar.innerHTML = '<i class="fal fa-save"></i>';
                        })
                    })
                    .catch(()=>{
                        btnMeseroGuardar.disabled = false;
                        btnMeseroGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    })
    
    
                
    
    
                }
            })
        }else{
            funciones.Confirmacion('¿Está seguro que desea CREAR este nuevo MESERO?')
            .then((value)=>{
                if(value==true){
    
                    btnMeseroGuardar.disabled = true;
                    btnMeseroGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
    
                    let nombre = document.getElementById('txtMeseroNombre').value || 'SN';
                    let clave = document.getElementById('txtMeseroClave').value || 'SN';
                    let coddoc = document.getElementById('cmbMeseroSerie').value;
    
                    if(nombre=='SN'){funciones.AvisoError('Debe indicar un nombre de mesero');return;};
                    if(clave=='SN'){funciones.AvisoError('Debe indicar una clave de mesero');return;};
                    
    
                    edit_mesero(GlobalSelectedCodempleado,nombre,clave,coddoc)
                    .then(()=>{
                       
                        funciones.Aviso('Mesero actualizado exitosamente!!');
                                              
    
                        getTblMeseros();
                        
                        btnMeseroGuardar.disabled = false;
                        btnMeseroGuardar.innerHTML = '<i class="fal fa-save"></i>';
    
                        $("#modalNuevoMesero").modal('hide');
                        LimpiarDatosMesero()
                    })
                    .catch(()=>{
                        funciones.AvisoError('No fue posible actualizar el mesero');
                        btnMeseroGuardar.disabled = false;
                        btnMeseroGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    })
    
    
                
    
    
                }
            })
        }
       

    


    });


    getTblMeseros();

    //Mesas
    let btnNuevaMesa = document.getElementById('btnNuevaMesa');
    btnNuevaMesa.addEventListener('click',()=>{
        
        GlobalSelectedIdMesa=0;
        LimpiarDatosMesa();
        $("#modalNuevaMesa").modal('show');

    });
    
    let btnMesaGuardar = document.getElementById('btnMesaGuardar');
    btnMesaGuardar.addEventListener('click',()=>{

        if(GlobalSelectedIdMesa==0){

            funciones.Confirmacion('¿Está seguro que desea CREAR esta nueva MESA?')
            .then((value)=>{
                if(value==true){
    
                    btnMesaGuardar.disabled = true;
                    btnMesaGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
    
                    let codigo = document.getElementById('txtMesaCodigo').value || 'SN';
                    let nombre = document.getElementById('txtMesaNombre').value || 'SN';
                    let sector = document.getElementById('cmbMesaSector').value;
                  
                    if(codigo=='SN'){funciones.AvisoError('Debe indicar un código de mesa');return;};
                    if(nombre=='SN'){funciones.AvisoError('Debe indicar un nombre de mesa');return;};
                    
                    insert_mesa(codigo,nombre,sector)
                    .then(()=>{
    
                        funciones.Aviso('Mesa creada exitosamente!!')
    
                        getTblMesas();
    
                        btnMesaGuardar.disabled = false;
                        btnMesaGuardar.innerHTML = '<i class="fal fa-save"></i>';
    
                        $("#modalNuevaMesa").modal('hide');
                        LimpiarDatosMesa()
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo guardar la mesa');
                        btnMesaGuardar.disabled = false;
                        btnMesaGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    })
    
    
                }
            })
        }else{

            funciones.Confirmacion('¿Está seguro que desea EDITAR esta MESA?')
            .then((value)=>{
                if(value==true){
    
                    btnMesaGuardar.disabled = true;
                    btnMesaGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';
    
                    let codigo = document.getElementById('txtMesaCodigo').value || 'SN';
                    let nombre = document.getElementById('txtMesaNombre').value || 'SN';
                    let sector = document.getElementById('cmbMesaSector').value;
                  
                    if(codigo=='SN'){funciones.AvisoError('Debe indicar un código de mesa');return;};
                    if(nombre=='SN'){funciones.AvisoError('Debe indicar un nombre de mesa');return;};
                    
                    edit_mesa(GlobalSelectedIdMesa,codigo,nombre,sector)
                    .then(()=>{
    
                        funciones.Aviso('Mesa actualizada exitosamente!!')
    
                        getTblMesas();
    
                        btnMesaGuardar.disabled = false;
                        btnMesaGuardar.innerHTML = '<i class="fal fa-save"></i>';
    
                        $("#modalNuevaMesa").modal('hide');
                        LimpiarDatosMesa()
                    })
                    .catch(()=>{
                        funciones.AvisoError('No se pudo actualizar la mesa');
                        btnMesaGuardar.disabled = false;
                        btnMesaGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    })
    
    
                }
            })
        }

  

    });

    getTblMesas();


    //MARCAS
    getTblMarcas();




    //ADMINISTRADORES 
    let btnNuevoAdmin = document.getElementById('btnNuevoAdmin');
    btnNuevoAdmin.addEventListener('click',()=>{
        LimpiarDatosAdmin();
        $("#modalNuevoAdmin").modal('show');

    });

    let btnAGuardar = document.getElementById('btnAGuardar');
    btnAGuardar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea CREAR este nuevo ADMINISTRADOR?')
        .then((value)=>{
            if(value==true){

                btnAGuardar.disabled = true;
                btnAGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                let nombre = document.getElementById('txtANombre').value || 'SN';
                let clave = document.getElementById('txtAClave').value || 'SN';
                let coddoc = document.getElementById('cmbASerie').value;

                if(nombre=='SN'){funciones.AvisoError('Debe indicar un nombre de administrador');return;};
                if(clave=='SN'){funciones.AvisoError('Debe indicar una clave de administrador');return;};


                api.verify_clave(clave)
                .then(()=>{


                    insert_mesero(nombre,clave,coddoc,1)
                    .then(()=>{
                        funciones.Aviso('Administrador creado exitosamente!!');
                                          
                        getTblAdmin();
                        
                        btnAGuardar.disabled = false;
                        btnAGuardar.innerHTML = '<i class="fal fa-save"></i>';
    
                        $("#modalNuevoAdmin").modal('hide');
                        LimpiarDatosAdmin()
                    })
                    .catch(()=>{
                        funciones.AvisoError('Es posible que esta clave ya exista, por favor escriba otra');
                        btnAGuardar.disabled = false;
                        btnAGuardar.innerHTML = '<i class="fal fa-save"></i>';
                    })


                })
                .catch(()=>{

                    funciones.AvisoError('Esta clave de usuario ya existe, por favor, indique una diferente');
                    btnAGuardar.disabled = false;
                    btnAGuardar.innerHTML = '<i class="fal fa-save"></i>';

                })




            }
        })

    


    });


    getTblAdmin();



    funciones.slideAnimationTabs();

};

function initView(){

        getView();
        addEventListeners();

};


function LimpiarDatos(){


    GlobalSelectedCodprod = '';

    document.getElementById('txtPCodprod').disabled = false;
    document.getElementById('txtPCodprod').value ='';
    document.getElementById('txtPDesprod').value ='';
    document.getElementById('txtPDesprod2').value ='';
    document.getElementById('txtPCosto').value  ='0';
    document.getElementById('txtPPrecio').value  ='0';

};

function getListadoProductos(){


        let tipo = document.getElementById('tipoLista').value;

            let container = document.getElementById('containerProductos');
            container.innerHTML = GlobalLoader;
      
            let str = '';
            let id = 0;

            axios.post('/productos/listadoproductos', {
                sucursal:GlobalSucursal,
                tipo:tipo
            })
            .then((response) => {
                const data = response.data.recordset;
                data.map((r)=>{
                    id =+ 1;
                    let idbtn = r.CODPROD.toString() + id.toString();
                    str += `
                        <div class="card card-rounded shadow">
                            <div class="card-body p-2">
                                <b>${r.DESPROD}</b>
                                <br>
                                <small class="negrita text-danger">Código: ${r.CODPROD}</small>
                                <br>
                                <small class="negrita text-info">${r.DESPROD2}</small>
                                <br>
                                <small class="negrita">Tipo: ${r.DESMARCA}</small>

                                <div class="row">
                                    <div class="col-6">Costo:
                                        <h3><b class="text-danger">${funciones.setMoneda(r.COSTO,'Q')}</b></h3>
                                    </div>
                                    <div class="col-6">Precio:
                                    <h3><b class="text-info">${funciones.setMoneda(r.PRECIO,'Q')}</b></h3>
                                    </div>
                                </div>
                                
                                <hr class="solid">

                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-md btn-danger shadow hand" id="${idbtn.toString()}" onclick="deleteProducto('${r.CODPROD}','${r.DESPROD}','${idbtn.toString()}')">
                                            <i class="fal fa-trash"></i>Eliminar
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-md btn-info shadow hand"
                                         onclick="editProducto('${r.CODPROD}','${r.DESPROD}','${r.DESPROD2}','${r.CODMARCA}','${r.COSTO}','${r.PRECIO}')">
                                            <i class="fal fa-edit"></i>Editar
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr class="solid">
                    `
                })
            
                container.innerHTML = str;
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                container.innerHTML = 'No se pudo cargar...';
            });

     
/*


 str += `
                        <tr class="col-12 border-info border-left-0 border-right-0 border-top-0">
                            <td>${r.DESPROD} (C:${r.CODPROD})
                                
                                <br>

                                <small class="negrita text-info">${r.DESPROD2}</small>
                                
                                <br>

                                <small class="negrita">${r.DESMARCA}</small>
                                
                                <div class="row">
                                    <div class="col-6">Costo:
                                        <b class="text-danger">${funciones.setMoneda(r.COSTO,'Q')}</b>
                                    </div>
                                    <div class="col-6">Precio:
                                        <b class="text-info">${funciones.setMoneda(r.PRECIO,'Q')}</b>
                                    </div>
                                </div>
                                
                                <hr class="solid">

                                <div class="row">
                                    <div class="col-6">
                                        <button class="btn btn-md btn-danger shadow hand" id="${idbtn.toString()}" onclick="deleteProducto('${r.CODPROD}','${r.DESPROD}','${idbtn.toString()}')">
                                            <i class="fal fa-trash"></i>Eliminar
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-md btn-info shadow hand" onclick="">
                                            <i class="fal fa-edit"></i>Editar
                                        </button>
                                    </div>
                                </div>

                            </td>
                            
                        </tr>
                    `

 */

};

function insert_producto(codprod,desprod,desprod2,codmarca,costo,precio){

    return new Promise((resolve,reject)=>{
        axios.post('/productos/insert_producto', {
            sucursal:GlobalSucursal,
            codprod:codprod,
            desprod:desprod,
            desprod2:desprod2,
            codmarca:codmarca,
            costoun:costo,
            precio:precio,
            fecha:funciones.getFecha()
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

function editProducto(codprod, desprod, desprod2, codmarca,costo,precio){

    console.log('A1');

    GlobalSelectedCodprod = codprod;

    document.getElementById('txtPCodprod').disabled = true;
    document.getElementById('txtPCodprod').value = codprod;
    document.getElementById('txtPDesprod').value = desprod;
    document.getElementById('txtPDesprod2').value = desprod2;
    document.getElementById('cmbPMarcas').value = codmarca;
    document.getElementById('txtPCosto').value  = costo;
    document.getElementById('txtPPrecio').value  = precio;

    console.log('A2');

    $("#modalNuevoProducto").modal('show');

    console.log('A3');

};

function edit_producto(codprod,desprod,desprod2,codmarca,costo,precio){

    return new Promise((resolve,reject)=>{
        axios.post('/productos/edit_producto', {
            sucursal:GlobalSucursal,
            codprod:codprod,
            desprod:desprod,
            desprod2:desprod2,
            codmarca:codmarca,
            costoun:costo,
            precio:precio,
            fecha:funciones.getFecha()
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

function deleteProducto(codprod,desprod, idbtn){

    let btn = document.getElementById(idbtn);

    funciones.showToast('Verificando movimientos del producto')

    btn.disabled = true;
    btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';

    api.verify_movimientos(codprod)
    .then(()=>{

        btn.disabled = false;
        btn.innerHTML = '<i class="fal fa-trash"></i>Eliminar';

        funciones.Confirmacion('¿Está seguro que desea ELIMINAR ESTE PRODUCTO ' + desprod + '?')
        .then((value)=>{
            if(value==true){
    
    
    
                funciones.solicitarClave()
                .then((name)=>{
                    if(name==GlobalConfigClave){
                                btn.disabled = true;
                                btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
                    
                                delete_producto(codprod)
                                .then(()=>{
                                    funciones.Aviso('Producto eliminado exitosamente!!');
                                    getListadoProductos();
                    
                                    btn.disabled = false;
                                    btn.innerHTML = '<i class="fal fa-trash"></i>Eliminar';
                    
                                })
                                .catch(()=>{
                                    funciones.AvisoError('No se pudo eliminar');
                    
                                    btn.disabled = false;
                                    btn.innerHTML = '<i class="fal fa-trash"></i>Eliminar';
                                })
    
                    }
                })
    
           
    
            }
        })
    })
    .catch(()=>{
        //btn.disabled = false;
        //btn.innerHTML = '<i class="fal fa-trash"></i>Eliminar';

        funciones.showToast('No puede eliminar un producto que tiene movimientos, en su lugar, lo voy a deshabilitar');
       
        deshab_producto(codprod,'NO')
        .then(()=>{
            funciones.showToast('Producto deshabilitados exitosamente!!');
            getTblListado();
        })
        .catch(()=>{
            btn.disabled = false;
            btn.innerHTML = '<i class="fal fa-trash"></i>Eliminar';
            
            funciones.AvisoError('No se pudo deshabilitar, inténtelo más tarde')
        })
    })


   

};


function delete_producto(codprod){

    return new Promise((resolve,reject)=>{
        axios.post('/productos/delete_producto', {
            sucursal:GlobalSucursal,
            codprod:codprod
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

function deshab_producto(codprod,tipo){
  
    
    return new Promise((resolve,reject)=>{
        axios.post('/productos/deshab_producto', {
            sucursal:GlobalSucursal,
            codprod:codprod,
            tipo:tipo
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
}



function getDataMarcas(){


    return new Promise((resolve,reject)=>{
        axios.post('/productos/getmarcas', {
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

    });


};



function getDataMeseros(tipo){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/vendedores', {
           sucursal:GlobalSucursal,
           tipo:tipo
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

    });

};

function getTblMeseros(){

    let container = document.getElementById('containerMeseros')
    container.innerHTML = GlobalLoader;

    getDataMeseros(3)
    .then((data)=>{

      let str = '';
        data.map((r)=>{
            let idbtnE = 'btnEliminar' + r.CODIGO.toString();
            str +=  `
                <tr>
                    <td>${r.NOMBRE}
                        <br>
                        <small class="negrita text-danger">${r.CLAVE}</small>
                    </td>
                    <td>${r.CODDOC}</td>
                    <td>
                        <button class="btn btn-md btn-circle btn-info hand shadow" id="" onclick="editarMesero('${r.CODIGO}','${r.NOMBRE}','${r.CODDOC}','${r.CLAVE}')">
                            <i class="fal fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-md btn-circle btn-danger hand shadow" id="${idbtnE}" onclick="deleteMesero('${r.CODIGO}','${idbtnE}')">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })

        let tbl =`
            <table class="table table-responsive">
                <thead class="bg-danger text-white">
                    <tr>
                        <td>NOMBRE/CLAVE</td>
                        <td>SERIE</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>${str}</tbody>
            </table>
        `

        container.innerHTML = tbl;

    })
    .catch(()=>{

        funciones.AvisoError('No se pudo cargar la lista de Meseros')
        container.innerHTML = 'No se cargaron datos...'
    })

};

function insert_mesero(nombre,clave,coddoc,tipo){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/insert_mesero', {
            sucursal:GlobalSucursal,
            nombre:nombre,
            clave:clave,
            coddoc:coddoc,
            tipo:tipo
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

function edit_mesero(codigo,nombre,clave,coddoc){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/edit_mesero', {
            sucursal:GlobalSucursal,
            nombre:nombre,
            clave:clave,
            coddoc:coddoc,
            codigo:codigo
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

function deleteMesero(codigo,idbtn){

    let btn = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este EMPLEADO?')
    .then((value)=>{
        if(value==true){

                btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
                btn.disabled = true;


                delete_mesero(codigo)
                .then(()=>{

                    btn.innerHTML = '<i class="fal fa-trash"></i>';
                    btn.disabled = false;

                    funciones.Aviso('Mesero eliminado exitosamente!!');

                    getTblMeseros();
                

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo eliminar este mesero');
                })
            
        }
    });


};

function delete_mesero(codigo){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/delete_mesero', {
            sucursal:GlobalSucursal,
            codigo:codigo
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

function LimpiarDatosMesero(){
    GlobalSelectedCodempleado=0;
    document.getElementById('txtMeseroNombre').value='';
    document.getElementById('txtMeseroClave').value='';
};

function editarMesero(codigo,nombre,coddoc,clave){

    funciones.Confirmacion('¿Está seguro que desea EDITAR este Mesero?')
    .then((value)=>{
        if(value==true){

            GlobalSelectedCodempleado = Number(codigo);
            document.getElementById('txtMeseroNombre').value = nombre;
            document.getElementById('txtMeseroClave').value = clave;
            document.getElementById('cmbMeseroSerie').value = coddoc;
            $("#modalNuevoMesero").modal('show');
            
        }
    })

  
};




//Mesas
function insert_mesa(codigo,nombre,sector){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/insert_mesa', {
            sucursal:GlobalSucursal,
            codmesa:codigo,
            desmesa:nombre,
            sector:sector
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

function getDataMesas(){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/select_mesas', {
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

    });

};

function getTblMesas(){

    let container = document.getElementById('containerMesas');
    container.innerHTML = GlobalLoader;

    let str = '';


    getDataMesas()
    .then((data)=>{
        
        console.log('carga de mesas...')

        data.map((r)=>{
            let btnE = 'btnEliminarMesa' + r.CODIGO.toString();
            str +=  `<tr>
                        <td>${r.DESMESA}
                            <br>
                            <small class="negrita">Cod:${r.CODMESA}</small>
                        </td>
                        <td>${r.SECTOR}</td>
                        <td>
                            <button class="btn btn-info btn-md btn-circle hand shadow" onclick="editarMesa('${r.CODIGO}','${r.CODMESA}','${r.DESMESA}','${r.SECTOR}')">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-md btn-circle hand shadow" id="${btnE}" onclick="deleteMesa('${r.CODIGO}','${btnE}')">
                                <i class="fal fa-trash"></i>
                            </button>
                        </td>
                    </tr>`
        })
        let tbl = ` <table class="table table-responsive">
                        <thead class="bg-info text-white">
                            <tr>
                                <td>DESCRIPCION</td>
                                <td>SECTOR</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>${str}</tbody>
                    </table>
                `

        container.innerHTML = tbl;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...';
    })


};

function LimpiarDatosMesa(){
    GlobalSelectedIdMesa=0;
   document.getElementById('txtMesaCodigo').value = '';
   document.getElementById('txtMesaNombre').value = '';

};

function deleteMesa(codigo,idbtn){

    let btn = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta MESA?')
    .then((value)=>{
        if(value==true){

                btn.innerHTML = '<i class="fal fa-trash fa-spin"></i>';
                btn.disabled = true;


                delete_mesa(codigo)
                .then(()=>{

                    btn.innerHTML = '<i class="fal fa-trash"></i>';
                    btn.disabled = false;

                    funciones.Aviso('Mesa eliminada exitosamente!!');

                    getTblMesas();
                

                })
                .catch(()=>{
                    funciones.AvisoError('No se pudo eliminar esta mesa');
                })
            
        }
    });


};

function delete_mesa(codigo){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/delete_mesa', {
            sucursal:GlobalSucursal,
            codigo:codigo
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



function editarMesa(idmesa,codigo,nombre,sector){


    funciones.Confirmacion('¿Está seguro que desea EDITAR esta mesa?')
    .then((value)=>{
        if(value==true){

            GlobalSelectedIdMesa = Number(idmesa);

            document.getElementById('txtMesaCodigo').value = codigo;
            document.getElementById('txtMesaNombre').value = nombre;
            document.getElementById('cmbMesaSector').value = sector;
           
            $("#modalNuevaMesa").modal('show');

        }
    })

   
    
};

function edit_mesa(idmesa, codigo, nombre, sector){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/edit_mesa', {
            sucursal:GlobalSucursal,
            id:idmesa,
            codmesa:codigo,
            desmesa:nombre,
            sector:sector
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


//Marcas

function getTblMarcas(){

    getDataMarcas()
    .then((data)=>{
        let str = '';
        data.map((r)=>{
            str +=  `<option value="${r.CODMARCA}">${r.DESMARCA}</option>`
        });

        document.getElementById('cmbPMarcas').innerHTML = str;

    })
    .catch(()=>{
        funciones.AvisoError('No se cargaron las marcas');
    })

};




function LimpiarDatosAdmin(){

    document.getElementById('txtANombre').value='';
    document.getElementById('txtAClave').value='';

};

function getTblAdmin(){

    let container = document.getElementById('containerAdmin')
    container.innerHTML = GlobalLoader;

    getDataMeseros(1)
    .then((data)=>{

      let str = '';
        data.map((r)=>{
            let idbtnE = 'btnEliminarA' + r.CODIGO.toString();
            str +=  `
                <tr>
                    <td>${r.NOMBRE}
                        <br>
                        <small class="negrita text-danger">${r.CLAVE}</small>
                    </td>
                    <td>${r.CODDOC}</td>
                    <td>
                        <button class="btn btn-md btn-circle btn-info hand shadow hidden" id="" onclick="">
                            <i class="fal fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-md btn-circle btn-danger hand shadow" id="${idbtnE}" onclick="deleteMesero('${r.CODIGO}','${idbtnE}')">
                            <i class="fal fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })

        let tbl =`
            <table class="table table-responsive">
                <thead class="bg-secondary text-white">
                    <tr>
                        <td>ADMIN/CLAVE</td>
                        <td>SERIE</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>${str}</tbody>
            </table>
        `

        container.innerHTML = tbl;

    })
    .catch(()=>{

        funciones.AvisoError('No se pudo cargar la lista de Meseros')
        container.innerHTML = 'No se cargaron datos...'
    })

};