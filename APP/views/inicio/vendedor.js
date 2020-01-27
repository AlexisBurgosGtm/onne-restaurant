
function getView(){
    let view = {
        encabezado : ()=>{
            return `
                    <div class="card">
                        <div class="card-header">
                            <h5>Seleccione Dia</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">

                                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                    <select class="form-control" id="cmbDiaVisita"></select>
                                </div>
                                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-right">
                                    <button class="btn btn-success btn-rounded" id="btnCargarClientes">
                                        Ver Lista
                                    </button>
                                </div>                                        
                                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <input type="text" id="txtFiltrarCliente" class="form-control" placeholder="Buscar en la lista...">
                                </div>

                            </div> 
                        </div>

                    </div>
            `
        },
        listaclientes: ()=>{
            return `
                    <div class="card">
                        <div class="card-header">
                            <h5>Lista de Clientes</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-responsive table-striped table-hover table-bordered" id="tblLista">
                                    <thead>
                                        <tr>
                                            <td>Nombre/Código</td>
                                            <td>Dirección</td>
                                            <td>
                                                <i class="fal fa-cog"></i>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblClientes">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            `
        },
        modalMenuCliente: ()=>{
            return `
            <div id="modalMenuCliente" class="modal fade default-example-modal-bottom" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-bottom">
                    
                    <div class="modal-content">
                    <div class="card">
                        <div class="card-header bg-trans-gradient text-white text-center">
                            <label id="lbNombreCliente"></label>
                        </div>
                        
                        <div class="card-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-2">
                                        <label>Código:<label>    
                                    </div>
                                    <div class="col-3">
                                        <input type="text" id="txtCodClie" class="form-control">    
                                    </div>
                                    <div class="col-3">
                                        <input type="text" id="txtNitClie" class="form-control">
                                    </div>
                                </div>      
                            </div>
                            
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-2">
                                        <label>Dirección:<label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="txtDirClie" class="form-control">
                                    </div>
                                </div>                                
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-2">
                                        <label>Teléfono:<label>    
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="txtTelClie" class="form-control">
                                    </div>
                                </div>                               
                            </div>
                        </div>    
                        
                    </div>

                        <div class="card">
                            <div class="mapcontainer" id="mapcontainer"></div>    
                        </div>
                        
                        
                        <div class="modal-body text-center">
                        
                            
                            <div class="icon-stack fa-6x mr-4 mb-0">
                                <button class="btn btn-lg btn-danger" id="btnCerrarModalCliente">
                                    CANCELAR
                                </button>
                            </div>
                            <div class="icon-stack fa-6x mr-4 mb-0"></div>
                            <div class="icon-stack fa-6x mr-4 mb-0">
                                <button class="btn btn-lg btn-success" id="btnVenderCliente">
                                    VENDER
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.encabezado() + view.listaclientes() + view.modalMenuCliente();
    

};

function Lmap(lat,long,nombre,telefono){
    //INICIALIZACION DEL MAPA
          //let map;
            
          var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          osm = L.tileLayer(osmUrl, {center: [lat, long],maxZoom: 20, attribution: osmAttrib});    
          map = L.map('mapcontainer').setView([lat, long], 18).addLayer(osm);

          L.marker([lat, long])
            .addTo(map)
            .bindPopup(nombre + ' - ' + telefono)

          return map;
};

function getMenuCliente(codigo,nombre,direccion,telefono,lat,long,nit){
    console.log(lat + ' ' + long);
    //map.remove()
    map = Lmap(lat,long,nombre,telefono);

    document.getElementById('lbNombreCliente').innerHTML = nombre;
    document.getElementById('txtCodClie').value = codigo;
    document.getElementById('txtNitClie').value = nit;
    document.getElementById('txtDirClie').value = direccion;
    document.getElementById('txtTelClie').value = telefono;
    
    GlobalSelectedCodCliente = codigo;
    GlobalSelectedNomCliente = nombre;
    GlobalSelectedDirCliente = direccion;
    
    $('#modalMenuCliente').modal('show',function(){
        //aca puedo meterle focus a algún control
    });

};

function addListeners(){

    //handler del dia de la semana
    let cmbDiaVisita = document.getElementById('cmbDiaVisita');
    cmbDiaVisita.innerHTML = funciones.ComboSemana("LETRAS");
       
    let btnCargarClientes = document.getElementById('btnCargarClientes');
    btnCargarClientes.addEventListener('click',async()=>{
        await api.clientesVendedor(GlobalCodSucursal,GlobalCodUsuario,cmbDiaVisita.value,'tblClientes')
    });
    
    let f = new Date();
    cmbDiaVisita.value = funciones.getDiaSemana(f.getDay());

    btnCargarClientes.click();

    let btnCerrarModalCliente = document.getElementById('btnCerrarModalCliente');
    btnCerrarModalCliente.addEventListener('click',()=>{
        $("#modalMenuCliente").modal('hide');
        map.remove();
    });

    let btnVenderCliente = document.getElementById('btnVenderCliente');
    btnVenderCliente.addEventListener('click',()=>{
        $("#modalMenuCliente").modal('hide');
        classNavegar.ventas(GlobalSelectedCodCliente,GlobalSelectedNomCliente,GlobalSelectedDirCliente);
    });

    let txtFiltrarCliente = document.getElementById('txtFiltrarCliente');
    txtFiltrarCliente.addEventListener('keyup',(e)=>{
        funciones.FiltrarTabla('tblLista','txtFiltrarCliente');
    })

};

function inicializarVista(){
    getView();
    addListeners();
};