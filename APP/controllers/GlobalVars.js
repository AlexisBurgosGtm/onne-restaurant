let root = document.getElementById('root');
let rootMenu = document.getElementById('rootMenu');
let divUsuario = document.getElementById('divUsuario');
let lbTipo = document.getElementById('lbTipo');

divUsuario.innerText = "DESCONECTADO";
lbTipo.innerText = "Inicie sesión";

/*
let GlobalToken = 'PROMELEC';  
let GlobalUsuario = 'PROMELEC'; 
let GlobalNivelUser = 0;
let GlobalEmpnit = 'PROMELEC001'; 
let GlobalEmpNombre = 'PROMELEC'; 
let GlobalSelectedForm = '';

let GlobalCoddoc = 'PED01';
let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalCodBodega = '01'; 
let GlobalTipoCobro = 'COBRO'; // 'TERMINAR'

let GlobalSelectedApp = '';

let GlobalSistema = 'COMMUNITY'; 
*/

let GlobalToken = 'MERCADOSEFECTIVOS';
let GlobalCodSucursal = '';

let GlobalCodUsuario = 99999;
let GlobalUsuario = 'MERCADOSEFECTIVOS';
let GlobalNivelUser = 0;
let GlobalTipoUsuario ='';


let GlobalEmpnit = '1034261-3';
let GlobalEmpNombre = 'MERCADOS EFECTIVOS';
let GlobalSelectedForm = '';

let GlobalCoddoc = 'PED01';
let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalCodBodega = '01';
let GlobalTipoCobro = 'TERMINAR';

let GlobalSelectedApp = '';

let GlobalSistema = 'ISC';



let GlobalLoader = `
                <div>
                    <div class="spinner-grow text-info" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-danger" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-warning" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-info" role="status"><span class="sr-only">Loading...</span></div>
                    <div class="spinner-grow text-danger" role="status"><span class="sr-only">Loading...</span></div>
                </div>
                `

//'<div class="spinner-grow text-info" role="status"><span class="sr-only">Loading...</span></div>'


//'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';


let GlobalSelectedCodcliente = 0;
