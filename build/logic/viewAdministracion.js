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
                </div>
            </div>

            <div class="row">

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
    }

    root.innerHTML = view.menu();

};

function addEventListeners(){

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


    getListadoProductos();



    let btnPGuardar = document.getElementById('btnPGuardar');
    btnPGuardar.addEventListener('click',()=>{

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
    });



    //Meseros
    let btnNuevoMesero = document.getElementById('btnNuevoMesero');
    btnNuevoMesero.addEventListener('click',()=>{
        LimpiarDatosMesero();
        $("#modalNuevoMesero").modal('show');

    });

    let btnMeseroGuardar = document.getElementById('btnMeseroGuardar');
    btnMeseroGuardar.addEventListener('click',()=>{

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
                
                insert_mesero(nombre,clave,coddoc)
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


            }
        })

    


    });


    getTblMeseros();

    //Mesas
    let btnNuevaMesa = document.getElementById('btnNuevaMesa');
    btnNuevaMesa.addEventListener('click',()=>{

        LimpiarDatosMesa();
        $("#modalNuevaMesa").modal('show');

    });
    
    let btnMesaGuardar = document.getElementById('btnMesaGuardar');
    btnMesaGuardar.addEventListener('click',()=>{


        funciones.Confirmacion('¿Está seguro que desea CREAR esta nueva MESA?')
        .then((value)=>{
            if(value==true){

                btnMesaGuardar.disabled = true;
                btnMesaGuardar.innerHTML = '<i class="fal fa-save fa-spin"></i>';

                let codigo = document.getElementById('txtMesaCodigo').value || 'SN';
                let nombre = document.getElementById('txtMesaNombre').value || 'SN';
              
                if(codigo=='SN'){funciones.AvisoError('Debe indicar un código de mesa');return;};
                if(nombre=='SN'){funciones.AvisoError('Debe indicar un nombre de mesa');return;};
                
                insert_mesa(codigo,nombre)
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

    });

    getTblMesas();


    //MARCAS
    getTblMarcas();


    funciones.slideAnimationTabs();

};

function initView(){

        getView();
        addEventListeners();

};


function LimpiarDatos(){

    document.getElementById('txtPCodprod').value ='';
    document.getElementById('txtPDesprod').value ='';
    document.getElementById('txtPDesprod2').value ='';
    document.getElementById('txtPCosto').value  ='0';
    document.getElementById('txtPPrecio').value  ='0';

};

function getListadoProductos(){

            let container = document.getElementById('containerProductos');
            container.innerHTML = GlobalLoader;
      
            let str = '';
            let id = 0;

            axios.post('/productos/listadoproductos', {
                sucursal:GlobalSucursal
            })
            .then((response) => {
                const data = response.data.recordset;
                data.map((r)=>{
                    id =+ 1;
                    let idbtn = r.CODPROD.toString() + id.toString();
                    str += `
                        <div class="card card-rounded shadow hand">
                            <div class="card-body p-2">
                                <b>${r.DESPROD}</b>
                                <br>
                                <small class="negrita text-info">Código: ${r.CODPROD}</small>
                                <br>
                                <small class="negrita text-info">${r.DESPROD2}</small>
                                <br>
                                <small class="negrita">Tipo: ${r.DESMARCA}</small>

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
                                        <button class="btn btn-md btn-info shadow hand" onclick="editProducto()">
                                            <i class="fal fa-edit"></i>Editar
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
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

function editProducto(){


};

function deleteProducto(codprod,desprod, idbtn){

    let btn = document.getElementById(idbtn);



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



function getDataMeseros(){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/vendedores', {
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

function getTblMeseros(){

    let container = document.getElementById('containerMeseros')
    container.innerHTML = GlobalLoader;

    getDataMeseros()
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
                        <button class="btn btn-md btn-circle btn-info hand shadow" id="" onclick="">
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

function insert_mesero(nombre,clave,coddoc){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/insert_mesero', {
            sucursal:GlobalSucursal,
            nombre:nombre,
            clave:clave,
            coddoc:coddoc
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
    document.getElementById('txtMeseroNombre').value='';
    document.getElementById('txtMeseroClave').value='';
}




//Mesas
function insert_mesa(codigo,nombre){

    return new Promise((resolve,reject)=>{
        axios.post('/empleados/insert_mesa', {
            sucursal:GlobalSucursal,
            codmesa:codigo,
            desmesa:nombre
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
                        <td>
                            <button class="btn btn-info btn-md btn-circle hand shadow">
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

function LimpiarDatosMesero(){
    document.getElementById('txtMeseroNombre').value='';
    document.getElementById('txtMeseroClave').value='';
}


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

}