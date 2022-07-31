function getView(){
    let view = {
        body:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="espera" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.login()}
                        </div>
                        <div class="tab-pane fade" id="preconsultas" role="tabpanel" aria-labelledby="home-tab">
                           
                        </div>
                        <div class="tab-pane fade" id="pacientes" role="tabpanel" aria-labelledby="home-tab">  
                            
                        </div>
                        <div class="tab-pane fade" id="reportes" role="tabpanel" aria-labelledby="tab-reportes">
                            
                        </div>
                    </div>
            
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-espera" data-toggle="tab" href="#espera" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Turnos Espera</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-preconsultas" data-toggle="tab" href="#preconsultas" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>Pre-Consultas</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-info" id="tab-pacientes" data-toggle="tab" href="#pacientes" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-edit"></i>Pacientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-warning" id="tab-reportes" data-toggle="tab" href="#reportes" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-chart-pie"></i>Reportes</a>
                        </li> 
                                
                    </ul>
            </div>
            `
        },
        login: ()=>{
            return `
        <div class="row">
            <div class="col-12">

                <div class="card card-user card-rounded shadow">    
                    <div class="card-body">
                        <div class="text-center">
                            <img class="avatar border-gray" width="100" height="100" src="./logoempresa.png" alt="...">
                        </div>
                        <div class="form-group" id="">
                            <label>Indique el Token de su Empresa</label>
                            <input type="text" class="form-control border-info negrita">
                        </div>
                    </div>
                </div>

            </div>
        </div>
            `
        },
        inicio: ()=>{
            return `
        <div class="row">
            <div class="col-12">

                <div class="card card-user card-rounded shadow">    
                    <div class="card-body">
                        <div class="text-center">
                            <img class="avatar border-gray" width="100" height="100" src="./logoempresa.png" alt="...">
                        </div>
                        <div class="form-group" id="">
                          
                            <select class="form-control border-info border-top-0 border-left-0 negrita text-info" id="cmbEmpresas">
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
        <hr class="solid">
        
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
    getMeseros('tblListaEmpleados');
};

function getClaveMesero(usuario,clave){
    
    GlobalLogged = 1;

    GlobalUser = usuario;
   

    //funciones.Aviso(`Bienvenido ${usuario}`);
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





function getMeseros(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
        
    let strdata = '';

    axios.post('/empleados/vendedores', {  
        sucursal: GlobalSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
                strdata = strdata + `
            <div class="col-6 p-2">
                <div class="p-4 bg-info-300 card-rounded shadow overflow-hidden position-relative text-white mb-g hand"  onclick="getClaveMesero('${rows.NOMBRE}','${rows.CLAVE}');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            ${rows.NOMBRE}
                            <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                        </h3>
                    </div>
                    <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                </div>
            </div>
                `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');

    });  
}