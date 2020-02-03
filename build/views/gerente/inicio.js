function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row">
                <div id="panel-1" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Seleccione mes y año</h2>                  
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-6">
                                    <select class="form-control" id="cmbMes"></select>
                                </div>
                                <div class="col-4">
                                    <select class="form-control" id="cmbAnio"></select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `},
        seccionSucursales : ()=>{
            return `
            <div class="row">
                <div id="panel-1" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Ventas totales del Mes</h2>
                        <h3 id="lbTotalSucursales" class="text-danger">0.00</h3>
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="row" id="rootSucursales">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        seccionVendedores : ()=>{
            return `
            <div class="row">
                <div id="panel-1" class="panel col-12">
                    <div class="panel-hdr">
                        <h2>Ranking de Vendedores</h2>
                  
                        <div class="panel-toolbar">
                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>          
                        </div>
                    </div>
                    <div class="panel-container">
                        <div class="panel-content">
                            <div class="row" id="rootVendedores">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.seccionSucursales() + view.seccionVendedores();

};

async function addListeners(){
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();
    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();

    let f = new Date();
    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();
    
    cmbMes.addEventListener('change',async()=>{
        await api.gerenciaResumenSucursal(cmbMes.value, cmbAnio.value,'rootSucursales','lbTotalSucursales');
        await api.gerenciaRankingVendedores(cmbMes.value, cmbAnio.value,'rootVendedores');
    });
    
    cmbAnio.addEventListener('change',async()=>{
        await api.gerenciaResumenSucursal(cmbMes.value, cmbAnio.value,'rootSucursales','lbTotalSucursales');
        await api.gerenciaRankingVendedores(cmbMes.value, cmbAnio.value,'rootVendedores');
    });



    await api.gerenciaResumenSucursal(cmbMes.value, cmbAnio.value,'rootSucursales','lbTotalSucursales');
    await api.gerenciaRankingVendedores(cmbMes.value, cmbAnio.value,'rootVendedores');

};

function InicializarVistaGerente(){
    
    getView();
    addListeners();

};

