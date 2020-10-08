function getView(){
    let view = {
        encabezado : ()=>{
            return `
            <div class="row">
                <div class="col-8">
                    <select class="form-control" id="cmbTipoListado">
                        <option value="NO">ORDENES PENDIENTES</option>
                        <option value="SI">ORDENES FINALIZADAS</option>
                    </select>
                </div>
                <div class="col-4 text-right">
                    <h5 id="txtTotal">Items 0</h5>
                </div>
            </div>
            `
        },
        listado : ()=>{
            return `
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-responsive table-striped table-hover">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Producto Solicitado</td>
                                <td>Cantidad</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody id="tblPedidosPendientes"></tbody>
                    </table>
                </div>
            </div>
            `
        },
        detallePedido :()=>{
            return `
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-responsive table-hover table-bordered table-striped col-12">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Producto</td>
                                <td>Cantidad</td>
                            </tr>
                        </thead>
                    
                    <tbody id="tblPedidoDetalle"></tbody>
                    </table>
                </div>
            </div>
            `
        }
    }


    root.innerHTML = view.encabezado() + view.listado();
    rootMenuLateral.innerHTML = view.detallePedido();

};

async function addListeners(){

    let cmbTipoListado = document.getElementById('cmbTipoListado');
    cmbTipoListado.addEventListener('change',async ()=>{
        await CargarGrid();
    });

    await CargarGrid();

};

function CargarGrid(){
    let cmbTipoListado = document.getElementById('cmbTipoListado');
    api.getPedidosPendientes('txtTotal','tblPedidosPendientes',cmbTipoListado.value);
};

function iniciarVistaDespachos(){
    getView();
    addListeners();

};

function getOpcionPedido(id){
    let idrow = document.getElementById(id);
    funciones.Confirmacion('Confirme si la orden ha sido despachada')
    .then((value)=>{
        if(value==true){
            api.confirmarDespacho(id)
            .then(()=>{
                idrow.remove();
                socket.emit('comandas despachado',`Orden para mesa ${GlobalSelectedIdMesa}`)
            })
        }
    })
}