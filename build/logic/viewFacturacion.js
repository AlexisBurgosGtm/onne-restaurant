function getView(){

    let view = {
        body:()=>{
            return `
                <div class="card card-bordered shadow col-12 oculto-impresion">
                    <div class="card-body p-4">
                        <h5 class="negrita">Impresión de Órdenes</h5>
                        <br>
                        <div class="form-grop">
                            <label>Seleccione una fecha</label>
                            <input type="date" class="form-control col-6" id="txtFecha">
                        </div>
                    </div>
                </div>
                
                <hr class="solid oculto-impresion">

                <div class="card card-bordered shadow col-12 oculto-impresion">
                    <div class="card-body p-4" id="tblListado">

                    </div>
                </div>

                <div class="btn-bottom-left oculto-impresion">
                    <button class="btn btn-xl btn-circle btn-secondary hand shadow" id="btnAtrasFacturacion">
                        <i class="fal fa-home"></i>
                    </button>
                </div>
                
                <div class="row" id="ticket">
                

                
                </div>
            
            `   
        },
        modalDetalleOrden:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll oculto-impresion" tabindex="-1" role="dialog" aria-hidden="true" id="modalDetalle">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">
                        <div class="dropdown-header bg-info d-flex justify-content-center align-items-center w-100">
                            <h4 class="m-0 text-center color-white">
                                Detalle de la orden
                            </h4>
                            
                         
                        </div>
                        <div class="modal-body p-2">
                        
                            <hr class="solid">
                            <table class="table table-responsive col-12">
                                <thead class="bg-trans-gradient text-white">
                                    <tr>
                                        <td>Producto</td>
                                        <td>Cantidad</td>
                                        <td>Importe</td>
                                    </tr>
                                </thead>
                                <tbody id="tblDataDetalle"></tbody>
                                <tfoot class="">
                                    <tr class="border-info border-left-0 border-right-0">
                                        <th></th>
                                        <th>Total:</th>
                                        <th>
                                            <b><h5 class="text-danger negrita" id="lbTotalOrden"></h5></b>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <button class="bt btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                <i class="fal fa-arrow-left"></i>
                            </button>
                        </div>
                     
                    </div>
                </div>
            </div>
            `
        },
    }

    root.innerHTML = view.body() + view.modalDetalleOrden();

    
};

function addListeners(){

    let btnAtrasFacturacion = document.getElementById('btnAtrasFacturacion'); btnAtrasFacturacion.addEventListener('click',()=>{classNavegar.inicio()});
    
    document.getElementById('txtFecha').value = funciones.getFecha();

    document.getElementById('txtFecha').addEventListener('change',()=>{
        getTblListado(funciones.devuelveFecha('txtFecha'));

    })



    getTblListado(funciones.getFecha());

};


function initView(){

    getView();
    addListeners();

};


function getTblListado(fecha){
    let container = document.getElementById('tblListado');
    container.innerHTML = GlobalLoader;

    let str = '';


    axios.post('/admin/select_ordenes', {  
        sucursal: GlobalSucursal,
        fecha:fecha
    })
    .then((response)=>{
        const data = response.data.recordset;
        data.map((rows)=>{
            let factura = '';
            if(rows.OBSMARCA=='SI'){factura='CON FACTURA'}else{'- - -'};
            str += `<tr>
                            <td>${rows.CODDOC} - ${rows.CORRELATIVO} // Hora:${rows.HORA}:${rows.MINUTO} // Mesa:${rows.DESMESA}
                                <br>
                                <small class="negrita text-info">Cliente:${rows.NIT}-${rows.NOMCLIE}</small>
                                <br>
                                <small class="negrita text-danger"><b>${factura}</b></small>
                            </td>
                            <td><b>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</b></td>
                            <td>
                                <button class="btn btn-md btn-circle btn-info hand shadow" onclick="show_orden('${rows.CODDOC}','${rows.CORRELATIVO}')">
                                    <i class="fal fa-edit"></i>
                                </button>
                            </td>
                            <td>
                                <button class="btn btn-md btn-circle btn-success hand shadow" onclick="print_orden('${rows.CODDOC}','${rows.CORRELATIVO}','${rows.NIT}','${rows.NOMCLIE}','${rows.DIRCLIE}')">
                                    <i class="fal fa-print"></i>
                                </button>
                            </td>
                    </tr>`
        })
        let tbl = `<table class="table table-responsive table-bordered">
                        <thead class="bg-warning negrita">
                            <tr>
                                <td>Documento</td>
                                <td>Importe</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>${str}</tbody>
                    </table>`
        container.innerHTML = tbl;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerText = 'No se cargaron los datos...'
    }); 



}


function show_orden(coddoc, correlativo){

    $('#modalDetalle').modal('show');



    let container = document.getElementById('tblDataDetalle');
    container.innerHTML = GlobalLoader;

    let str = '';
    let total = 0;

    axios.post('/admin/select_ordenes_detalle', {  
        sucursal: GlobalSucursal,
        coddoc:coddoc,
        correlativo:correlativo
    })
    .then((response)=>{
        const data = response.data.recordset;
        data.map((r)=>{
            total += Number(r.TOTALPRECIO);
            str += `<tr>
                            <td>${r.DESPROD}</td>
                            <td>${r.TOTALUNIDADES}</td>
                            <td><b>${funciones.setMoneda(r.TOTALPRECIO,'Q')}</b></td>
                    </tr>`
        })
        document.getElementById('lbTotalOrden').innerText = funciones.setMoneda(total,'Q');  
        container.innerHTML = str;
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        document.getElementById('lbTotalOrden').innerText ='--'
        container.innerHTML = 'No se cargaron los datos...'
    }); 



};


function print_orden(coddoc, correlativo,nit,nomclie,dirclie){

    //$('#modalDetalle').modal('show');



    let container = document.getElementById('ticket');
    container.innerHTML = GlobalLoader;

    let str = '';
    let total =0;

    axios.post('/admin/select_ordenes_detalle', {  
        sucursal: GlobalSucursal,
        coddoc:coddoc,
        correlativo:correlativo
    })
    .then((response)=>{
        const data = response.data.recordset;
        data.map((r)=>{
            total += Number(r.TOTALPRECIO);
            str += `<tr>
                            <td>${r.DESPROD}</td>
                            <td>${r.TOTALUNIDADES}</td>
                            <td><b>${funciones.setMoneda(r.TOTALPRECIO,'Q')}</b></td>
                    </tr>`
        })  
        let tbl = `
                <div class="">
                    <div class="form-group">
                        <label>NIT: ${nit}</label>
                    </div>
                    <br>
                    <div class="form-group">
                        <label>Cliente: ${nomclie}</label>
                    </div>
                    <br>
                    <div class="form-group">
                        <label>Dirección: ${dirclie}</label>
                    </div>
                </div>

                <table class="table table-responsive col-12">
                    <thead class="bg-trans-gradient text-white">
                        <tr>
                            <td>Producto</td>
                            <td>Cantidad</td>
                            <td>Importe</td>
                        </tr>
                    </thead>
                    <tbody id="">${str}</tbody>
                    <tfoot class="">
                        <tr class="border-info border-left-0 border-right-0">
                            <th></th>
                            <th>Total:</th>
                            <th>
                                <b><h5 class="text-danger negrita">${funciones.setMoneda(total,'Q')}</h5></b>
                            </th>
                        </tr>
                    </tfoot>
                </table>
        `
        container.innerHTML = tbl;
        funciones.imprimirSelec('ticket');
        document.getElementById('txtFecha').value = funciones.getFecha();
    }, (error) => {
        funciones.AvisoError('Error en la solicitud');
        container.innerHTML = 'No se cargaron los datos...'
    }); 



};