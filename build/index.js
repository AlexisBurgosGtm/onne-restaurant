let socket = io();
GlobalLogged = 0;
GlobalSucursal='';


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
   navigator.serviceWorker.register('sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
};


socket.on('comandas nueva', function(msg){
    if(GlobalSelectedForm=='DESPACHO'){
        try {
            //let cmbTipoListado = document.getElementById('cmbTipoListado');
            //api.getPedidosPendientes('txtTotal','tblPedidosPendientes',cmbTipoListado.value);
            let cmbTipoListado = document.getElementById('cmbTipoListado');
            getPedidosPendientes('txtTotal','tblPedidosPendientes',cmbTipoListado.value);
        } catch (error) {
            console.log('no estás en despacho')
        }
    }
});

socket.on('comandas finalizada', function(msg){
    if(GlobalSelectedForm=='MESAS'){
        try {
            getMesas();
        } catch (error) {
            console.log('no estás en mesas')
        }
    }
});

//classNavegar.login();
classNavegar.inicio();


/* 
document.getElementById('btnMenInicio').addEventListener('click',()=>{

    classNavegar.login();

});

document.getElementById('btnMenMesas').addEventListener('click',()=>{

    classNavegar.inicioMesas();
    
});

document.getElementById('btnMenDespacho').addEventListener('click',()=>{

    classNavegar.inicioDespacho();
    
});

document.getElementById('btnMenProductos').addEventListener('click',()=>{

    classNavegar.productos();
    
});


document.getElementById('btnMenReportes').addEventListener('click',()=>{

    classNavegar.reportes();
    
});

*/