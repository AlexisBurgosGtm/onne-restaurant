let root = document.getElementById('contenedor');
let lbMenuTitulo = document.getElementById('lbMenuTitulo');
let rootMenuLateral = document.getElementById('rootMenuLateral');
let GlobalSelectedForm = 'LOGIN';

let GlobalLogged = 0;

let GlobalConfigClave = 'admin';
let GlobalNivelUsuario = 0;

function getMenuLateral(){
    //document.getElementById('btnCerrarModalMenuLateral').style = "visibility:visible";
    $('#modalMenuLateral').modal('show');
};

function closeMenuLateral(){
   // document.getElementById('btnCerrarModalMenuLateral').style = "visibility:hidden";
    $('#modalMenuLateral').modal('hide');
};

//document.getElementById('btnCerrarModalMenuLateral').style = "visibility:hidden";
//document.getElementById('btnCerrarModalMenuLateral').addEventListener('click',()=>{
    //closeMenuLateral();
//})

let GlobalCodempleado = 0;
let GlobalSelectedCodempleado =0;
let GlobalSucursal='';
let GlobalUser;
let GlobalCoddoc;
let GlobalTotalVenta;
let GlobalTotalCosto;

let GlobalSelectedCodprod = '';
let GlobalSelectedId =0;
let GlobalSelectedCosto = 0;
let GlobalSelectedPrecio = 0;
let GlobalSelectedEquivale = 0;

let GlobalSelectedCoddoc;
let GlobalSelectedCorrelativo;
let GlobalSelectedIdMesa = 0;



let GlobalLoaderX = `
                <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>
                `;

let GlobalLoader = `
                <div id="preloader">
                    <div id="loader"></div>
                </div>
                `;
