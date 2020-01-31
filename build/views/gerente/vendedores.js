function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row">
                <div class="card col-12">                  
                    <select id="cmbSucursal" class="form-control"></select>
                </div>
            </div>
            `
        },
        listado : ()=>{
            return `
            <br>
            <div class="row">
                <div class="card col-12">
                    <div class="card-header">
                        <h1>Seleccione un vendedor</h1>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-responsive table-striped table-hover table-bordered">
                                <thead class=" bg-trans-gradient text-white">
                                    <tr>
                                        <td>Vendedor</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody id="tblVendedores"></tbody>
                            </table>
                        </div>

                        
                    </div>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado()

};

function addListeners(){
    let cmbSucursal = document.getElementById('cmbSucursal');
    classTipoDocumentos.getSucursales('cmbSucursal')
    .then(()=>{
        api.tblVendedores(cmbSucursal.value,'tblVendedores');
    })

    cmbSucursal.addEventListener('change',()=>{
        api.tblVendedores(cmbSucursal.value,'tblVendedores');
    });


};



function InicializarVistaGerenteVendedores(){
    
    getView();
    addListeners();

    
};