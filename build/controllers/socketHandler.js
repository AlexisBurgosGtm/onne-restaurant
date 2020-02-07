socket.on('productos precio', function(msg,form){
    funciones.NotificacionPersistent(msg,"productos precio");
});

socket.on('ordenes escribiendo', function(msg,form){
    funciones.NotificacionPersistent(msg,"Nueva Orden generada");
});

