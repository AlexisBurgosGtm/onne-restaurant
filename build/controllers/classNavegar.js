const classNavegar ={
    login: ()=>{
      
        funciones.loadScript('../logic/viewLogin.js','contenedor')
        .then(()=>{
            GlobalLogged =0;
            GlobalSelectedForm='LOGIN';
            iniciarLogin();
            document.getElementById('lbUsuario').innerText = '--';
        })             
    },
    inicioMesas: ()=>{
        
        if(GlobalLogged==0){funciones.AvisoError('Primero debe iniciar sesión'); return};

        funciones.loadScript('../logic/viewMesas.js','contenedor')
        .then(()=>{
            GlobalSelectedForm ='MESAS';
            iniciarMesas();
            document.getElementById('lbUsuario').innerText = GlobalUser;
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

        //if(GlobalLogged==0){funciones.AvisoError('Primero debe iniciar sesión'); return};


        funciones.loadScript('../logic/viewDespacho.js','contenedor')
        .then(()=>{
            GlobalSelectedForm='DESPACHO';
            iniciarVistaDespachos();
            document.getElementById('lbUsuario').innerText = 'Cocina // Despacho';
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