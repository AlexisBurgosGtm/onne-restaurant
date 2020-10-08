let socket = io();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
   navigator.serviceWorker.register('sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
};


socket.on('comandas nueva', function(msg){
    if(GlobalSelectedForm=='DESPACHO'){
        try {
            let cmbTipoListado = document.getElementById('cmbTipoListado');
            api.getPedidosPendientes('txtTotal','tblPedidosPendientes',cmbTipoListado.value);
        } catch (error) {
            console.log('no estás en despacho')
        }
    }
});

socket.on('comandas finalizada', function(msg){
    if(GlobalSelectedForm=='MESAS'){
        try {
            api.getMesas('tblMesas');
        } catch (error) {
            console.log('no estás en mesas')
        }
    }
});

classNavegar.login();