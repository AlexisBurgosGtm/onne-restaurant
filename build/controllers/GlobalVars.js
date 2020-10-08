let root = document.getElementById('contenedor');
let lbMenuTitulo = document.getElementById('lbMenuTitulo');
let rootMenuLateral = document.getElementById('rootMenuLateral');
let GlobalSelectedForm = 'LOGIN';

function getMenuLateral(){
    $('#modalMenuLateral').modal('show');
};

function closeMenuLateral(){
    $('#modalMenuLateral').modal('hide');
};

let GlobalSucursal;
let GlobalUser;
let GlobalCoddoc;
let GlobalTotalVenta;
let GlobalTotalCosto;

let GlobalSelectedId =0;
let GlobalSelectedCosto = 0;
let GlobalSelectedPrecio = 0;
let GlobalSelectedEquivale = 0;

let GlobalSelectedCoddoc;
let GlobalSelectedCorrelativo;
let GlobalSelectedIdMesa = 0;



let GlobalLoader = `
                <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>
                <div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>`;

