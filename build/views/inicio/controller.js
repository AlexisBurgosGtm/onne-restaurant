function InicializarVista(){

    document.getElementById('txtNomEmpresa').innerText = GlobalEmpNombre;
    
    let btnInicioVentas = document.getElementById('btnInicioVentas');
    let btnInicioDespacho = document.getElementById('btnInicioDespacho');
    let btnInicioCaja =  document.getElementById('btnInicioCaja');
    let txtPass = document.getElementById('txtPass');
    

    btnInicioVentas.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'VENTAS';
      
    });
    btnInicioDespacho.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'DESPACHO';
       
    });
    btnInicioCaja.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'CAJA';
      
    });

    let imgInicioVentas = document.getElementById('imgInicioVentas');
    let imgInicioDespacho = document.getElementById('imgInicioDespacho');
    let imgInicioCaja =  document.getElementById('imgInicioCaja');

    imgInicioVentas.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'VENTAS';
      
    });
    imgInicioDespacho.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'DESPACHO';
        
    });
    imgInicioCaja.addEventListener('click',()=>{
        $('#ModalLogin').modal('show');
        GlobalSelectedApp = 'CAJA';
      
    });


    let btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click',async ()=>{
        await getLogin(txtPass.value,GlobalSelectedApp);
    });

    txtPass.addEventListener('keyup',(e)=>{
        if(e.code=='Enter'){
            btnLogin.click();
        }
        if(e.code=='NumpadEnter'){
            btnLogin.click();
        }
    });

};

