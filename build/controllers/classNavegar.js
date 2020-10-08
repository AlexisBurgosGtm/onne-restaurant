const classNavegar ={
    login: ()=>{
        let rootMenu = document.getElementById('rootMenu');
        rootMenu.innerHTML = '';
        funciones.loadScript('../logic/viewLogin.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='LOGIN';
            iniciarLogin();
        })             
    },
    configuracionesInicio: ()=>{
        let rootMenu = document.getElementById('rootMenu');
        rootMenu.innerHTML = `
    <div class="">
        <a href="#" class="header-icon" id="btnMenuMesas">
            <i class="fal fa-shield-alt"></i>Mesas .
        </a>
    </div>
    
    <div class="">
        <a href="#" class="header-icon" id="btnDespachos">
           <i class="fal fa-chart-pie"></i>Despacho .
        </a>
    </div>     
    <div class="hidden-md-down">
        <a href="#" class="header-icon" data-toggle="modal" data-target=".js-modal-settings">
            <i class="fal fa-cog"></i>
        </a>
    </div>
    <div class="">
        <a href="" class="header-icon" id="btnSalir">
            <i class="fal fa-sign-out"></i>
        </a>
    </div>`;
        let btnMenuMesas = document.getElementById('btnMenuMesas');
        btnMenuMesas.addEventListener('click',()=>{
            classNavegar.inicioMesas();
        });
        let btnDespachos = document.getElementById('btnDespachos');
        btnDespachos.addEventListener('click',()=>{
            classNavegar.inicioDespacho();
        });

        let btnSalir = document.getElementById('btnSalir');
        btnSalir.addEventListener('click',()=>{
            classNavegar.login();
        })
    },
    inicioMesas: ()=>{
        classNavegar.configuracionesInicio();
        funciones.loadScript('../logic/viewMesas.js','contenedor')
        .then(()=>{
            GlobalSelectedForm ='MESAS';
            iniciarMesas();
        })             
        
    },
    inicioComanda: (idMesa,DesMesa)=>{
        funciones.loadScript('../logic/viewComanda.js','contenedor')
        .then(()=>{
            GlobalSelectedForm ='COMANDA';
            iniciarComanda(idMesa,DesMesa);
        })             
    },
    inicioDespacho: ()=>{
        classNavegar.configuracionesInicio();
        funciones.loadScript('../logic/viewDespacho.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='DESPACHO';
            iniciarVistaDespachos();
        })             
        
    }
}