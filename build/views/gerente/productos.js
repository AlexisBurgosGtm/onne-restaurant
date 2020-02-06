function getView(){
    let view ={
        listaProductos : ()=>{
            return `
            <div class="row">
                <div id="panel-1" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Busque un producto por nombre</h2>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-8">
                                    <input type="text" class="form-control" id="txtFiltro" placerholder="Escriba para buscar...">
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-success" id="btnBuscarProducto">Buscar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="table-responsive">
                                    <table class="table table-responsive table-striped table-hover table-bordered">
                                        <thead class="bg-trans-gradient text-white">
                                            <tr>
                                                <td>Producto</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody id="tblProductos"></tbody>
                                    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        btnNuevo :()=>{
            return `
            <div class="shortcut-menu align-left">
                <button class="btn btn-danger btn-circle btn-xl" id="btnNuevoProducto">
                    <i class="fal fa-plus"></i>
                </button>
            </div>
            `
        },
        modalOpciones: ()=>{
            return `
            <div id="modalOpciones" class="modal fade default-example-modal-bottom" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-bottom">
                <div class="modal-content">
                    <div class="modal-header bg-trans-gradient text-white">
                        <h5 id="lbDesprod" class="text-center">Nombre del Producto</h5>
                    </div>                    
                    <div class="modal-body">
                        <div class="row" id="rootProductoResumen">
                            <div class="col-6">
                                <label>Total Ventas Mes </label>
                                <h3 class="text-danger">Q0.00 - 10 cajas</h3>
                            </div>
                            <div class="col-6">
                                <label>Total Compras </label>
                                <h3 class="text-info">Q0.00</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <button class="btn btn-secondary" data-dismiss="modal">
                                    <i class="fal fa-times"></i>
                                    Salir
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-success" id="btnEditDetalles">
                                    <i class="fal fa-globe"></i>    
                                    Detalles
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-info" id="btnEditPrecios">
                                    <i class="fal fa-tag"></i>
                                    Precios
                                </button>
                            </div>
                            <div class="col-3">
                                <button class="btn btn-danger" id="btnEditStatus">
                                    <i class="fal fa-bell"></i>
                                    Act/Des
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="modal-footer bg-trans-gradient">
                        
                    </div>
                </div>
            </div>
        </div>
            `
        }
    };

    root.innerHTML = view.listaProductos() + view.btnNuevo() + view.modalOpciones();
    
};

function getViewEdicion(menu){
    
    let view ={
        edicionDetalle : ()=>{
            return `
                <div class="card col-12">
                    <div class="card-body">
                        <div class="form-group">
                            <label>Descripción</label>
                            <textarea rows="2" class="form-control" id="txtEditDescripcion"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Unidades por caja</label>
                            <input type="number" class="form-control col-4" id="txtEditUxc">
                        </div>
                        <div class="form-group">
                            <label>Marca</label>
                            <select class="form-control" id="cmbEditMarcas"></select>
                        </div>
                        <div class="form-group">
                            <label>Clasificación Uno</label>
                            <select class="form-control" id="cmbEditClaseuno"></select>
                        </div>
                        <div class="form-group">
                            <label>Clasificación Dos</label>
                            <select class="form-control" id="cmbEditClasedos"></select>
                        </div>
                        <div class="form-group">
                            <label>Clasificación Tres</label>
                            <select class="form-control" id="cmbEditClasetres"></select>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-secondary btn-lg" data-dismiss="modal">
                                    Cancelar
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-success btn-lg" id="btnEditGuardarDetalle">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
        },
        edicionPrecios : ()=>{
            return `
            <div class="card col-12">
                    <div class="card-header">
                        <label id="txtDesprodPrecios">Producto seleccionado</label>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-responsive table-hover table-striped table-bordered">
                                <thead class="bg-trans-gradient text-white">
                                    <tr>
                                        <td>Medida</td>
                                        <td>Equivale</td>
                                        <td>Costo</td>
                                        <td>Público</td>
                                        <td>MayoreoC</td>
                                        <td>MayoreoB</td>
                                        <td>MayoreoA</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblListaPrecios">
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-secondary btn-lg" data-dismiss="modal">
                                    Cancelar
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-success btn-lg" id="btnEditPreciosGuardar">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                
            </div>
            `
        }
    };

       
    switch (menu) {
        case 'DETALLE':
            return view.edicionDetalle();
            break;
        case 'PRECIOS':
            return view.edicionPrecios();
            break;
        default:
            break;
    };

};

function addListeners(){
    let txtFiltro = document.getElementById('txtFiltro');

    let btnBuscarProducto = document.getElementById('btnBuscarProducto');
    btnBuscarProducto.addEventListener('click',async()=>{
        await api.gerenciaProductos(txtFiltro.value,'tblProductos');
    });

    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',()=>{
        funciones.hablar('aqui podré crear un producto nuevo')
    });

    let btnEditDetalles = document.getElementById('btnEditDetalles');
    btnEditDetalles.addEventListener('click',()=>{
        lbMenuTitulo.innerText = 'Edición del Producto';
        rootMenuLateral.innerHTML = getViewEdicion('DETALLE');
        editDetalles(GlobalSelectedCodprod);

        $('#modalMenu').modal('show');
    });

    let btnEditPrecios = document.getElementById('btnEditPrecios');
    btnEditPrecios.addEventListener('click',()=>{
        lbMenuTitulo.innerText = 'Edición de Precios';
        rootMenuLateral.innerHTML = getViewEdicion('PRECIOS');
        editPrecios(GlobalSelectedCodprod);
        $('#modalMenu').modal('show');
    });

    let btnEditStatus = document.getElementById('btnEditStatus');
    btnEditStatus.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Habilitar/Deshabilitar este producto?')
        .then((value)=>{
            if(value==true){
                api.productosSetStatus(GlobalSelectedCodprod,GlobalSelectedStatus)
                .then(()=>{
                    btnBuscarProducto.click();
                   funciones.Aviso('Status cambiado exitosamente') 
                   $('#modalOpciones').modal('hide');
                })
                .catch(()=>{
                    funciones.AvisoError('No se logró cambiar el status')
                })
            }
        })
    });
};

function getOpcionesProducto(codprod,desprod,st){
    let lbDesprod = document.getElementById('lbDesprod')
    lbDesprod.innerText = desprod;
    
    GlobalSelectedCodprod = codprod;
    GlobalSelectedDesprod = desprod;
    GlobalSelectedStatus = st;

    $('#modalOpciones').modal('show')    

};

async function editDetalles(codprod){

    let txtEditDescripcion = document.getElementById('txtEditDescripcion');
    let txtEditUxc = document.getElementById('txtEditUxc');
    let cmbEditMarcas = document.getElementById('cmbEditMarcas');
    let cmbEditClaseuno = document.getElementById('cmbEditClaseuno');
    let cmbEditClasedos = document.getElementById('cmbEditClasedos');
    let cmbEditClasetres = document.getElementById('cmbEditClasetres');

    api.productosComboMarcas('cmbEditMarcas');
    api.productosComboClaseUno('cmbEditClaseuno');
    api.productosComboClaseDos('cmbEditClasedos');
    api.productosComboClaseTres('cmbEditClasetres');
    
    txtEditDescripcion.value = '';
    txtEditUxc.value = 1;

    await api.productosGetDetalle(codprod,'txtEditDescripcion','txtEditUxc','cmbEditMarcas','cmbEditClaseuno','cmbEditClasedos','cmbEditClasetres');

    let btnEditGuardarDetalle = document.getElementById('btnEditGuardarDetalle');
    btnEditGuardarDetalle.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea guardar estos cambios?')
        .then(()=>{

            let data = {
                codprod:codprod,
                desprod:txtEditDescripcion.value,
                uxc:txtEditUxc.value,
                codmarca:cmbEditMarcas.value,
                codclaseuno:cmbEditClaseuno.value,
                codclasedos:cmbEditClasedos.value,
                codclasetres:cmbEditClasetres.value,
                lastupdate:funciones.getFecha()
            };
        
            api.productosEditDetalle(data)
            .then(()=>{
                funciones.Aviso('Producto editado con éxito!!');
                $('#modalOpciones').modal('hide');
                $('#modalMenu').modal('hide');
                document.getElementById('btnBuscarProducto').click();
            })
            .catch((error)=>{
                funciones.AvisoError('Error al Actualizar');
                console.log(error);
            });

        })    
    });

};

function editPrecios(codprod){
    document.getElementById('txtDesprodPrecios').innerText = GlobalSelectedDesprod;
    api.productosGetPrecios(codprod,'tblListaPrecios');

};


function inicializarVistaGerenteProductos(){

    getView();
    addListeners();

};