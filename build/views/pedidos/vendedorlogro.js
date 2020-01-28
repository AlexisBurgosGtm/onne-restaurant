function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row bg-trans-gradient text-white">
                <h5>Seleccione un Mes y un Reporte</h5>
            </div>

            <div class="row">
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="row">

                        <div class="col-6">
                            <div class="form-group">
                                <select class="form-control" id="cmbMes"></select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <select class="form-control" id="cmbAnio"></select>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="row">

                        <div class="col-4">
                            
                                <button class="btn btn-success btn-round" id="btnCargarDinero">
                                    <i class="fal fa-tag"></i>
                                    Dinero
                                </button>
                            
                        </div>
                        <div class="col-4">
                            
                                <button class="btn btn-success btn-round" id="btnCargarProductos">
                                    <i class="fal fa-cube"></i>
                                    Produc
                                </button>
                            
                        </div>
                        <div class="col-4">
                            
                                <button class="btn btn-success btn-round" id="btnCargarMarcas">
                                    <i class="fal fa-credit-card-front"></i>
                                    Marcas
                                </button>
                            
                        </div>

                    </div>
                </div>

                
            </div>
            `
        },
        listado: ()=>{
            return `
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-responsive table-striped table-hover" id="tblReport">
                        
                    </table>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado()
};

function addListeners(){
    let f = new Date();
    let cmbMes = document.getElementById('cmbMes');
    cmbMes.innerHTML = funciones.ComboMeses();
    let cmbAnio = document.getElementById('cmbAnio');
    cmbAnio.innerHTML = funciones.ComboAnio();

    cmbMes.value = f.getMonth()+1;
    cmbAnio.value = f.getFullYear();

    let btnCargarDinero = document.getElementById('btnCargarDinero');
    btnCargarDinero.addListeners('click',()=>{
        getRptDinero(cmbMes.value, cmbAnio.value);
    });
    let btnCargarProductos = document.getElementById('btnCargarProductos');
    btnCargarProductos.addListeners('click',()=>{
        getRptProductos(cmbMes.value, cmbAnio.value);
    });
    let btnCargarMarcas = document.getElementById('btnCargarMarcas');
    btnCargarMarcas.addListeners('click',()=>{
        getRptMarcas(cmbMes.value, cmbAnio.value);
    });
};

function inicializarVistaLogro(){
    getView();
    addListeners();
};


function getRptDinero(mes,anio){

};
function getRptProductos(mes,anio){

};
function getRptMarcas(mes,anio){

};
