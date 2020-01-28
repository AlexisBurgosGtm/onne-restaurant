function getView(){
    let view = {
        encabezado: ()=>{
            return `
            <div class="col-12 bg-trans-gradient text-white">
                <h5>Pedidos tomados por fecha</h5>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <input type="date" class="form-control" id="txtFechaPedido">
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <button class="btn btn-success" id="btnCargarPedidos">
                        Cargar
                    </button>                
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <h1 class="text-danger" id="lbTotalPedidos">Q 0.00</h1>
                </div>
            </div>
            `
        },
        listado: ()=>{
            return `
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-responsive table-hover table-striped">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Documento</td>
                                <td>Cliente</td>
                                <td>Importe</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblListaPedidos">
                        </tbody>
                    </table>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado()
};

function addListeners(){
    let btnCargarPedidos = document.getElementById('btnCargarPedidos');
    
    let txtFechaPedido = document.getElementById('txtFechaPedido');
    let lbTotalPedidos = document.getElementById('lbTotalPedidos');

    txtFechaPedido.value = funciones.getFecha();

    btnCargarPedidos.addEventListener('click',async ()=>{
        await api.pedidosVendedor(GlobalCodSucursal,GlobalCodUsuario,funciones.devuelveFecha('txtFechaPedido'),'tblListaPedidos','lbTotalPedidos');
    });
    btnCargarPedidos.click();

};

function inicializarVistaPedidos(){
    getView();
    addListeners();

};