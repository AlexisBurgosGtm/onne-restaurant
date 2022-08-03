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
            <div class="btn-bottom-left">
                <button class="btn btn-secondary btn-circle hand shadow btn-xl" id="btnAtrasDespacho">
                    <i class="fal fa-arrow-left"></i>
                </button>
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

    let btnAtrasDespacho = document.getElementById('btnAtrasDespacho');
    btnAtrasDespacho.addEventListener('click',()=>{
            classNavegar.inicio();
    });

    let cmbTipoListado = document.getElementById('cmbTipoListado');
    cmbTipoListado.addEventListener('change',async ()=>{
        await CargarGrid();
    });

    await CargarGrid();

};

function CargarGrid(){
    let cmbTipoListado = document.getElementById('cmbTipoListado');
    getPedidosPendientes('txtTotal','tblPedidosPendientes',cmbTipoListado.value);
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
            confirmarDespacho(id)
            .then(()=>{
                //idrow.remove();
                CargarGrid();
                socket.emit('comandas despachado',`Orden para mesa ${GlobalSelectedIdMesa}`)
            })
        }
    })
}




function getPedidosPendientes(idLbTotal,idContainer,status){
       

    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
    let lbtotal = document.getElementById(idLbTotal);
    lbtotal.innerText = '--'

    let strdata = '';
    let st = ''; let classST = '';
    let btnOpciones = ``;

    axios.post('/comandas/pedidospendientes', {  
        sucursal: GlobalSucursal,
        status:status
    })
    .then((response)=>{
        const data = response.data.recordset;
        let totalp = 0; 
        data.map((rows)=>{
            totalp += 1;
            if(status=='SI'){btnOpciones='-';}else{
                btnOpciones=`<button class="btn btn-md btn-info btn-circle"
                onclick="getOpcionPedido(${rows.ID})">
                +
                </button>`
            }
            strdata += `<tr id=${rows.ID}>
                            <td>
                                ${rows.DESPROD}
                                <br>
                                <small><b class="text-info">MESA: ${rows.DESMESA}<b></small>
                                <hr class="solid">
                                <small class="negrita text-danger">${rows.OBS}</small>
                            </td>
                            <td>
                                <h3 class="text-danger">${rows.CANTIDAD}</h3>
                                <small><b class="text-danger"><b>${rows.CODMEDIDA}</b></small>
                                
                            </td>
                            <td>
                                ${btnOpciones}
                            </td>
                        </tr>`
        })

        lbtotal.innerText = `Items ${totalp}`;
        container.innerHTML = strdata;
        
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        lbtotal.innerText = '0'
    });  
}


function confirmarDespacho (id){
    
    return new Promise((resolve,reject)=>{
        axios.post('/comandas/confirmardespacho', {
            id:id,
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

}