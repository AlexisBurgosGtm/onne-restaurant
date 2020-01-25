let classNavegar = {
    login : async()=>{
        GlobalCodUsuario=99999;
        GlobalUsuario = '';
        GlobalTipoUsuario ='';
          funciones.loadScript('../views/login/index.js','root')
            .then(()=>{
                GlobalSelectedForm='LOGIN';
                InicializarVista();
            })
        
    },
    inicio : async(tipousuario)=>{
        
        console.log(tipousuario);

        switch (tipousuario) {
            case 'VENDEDOR':
                funciones.loadScript('../views/inicio/vendedor.js','root')
                .then(()=>{
                    GlobalSelectedForm='INICIO';
                    InicializarVista();
                })          
                break;

            case 'SUPERVISOR':
                funciones.loadScript('../views/inicio/supevisor.js','root')
                .then(()=>{
                    GlobalSelectedForm='INICIO';
                    InicializarVista();
                })          
                break;
            
            case 'REPARTIDOR':
                funciones.loadScript('../views/inicio/repartidor.js','root')
                .then(()=>{
                    GlobalSelectedForm='INICIO';
                    InicializarVista();
                })          
                break;
        
            default:
                break;
        }

      
      
      
    },
    ventas: async()=>{
        funciones.loadView('../views/facturacion/index.html','root')
        .then(()=>{
            funciones.loadScript('./models/classTipoDocumentos.js','root')
            funciones.loadScript('./models/classEmpleados.js','root')
            funciones.loadScript('./views/facturacion/controller.js','root')
            .then(()=>{
                GlobalSelectedForm ='VENTAS';
                controllerventa.iniciarVistaVentas();

            })
        })
    },
    despacho: async()=>{
        funciones.loadView('../views/despacho/index.html','root')
        .then(()=>{
            funciones.loadScript('./views/despacho/controller.js','root')
            .then(()=>{
                GlobalSelectedForm ='DESPACHO';
                controllerdespacho.iniciarVistaDespacho();

            })
        })
    },
    caja: async()=>{
        funciones.loadView('../views/caja/index.html','root')
        .then(()=>{
            funciones.loadScript('./views/caja/controller.js','root')
            .then(()=>{
                GlobalSelectedForm ='CAJA';
                controllercaja.iniciarVistaCaja();

            })
        })
    }

}