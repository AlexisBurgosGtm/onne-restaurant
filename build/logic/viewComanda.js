function getView(idMesa,DesMesa){
    
    let view = {
        encabezado :()=>{
            return `
            <div class="row navbar-fixed">
                <div class="col-6 text-left">
                    <h3>${DesMesa}<h3>
                    <div class="input-group">
                        <select id="cmbCuenta" class="form-control">
                            <option value=0>General</option>
                            <option value=1>Cuenta 1</option>
                            <option value=2>Cuenta 2</option>
                            <option value=3>Cuenta 3</option>
                            <option value=4>Cuenta 4</option>
                            <option value=5>Cuenta 5</option>
                            <option value=6>Cuenta 6</option>
                            <option value=7>Cuenta 7</option>
                            <option value=8>Cuenta 8</option>
                            <option value=9>Cuenta 9</option>
                            <option value=10>Cuenta 10</option>
                        </select>
                        <div class="input-group-append">
                            <button class="btn btn-info" id="btnSolicitarProducto">
                                Enviar
                                <i class="fal fa-check"></i>
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div class="col-6 text-right">
                    <h1 class="text-danger text-right" id="lbTotalVenta">Q 0.00</h1>
                    <button class="btn btn-warning waves-effect waves-themed" type="button" id="btnSolicitarCuenta">
                                Pedir cuenta
                                <i class="fal fa-check"></i>
                    </button>
                </div>
                
            </div>
            `
        },
        listado :()=>{
            return `
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-responsive table-hover table-bordered table-striped col-12">
                        <thead class="bg-trans-gradient text-white">
                            <tr>
                                <td>Producto</td>
                                <td>Cantidad</td>
                                <td></td>
                            </tr>
                        </thead>
                    
                    <tbody id="tblPedido"></tbody>
                    </table>
                </div>
            </div>
            `
        },
        btnNuevo:()=>{
            return `
            <div id="fixed-btn2">
              <button class="btn btn-success btn-circle btn-xl" id="btnNuevoProducto">+</button>
            </div>
            `
        },
        containerCantidad:()=>{
            return `<div id="rootModalCantidad"></div>`;
        },
        listadoProductos:()=>{
            return `
            <div class="row">
                
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-responsive table-striped table-hover table-bordered">
                            <thead class="bg-success text-white">
                                <tr>
                                    <td>Producto</td>
                                    <td>Precio</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblListaProductos"></tbody>
                        </table>
                    </div>
                </div>
            </div>
            `
        }
    };

    lbMenuTitulo.innerHTML = `Seleccione un Producto
                            <small class="mb-0 opacity-80">Productos disponibles</small>`


    root.innerHTML = view.encabezado() + view.listado() + view.btnNuevo() + view.containerCantidad();;
    rootMenuLateral.innerHTML = view.listadoProductos();

};

function cargarGridProductos(){
    api.getComandaProductos('tblListaProductos')
};

async function cargarGridPedido(idMesa){
    let cmbCuenta = document.getElementById('cmbCuenta');

    await api.getTotalCuenta(idMesa,'lbTotalVenta','tblPedido',cmbCuenta.value);
};

function addProduct(codprod,desprod,codmedida,equivale,costo,precio){
    let cmbCuenta = document.getElementById('cmbCuenta');
    api.insertTempComanda(GlobalSelectedIdMesa,codprod,desprod,codmedida,1,equivale,costo,precio,0,'',cmbCuenta.value)
    .then(()=>{
        closeMenuLateral();
        cargarGridPedido(GlobalSelectedIdMesa);
    })
    
};

function getProductoPedidoOpciones(id,costo,precio,cantidad,equivale){
    console.log(`${id},${costo},${precio},${cantidad},${equivale}`);
    GlobalSelectedId =id;
    GlobalSelectedCosto = costo;
    GlobalSelectedPrecio = precio;
    GlobalSelectedEquivale = equivale;

    document.getElementById('lbCalcTotal').innerText='';    
    $("#ModalCantidad").modal('show');

};

function fcnUpdateRowPedido(id,costo,precio,equivale,nuevacantidad){
    //let nuevacantidad = Number(document.getElementById('lbCalcTotal').innerText);
    api.updateTempComanda(id,costo,precio,nuevacantidad,equivale,'')
    .then(async()=>{
        await cargarGridPedido(GlobalSelectedIdMesa);
    })

};

function fcnDeleteRowPedido(id){
    api.deleteTempComanda(id)
    .then(async()=>{
        await cargarGridPedido(GlobalSelectedIdMesa);
    })
}

async function addListeners(){
    
    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',async()=>{
        await cargarGridProductos();
        getMenuLateral();
    });

    let cmbCuenta = document.getElementById('cmbCuenta');
    cmbCuenta.addEventListener('change',()=>{
        cargarGridPedido(GlobalSelectedIdMesa);
    })

    let btnSolicitarProducto = document.getElementById('btnSolicitarProducto');
    btnSolicitarProducto.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Enviar este Pedido?')
        .then((value)=>{
            if(value==true){
                api.solicitarComanda(GlobalSelectedIdMesa)
                .then(()=>{
                    funciones.Aviso('Pedido solicitado exitosamente !! ')
                    cargarGridPedido(GlobalSelectedIdMesa);
                    socket.emit('comandas nueva','solicitar comanda');
                })
                .catch(()=>{
                    funciones.AvisoError('Error al enviar el pedido, inténtelo de nuevo')
                })
            }
        });
    });

    let btnSolicitarCuenta = document.getElementById('btnSolicitarCuenta');
    btnSolicitarCuenta.addEventListener('click',()=>{
        funciones.Confirmacion('¿Está seguro que desea Solicitar la CUENTA de esta mesa?')
        .then((value)=>{
            if(value==true){
                api.solicitarCuenta(GlobalSelectedIdMesa)
                .then(()=>{
                    funciones.Aviso('Cuenta solicitada Exitosamente!!')
                    socket.emit('comandas finalizada','')
                    classNavegar.inicioMesas();
                })
                .catch(()=>{
                    funciones.AvisoError('Ocurrió un error!! inténtelo de nuevo.s')
                })
                

            }
        })

    })

    cargarGridPedido(GlobalSelectedIdMesa);
    funciones.modalCantidad('rootModalCantidad');
};

function iniciarComanda(idMesa, DesMesa){
    GlobalSelectedIdMesa = Number(idMesa);
    getView(idMesa,DesMesa);
    addListeners();
}