function getView(){
    let view = {
        listado:()=>{
            return `
            <div class="row" id="tblMesas">
                
            </div>
            `
        },
    }

    root.innerHTML = view.listado();
};

async function addListeners(){
    //let txtVendedorActivo = document.getElementById('txtVendedorActivo');
    //txtVendedorActivo.innerText = GlobalUser;
    await getMesas('tblMesas');

};

function selectMesa(idMesa,nombreMesa){
    console.log('mesa seleccionada ' + nombreMesa);
    classNavegar.inicioComanda(idMesa,nombreMesa);
};

function iniciarMesas(){
    
    getView();
    addListeners();

};



function getMesas(idContainer){
    let container = document.getElementById(idContainer);
    container.innerHTML = GlobalLoader;
        
    let strdata = '';

    axios.post('/comandas/mesas', {  
        sucursal: GlobalSucursal
    })
    .then((response) => {
        const data = response.data.recordset;
        data.map((rows)=>{
            let color = ''; if(rows.OCUPADA=='NO'){color='success'}else{color='danger'}
                strdata = strdata + `
            <div class="col-xs-3 col-sm-3 col-xl-3 col-md-3 col-lg-3 p-2">

                <div class="card card-rounded shadow  bg-${color}-300 hand" style="font-size:60%">
                    <div class="card-body">
                        <div class="p-3 rounded overflow-hidden position-relative text-white mb-g" onclick="selectMesa(${rows.ID},'${rows.NOMBRE}');">
                            <div class="">
                                <h3 class="display-6 d-block l-h-n m-0 fw-500">
                                    ${rows.NOMBRE}
                                    <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                                </h3>
                            </div>
                            <i class="fal fa-utensils position-absolute pos-right pos-bottom opacity-70 mb-n1 mr-n1" style="font-size:4rem"></i>
                        </div>
                    </div>
                </div>

            </div>
                `
        })
        container.innerHTML = strdata;

    }, (error) => {
        funciones.AvisoError('Error en la solicitud');

    });  
}