function getView(){
    let view = {
        login : ()=>{
            return `
        <div class="row">
            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4"></div>

            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4">
                <div class="card">

                    <div class="card-header bg-trans-gradient text-center">
                        <h5 class="text-white">Inicio de Sesión</h5>
                    </div>
                    <div class="card-body">
                        <form class="" id="frmLogin" autocomplete="off">
                            <div class="form-group">
                                <select class="form-control" id="cmbSucursal">
                                    
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Usuario:</label>
                                <input class="form-control" type="text" id="txtUser" placeholder="Escriba su usuario" required="true">
                            </div>
                            <div class="form-group">
                                <label>Contraseña:</label>
                                <input class="form-control" type="password" id="txtPass" placeholder="Escriba su contraseña" required="true">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary form-control" type="submit">Ingresar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <div class="col-md-4 col-sm-12 col-lg-4 col-lx-4"></div>
            `
        }
    };

    root.innerHTML = view.login();
};



function addListeners(){
    
    let frmLogin = document.getElementById('frmLogin');

    frmLogin.addEventListener('submit',(e)=>{
        e.preventDefault();
        api.empleadosLogin(frmLogin.cmbSucursal.value,frmLogin.txtUser.value,frmLogin.txtPass.value)
        
    })
};


function InicializarVista(){
   getView();
   addListeners();
   classTipoDocumentos.getSucursales('cmbSucursal');
   
};