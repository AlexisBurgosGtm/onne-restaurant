let classNavegar = {
    login : async()=>{
        divUsuario.innerText = 'DESCONECTADO';
        lbTipo.innerText = "Inicie sesión";
        rootMenu.innerHTML = '';
        GlobalCoddoc = '';
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
        divUsuario.innerText = GlobalUsuario;
        lbTipo.innerText = GlobalTipoUsuario;

        
        let strMenu ='';

        switch (tipousuario) {
            case 'VENDEDOR':
                strMenu =   `
                            <a class="dropdown-item" id="btnMenuVendedorClientes">
                                <span>Clientes</span>
                            </a>
                            <a class="dropdown-item" id="btnMenuVendedorPedidos">
                                <span>Pedidos</span>
                            </a>
                            <a class="dropdown-item" id="btnMenuVendedorLogro">
                                <span>Logros</span>
                            </a>
                            `

                funciones.loadScript('../views/inicio/vendedor.js','root')
                .then(()=>{
                    GlobalSelectedForm='INICIO';
                    InicializarVista();
                    rootMenu.innerHTML = strMenu;
                      // handlers del menu
                    let btnMenuVendedorClientes = document.getElementById('btnMenuVendedorClientes');
                    btnMenuVendedorClientes.addEventListener('click',()=>{
                        console.log('menu clientes');
                        classNavegar.inicio('VENDEDOR');
                    });
                    let btnMenuVendedorPedidos = document.getElementById('btnMenuVendedorPedidos');
                    btnMenuVendedorPedidos.addEventListener('click',()=>{
                        classNavegar.pedidos();
                    });
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

        };

        
      
      
    },
    ventas: async(nit,nombre,direccion)=>{
        funciones.loadView('../views/facturacion/index.html','root')
        .then(()=>{            
            funciones.loadScript('./views/facturacion/controller.js','root')
            .then(()=>{
                GlobalSelectedForm ='VENTAS';
                //controllerventa.iniciarVistaVentas(nit,nombre,direccion);
                iniciarVistaVentas(nit,nombre,direccion);
            })
        })
    },
    pedidos: async ()=>{
        funciones.loadScript('../views/pedidos/vendedor.js','root')
        .then(()=>{
            GlobalSelectedForm='PEDIDOS';
            inicializarVistaPedidos();
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