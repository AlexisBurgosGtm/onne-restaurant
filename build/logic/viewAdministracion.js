function getView(){

    let view = {
        menu:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">

                    <ul class="nav nav-tabs" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-productos" data-toggle="tab" href="#productos" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-meseros" data-toggle="tab" href="#meseros" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>Meseros</a> 
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-mesas" data-toggle="tab" href="#mesas" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>Mesas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-marcas" data-toggle="tab" href="#marcas" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>Marcas</a>
                        </li> 
                                
                    </ul>
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="productos" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.productos()}
                        </div>
                        <div class="tab-pane fade" id="meseros" role="tabpanel" aria-labelledby="home-tab">
                            ${view.meseros()}
                        </div>
                        <div class="tab-pane fade" id="mesas" role="tabpanel" aria-labelledby="home-tab">  
                            
                        </div>
                        <div class="tab-pane fade" id="marcas" role="tabpanel" aria-labelledby="tab-reportes">
                            
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
            `
        },
        meseros: ()=>{
            return `
            
            `
        }
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

            }
        })
    });


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




    //Meseros







    //Mesas



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
                        <tr class="col-12 border-info border-left-0 border-right-0 border-top-0">
                            <td>${r.DESPROD}
                                
                                <br>
                                
                                <small class="negrita">Código:${r.CODPROD}</small>
                                
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
                })
                let tbl = ` <table class="table table-responsive table-bordered table-striped">
                                <thead class="bg-info text-white text-center">
                                    <tr>
                                        <td>Producto</td>
                                    </tr>
                                </thead>
                                <tbody>${str}</tbody>
                            </table>`;
                container.innerHTML = tbl;
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                container.innerHTML = 'No se pudo cargar...';
            });

     


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

function deleteProducto(codprod,desprod, idbtn){

    let btn = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR ESTE PRODUCTO ' + desprod + '?')
    .then((value)=>{
        if(value==true){

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

