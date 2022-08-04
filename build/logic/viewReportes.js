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
                <div class="card card-rounded shadow p-4">
                    <h5>Reporte de Ventas Día</h5>
                </div>
            </div>

            <div class="row">
                <div class="card card-rounded shadow p-4" id=">
                    
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


    document.getElementById('btnAtrasInicio').addEventListener('click',()=>{
        classNavegar.inicio();
    })


    funciones.slideAnimationTabs();

};

function initView(){

        getView();
        addEventListeners();

};



