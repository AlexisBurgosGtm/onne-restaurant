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
                        <div class="row">
                            
                            <button class="btn btn-success btn-lg" id="btnProductoVentas">Ventas</button>
                            <button class="btn btn-info btn-lg" id="btnProductoCompras">Compras</button>
                            
                        </div>
                        <div class="row">
                            <button class="btn btn-secondary" data-dismiss="modal">Salir</button>
                            <button class="btn btn-success" id="btnEditDetalles">Detalles</button>
                            <button class="btn btn-info" id="btnEditPrecios">Precios</button>
                            <button class="btn btn-danger" id="btnEditStatus">Act/Des</button>
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

function addListeners(){
    let txtFiltro = document.getElementById('txtFiltro');

    let btnBuscarProducto = document.getElementById('btnBuscarProducto');
    btnBuscarProducto.addEventListener('click',async()=>{
        await api.gerenciaProductos(txtFiltro.value,'tblProductos');
    });

    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',()=>{
        
    });

    let btnEditDetalles = document.getElementById('btnEditDetalles');
    btnEditDetalles.addEventListener('click',()=>{
        $('#modalMenu').modal('show');
    });

    let btnEditPrecios = document.getElementById('btnEditPrecios');
    btnEditPrecios.addEventListener('click',()=>{
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

function editDetalles(codprod){};

function editPrecios(codprod){};

function editStatusProducto(codprod){};


function inicializarVistaGerenteProductos(){
    getView();
    addListeners();


};