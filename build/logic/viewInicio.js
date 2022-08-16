function getView(){
    let view = {
        body:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">
                    <div class="tab-content" id="myTabHomeContent">
                       
                        <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.login()}
                        </div>
                        <div class="tab-pane fade" id="inicio" role="tabpanel" aria-labelledby="home-tab">
                            ${view.inicio()}
                        </div>

                    </div>
            
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-login" data-toggle="tab" href="#login" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-inicio" data-toggle="tab" href="#inicio" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                                
                    </ul>
            </div>
            `
        },
        login: ()=>{
            return `
       <div class="row">

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">

                <div class="card card-rounded shadow p-4">    
                    <div class="card-body">

                        <div class="text-center">
                            <img class="avatar border-gray" width="100" height="100" src="./logoempresa.png" alt="...">
                        </div>
                        <div class="form-group" id="">
                            <label>Empresa</label>
                            <input type="text" class="form-control border-info border-top-0 border-left-0 negrita text-info" id="cmbEmpresas">
                        </div>
                        <div class="form-group" id="">
                            <label>Clave</label>
                            <input type="password" class="form-control border-info border-top-0 border-left-0 negrita text-info" id="txtPass">
                        </div>
                        <div class="text-right">
                            <button class="btn btn-xl btn-info btn-circle shadow hand" id="btnLogin">
                                <i class="fal fa-lock"></i>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
            `
        },
        inicio: ()=>{
            return `
        <hr class="solid">
        
        <div class="row" >

            <div class="col-4 p-2">
                <div class="p-4 bg-info-300 card-rounded shadow overflow-hidden position-relative text-white mb-g hand"  onclick="getClave('C');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            COMANDAS
                            <small class="m-0 l-h-n"></small>
                        </h3>
                    </div>
                    <i class="fal fa-utensils position-absolute pos-right pos-bottom opacity-50 mb-n1 mr-n1" style="font-size:4rem"></i>
                </div>
            </div>    

            <div class="col-4 p-2">
                <div class="p-4 bg-primary-300 card-rounded shadow overflow-hidden position-relative text-white mb-g hand"   onclick="getClave('D');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            DESPACHO
                            <small class="m-0 l-h-n"></small>
                        </h3>
                    </div>
                    <i class="fal fa-list position-absolute pos-right pos-bottom opacity-50 mb-n1 mr-n1" style="font-size:4rem"></i>
                </div>
            </div>  
            
            <div class="col-4 p-2">
                <div class="p-4 bg-warning-300 card-rounded shadow overflow-hidden position-relative text-secondary mb-g hand"   onclick="getClave('F');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            FACTURACIÓN
                            <small class="m-0 l-h-n"></small>
                        </h3>
                    </div>
                    <i class="fal fa-dollar-sign position-absolute pos-right pos-bottom opacity-50 mb-n1 mr-n1" style="font-size:4rem"></i>
                </div>
            </div>   
            

            <div class="col-6 p-2">
                <div id="btnMenAdmnin" class="p-4 bg-success-300 card-rounded shadow overflow-hidden position-relative text-white mb-g hand" onclick="getClave('A');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            ADMINISTRACIÓN
                            <small class="m-0 l-h-n"></small>
                        </h3>
                    </div>
                    <i class="fal fa-box position-absolute pos-right pos-bottom opacity-50 mb-n1 mr-n1" style="font-size:4rem"></i>
                </div>
            </div>    
            
            <div class="col-6 p-2">
                <div id="btnMenReportes" class="p-4 bg-secondary-300 card-rounded shadow overflow-hidden position-relative text-secondary mb-g hand" onclick="getClave('R');">
                    <div class="">
                        <h3 class="display-6 d-block l-h-n m-0 fw-500">
                            REPORTES
                            <small class="m-0 l-h-n"></small>
                        </h3>
                    </div>
                    <i class="fal fa-chart-pie position-absolute pos-right pos-bottom opacity-50 mb-n1 mr-n1" style="font-size:4rem"></i>
                </div>
            </div>    
            
        </div>

        <hr class="solid">

        <div class="btn-bottom-middle">
            <button class="btn btn-danger btn-circle hand shadow btn-xl" id="btnCerrarSesion">
                <i class="fal fa-lock"></i>
            </button>
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

    root.innerHTML = view.body();

};

async function addListeners(){

    GlobalNivelUsuario = 0;
  
    let cmbEmpresas = document.getElementById('cmbEmpresas');
   
    
    let btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',()=>{

        

        let empresa = cmbEmpresas.value || 'SN';
        let clave = document.getElementById('txtPass').value || 'SN';

        //soporte
        if(clave=='2410201415082017'){GlobalNivelUsuario=1;GlobalSucursal=empresa;get_permisos(1);document.getElementById('tab-inicio').click();return;}
       

        if(empresa=='SN'){funciones.AvisoError('Escriba el código de empresa');return;};
        if(clave=='SN'){funciones.AvisoError('Escriba su clave de usuario');return;};

        btnLogin.disabled = true;
        btnLogin.innerHTML = '<i class="fal fa-unlock fa-spin"></i>';

        login(empresa, clave)
        .then((tipo)=>{
            
            btnLogin.disabled = false;
            btnLogin.innerHTML = '<i class="fal fa-lock"></i>';

            GlobalNivelUsuario = tipo;
            get_permisos(tipo);
            document.getElementById('tab-inicio').click();

            GlobalSucursal = empresa;
            GlobalLogged = 1;
        })
        .catch(()=>{
            funciones.AvisoError('No se pudo iniciar sesión');
            btnLogin.disabled = false;
            btnLogin.innerHTML = '<i class="fal fa-lock"></i>';

            GlobalSucursal = '';
            GlobalLogged = 0;
    
        })
       

    })


    funciones.slideAnimationTabs();


    if(  GlobalLogged==1){ document.getElementById('tab-inicio').click();}


    let btnCerrarSesion = document.getElementById('btnCerrarSesion');
    btnCerrarSesion.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea Cerrar Sesión?')
        .then((value)=>{
            if(value==true){
                GlobalSucursal ='';
                GlobalLogged =0;
                GlobalNivelUsuario = 0;
                document.getElementById('txtPass').value ='';
                document.getElementById('tab-login').click();
        

            }
        });

     
    });

};


function initView(){
    funciones.instalationHandlers('btnInstalarApp');
    getView();
    addListeners();
};


function login(empresa, clave){
   
    let tipo = 0;

    
    return new Promise((resolve,reject)=>{
        axios.post('/empleados/login', {
            sucursal:empresa,
            clave:clave
        })
        .then((response) => {
            const data = response.data.recordset;
            if(response.data.rowsAffected[0]==0){    
                reject(tipo);
            }else{
               tipo = Number(data[0].TIPO)
                resolve(tipo);
            }
        }, (error) => {
            reject(tipo);
        });

    })

    


};


function get_permisos(tipo){

    switch (Number(tipo)) {
        case 1:
            document.getElementById("btnMenAdmnin").style = 'visibility:visible';
            document.getElementById("btnMenReportes").style = 'visibility:visible';
            break;
        case 3:
            document.getElementById("btnMenAdmnin").style = 'visibility:hidden';
            document.getElementById("btnMenReportes").style = 'visibility:hidden';

            break;
        default:
            break;
    }



};

function getClave(tipo){
   
    if(GlobalSucursal==''){
        funciones.AvisoError('Debe seleccionar una empresa válida');
        return;
    }

    GlobalLogged = 1;

      
    switch (tipo.toString()) {
        case 'C':
            classNavegar.comanda();
            break;
        case 'F':
            classNavegar.facturacion();
            break;
        case 'D':
            classNavegar.despacho();
            break;
        case 'A':
            classNavegar.administracion();
            break;
        case 'R':
            classNavegar.reportes();
            break;

        default:
            break;
    }
   

};
