socket.on('productos precio', function(msg,form){
    funciones.NotificacionPersistent(msg,"Productos y Precios");
});

socket.on('ordenes escribiendo', function(msg,form){
    funciones.NotificacionPersistent(msg,"Nueva Orden generada");
});

