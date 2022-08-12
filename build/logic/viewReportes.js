function getView(){

    let view = {
        menu:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="dia" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.dia()}
                        </div>
                        <div class="tab-pane fade" id="mes" role="tabpanel" aria-labelledby="home-tab">
                     
                        </div>
                      
                    </div>
            
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-listado" data-toggle="tab" href="#dia" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-nuevo" data-toggle="tab" href="#mes" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a> 
                        </li> 
                        
                    </ul>

            </div>
            `
        },
        dia : ()=>{
            return `
            <div class="row">
                <div class="card card-rounded shadow p-4 col-12">
                    <h5>Reporte de Ventas Día</h5>
                    <div class="form-group">
                        <label>Seleccione una Fecha</label>
                        <input type="date" class="form-control" id="txtFecha">
                        
                        <div class="row">
                            <div class="col-4">
                                <button class="btn btn-sm btn-info shadow hand" id="btnCargar">
                                    <i class="fal fa-download"></i>Productos
                                </button>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-sm btn-info shadow hand" id="btnCargarOrdenes">
                                    <i class="fal fa-list"></i>Ordenes
                                </button>
                            </div>
                            <div class="col-4">
                            
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="card card-rounded shadow p-4 col-12" id="containerReportes">
                    
                </div>
            </div>           
            `
        },
        btnAtras:()=>{
            return `
            <div class="btn-bottom-left">
                <button class="btn btn-secondary btn-circle hand shadow btn-xl" id="btnAtrasInicio">
                    <i class="fal fa-home"></i>
                </button>
            </div>
            `
        },
    }

    root.innerHTML = view.menu() + view.btnAtras();

};

function addEventListeners(){


    document.getElementById('txtFecha').value = funciones.getFecha();

    document.getElementById('btnAtrasInicio').addEventListener('click',()=>{
        classNavegar.inicio();
    })


    funciones.slideAnimationTabs();


    let btnCargar = document.getElementById('btnCargar');
    btnCargar.addEventListener('click',()=>{
        getReporteProductos();
    });

    let btnCargarOrdenes = document.getElementById('btnCargarOrdenes');
    btnCargarOrdenes.addEventListener('click',()=>{
        getReporteOrdenes();
    })

};

function initView(){

        getView();
        addEventListeners();

};


function getReporteProductos(){


    let container = document.getElementById('containerReportes');
    container.innerHTML = GlobalLoader;

    let fecha = funciones.devuelveFecha('txtFecha');

    let strdata = '';
    let total = 0;    

    axios.post('/admin/rptproductos', {  
        sucursal: GlobalSucursal,
        fecha:fecha
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            total += Number(rows.TOTALPRECIO);
                strdata = strdata + `
                                    <tr>
                                        <td>${rows.DESPROD}</td>
                                        <td>${rows.TOTALUNIDADES}</td>
                                        <td>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                                    </tr>
                `
        })
        let tbl = ` <div class="row p-4 text-right">
                        <label class="negrita">Total Importe:</label>
                        <h3 class="text-danger">${funciones.setMoneda(total,'Q')}</h3>
                    </div>
                    <table class="table table-responsive table-bordered table-striped col-12">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Producto</td>
                                <td>Cantidad</td>
                                <td>Importe</td>
                            </tr>
                        </thead>
                        <tbody>${strdata}</tbody>
                    </table>`
        container.innerHTML = tbl;

    }, (error) => {
        container.innerHTML = 'No hay datos...';
        funciones.AvisoError('Error en la solicitud');
    });  

}




function getReporteOrdenes(){


    let container = document.getElementById('containerReportes');
    container.innerHTML = GlobalLoader;

    let fecha = funciones.devuelveFecha('txtFecha');

    let strdata = '';
    let total = 0;    

    axios.post('/admin/rptordenes', {  
        sucursal: GlobalSucursal,
        fecha:fecha
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            total += Number(rows.TOTALPRECIO);
                strdata = strdata + `
                                    <tr>
                                        <td>${rows.CODDOC}-${rows.CORRELATIVO}//HORA:${rows.HORA}:${rows.MINUTO} // ${rows.DESMESA}
                                            <br>
                                            <small class="negrita text-info">${rows.NIT}-${rows.NOMCLIE}</small>
                                            <br>
                                            <small class="negrita">Prod:${rows.DESPROD}</small>
                                        </td>
                                        <td>${rows.TOTALUNIDADES}</td>
                                        <td>${funciones.setMoneda(rows.TOTALPRECIO,'Q')}</td>
                                    </tr>
                `
        })
        let tbl = ` <div class="row p-4 text-right">
                        <label class="negrita">Total Importe:</label>
                        <h3 class="text-danger">${funciones.setMoneda(total,'Q')}</h3>
                    </div>
                    <table class="table table-responsive table-bordered table-striped col-12">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Orden</td>
                                <td>Cantidad</td>
                                <td>Importe</td>
                            </tr>
                        </thead>
                        <tbody>${strdata}</tbody>
                    </table>`
        container.innerHTML = tbl;

    }, (error) => {
        container.innerHTML = 'No hay datos...';
        funciones.AvisoError('Error en la solicitud');
    });  

}

