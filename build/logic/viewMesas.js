function getView(){
    let view = {
        listado:()=>{
            return `
            <div class="row  text-center">
                <h3 class="text-danger" id="txtVendedorActivo"></h3>
            </div>
            <div class="row" id="tblMesas">
                
            </div>
            `
        },
    }

    root.innerHTML = view.listado();
};

async function addListeners(){
    let txtVendedorActivo = document.getElementById('txtVendedorActivo');
    txtVendedorActivo.innerText = GlobalUser;
    await api.getMesas('tblMesas');

};

function selectMesa(idMesa,nombreMesa){
    console.log('mesa seleccionada ' + nombreMesa);
    classNavegar.inicioComanda(idMesa,nombreMesa);
};

function iniciarMesas(){
    
    getView();
    addListeners();

};