function getView(){
    let view ={
        encabezado : ()=>{
            return `
            <div class="row">
                <div class="card">
                    <div class="card-header bg-trans-gradient text-white">
                        <select id="cmbSucursal" class="form-control"></select>
                    </div>
                </div>
            </div>
            `
        },
        listado : ()=>{
            return `
            <br>
            <div class="row">
                <div class="card">
                    <div class="card-header bg-trans-gradient text-white">
                        <h1>Dashboard general en proceso</h1>
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
            `
        }
    };

    root.innerHTML = view.encabezado() + view.listado()

};

function addListeners(){

};

function InicializarVistaGerente(){
    
    getView();
    addListeners();

};

