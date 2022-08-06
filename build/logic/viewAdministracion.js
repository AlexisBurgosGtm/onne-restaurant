function getView(){

    let view = {
        menu:()=>{
            return `
            <div class="col-12 p-0 shadow bg-white card-rounded">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="listado" role="tabpanel" aria-labelledby="receta-tab">    
                            ${view.listado()}
                        </div>
                        <div class="tab-pane fade" id="nuevo" role="tabpanel" aria-labelledby="home-tab">
                            ${view.nuevo()}
                        </div>
                        <div class="tab-pane fade" id="pacientes" role="tabpanel" aria-labelledby="home-tab">  
                            
                        </div>
                        <div class="tab-pane fade" id="reportes" role="tabpanel" aria-labelledby="tab-reportes">
                            
                        </div>
                    </div>
            
                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-listado" data-toggle="tab" href="#listado" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i>Listado</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-nuevo" data-toggle="tab" href="#nuevo" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i>nuevo</a> 
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
        listado : ()=>{
            return `
            <div class="row">
                <div class="card card-rounded shadow p-4">
                    <h5>Catálogo de productos</h5>
                </div>
            </div>

            <div class="row">
                <div class="card card-rounded shadow p-4">
                    <div class="table-responsive" id="containerListado">



                    </div>
                </div>
            </div>
            
            <div class="btn-bottom-left">
                <button class="btn btn-xl btn-circle btn-secondary hand shadow" id="btnAtrasAdmin">
                    <i class="fal fa-home"></i>
                </button>
            </div>

            <div class="btn-bottom-right">
                <button class="btn btn-xl btn-circle btn-success hand shadow" id="btnNuevoProducto">+</button>
            </div>
            
            `
        },
        nuevo : ()=>{
            return `
            <div class="row">
                <div class="card card-rounded shadow p-4">
                    <h5>Datos del producto</h5>
                </div>
            </div>

            <div class="row">
                <div class="card card-rounded shadow p-4">
                   
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label></label>
                        <input type="text" class="form-control">
                    </div>

                    
                </div>
            </div>

            `
        }
    }

    root.innerHTML = view.menu();

};

function addEventListeners(){

    let btnAtrasAdmin = document.getElementById('btnAtrasAdmin');
    btnAtrasAdmin.addEventListener('click',()=>{
        classNavegar.inicio();
    });

    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',()=>{
        
        LimpiarDatos();

        document.getElementById('tab-nuevo').click();

    })

    funciones.slideAnimationTabs();

};

function initView(){

        getView();
        addEventListeners();

};


function LimpiarDatos(){

};

function getListadoProductos(){



};