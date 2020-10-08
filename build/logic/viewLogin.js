function getView(){
    let view = {
        inicio: ()=>{
            return `
        <div class="row">
            <div class="col-12">

                <div class="card card-user">    
                    <div class="card-body">
                        <div class="text-center">
                            <img class="avatar border-gray" width="100" height="100" src="./logoempresa.png" alt="...">
                        </div>
                        <div class="form-group" id="">
                            <label>Empresa:</label>
                            <select class="form-control" id="cmbEmpresas">
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            `
        },
        listado: ()=>{
            return `
        <div class="row" id='tblListaEmpleados'>
            
        </div>
            `
        },
        modalClave:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true" id="modalClave">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="dropdown-header bg-danger d-flex justify-content-center align-items-center w-100">
                        <h4 class="m-0 text-center color-white">
                            Ingrese su clave
                        </h4>
                        
                        <button type="button" class="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="" id="">
                                                                        
                            
                            
                        </div>
                        <span id="saving"></span>
                    </div>
                    <div class="modal-footer">

                        <button class="btn btn-sm btn-danger position-absolute pos-bottom pos-right " id="btnCerrarModalMenuLateral" data-dismiss="modal"><<- Regresar</button>
                    </div>
                </div>
            </div>
        </div>
            `
        }
    };

    root.innerHTML = view.inicio() + view.listado();

};

async function addListeners(){
    
    let cmbEmpresas = document.getElementById('cmbEmpresas');

    
    cmbEmpresas.addEventListener('change',async()=>{
        GlobalSucursal = cmbEmpresas.value;
        await cargarGrid();
    });

    api.getEmpresas('cmbEmpresas')
    .then(async()=>{
        GlobalSucursal = cmbEmpresas.value;
        await cargarGrid();
    })

};

function cargarGrid(){
    api.getMeseros('tblListaEmpleados');
};

function getClaveMesero(usuario,clave){
    GlobalUser = usuario;
    funciones.Aviso(`Bienvenido ${usuario}`);
    classNavegar.inicioMesas();

    /*
    let verificar = prompt('<div class="card">Escriba su clave de usuario</div>');
    if(verificar==clave){
        funciones.Aviso(`Bienvenido ${usuario}`);
        classNavegar.inicioMesas();
    }else{
        funciones.AvisoError('Clave incorrecta');
    }
     */
};


function iniciarLogin(){
    funciones.instalationHandlers('btnInstalarApp');
    getView();
    addListeners();
};