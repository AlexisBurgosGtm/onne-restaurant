const classNavegar ={
    inicio: ()=>{
        
        funciones.loadScript('../logic/viewInicio.js','contenedor')
        .then(()=>{
            GlobalSelectedForm ='INICIO';
            initView();
            document.getElementById('lbUsuario').innerText = 'Inicio Onne Restaurant';
        })             
        
    },
    comanda: ()=>{
        
        funciones.loadScript('../logic/viewComanda.js','contenedor')
        .then(()=>{
            GlobalSelectedForm ='COMANDAS';
            initView();
            document.getElementById('lbUsuario').innerText = 'Seleccione un Mesero';
        })             
        
    },
    despacho: ()=>{

        //if(GlobalLogged==0){funciones.AvisoError('Primero debe iniciar sesión'); return};


        funciones.loadScript('../logic/viewDespacho.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='DESPACHO';
            iniciarVistaDespachos();
            document.getElementById('lbUsuario').innerText = 'Cocina // Despacho';
        })             
        
    },
    facturacion: ()=>{

        //if(GlobalLogged==0){funciones.AvisoError('Primero debe iniciar sesión'); return};

        funciones.loadScript('../logic/viewFacturacion.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='FACTURACION';
            initView();
            document.getElementById('lbUsuario').innerText = 'Facturación';
        })             
        
    },
    administracion: ()=>{
        //if(GlobalLogged==0){funciones.AvisoError('Primero debe iniciar sesión'); return};

        funciones.loadScript('../logic/viewAdministracion.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='ADMINISTRACION';
            initView();
            document.getElementById('lbUsuario').innerText = 'Administración';
        })             
        
    },
    reportes: ()=>{

        //if(GlobalLogged==0){funciones.AvisoError('Primero debe iniciar sesión'); return};

        funciones.loadScript('../logic/viewReportes.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='REPORTES';
            initView();
            document.getElementById('lbUsuario').innerText = 'Reportes';
        })             
        
    }
}