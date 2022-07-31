let funciones = {
  shareAppWhatsapp: ()=>{
    let url= window.location.origin
    swal({
      text: 'Escriba el número a donde se enviará:',
      content: "input",
      button: {
        text: "Whatsapp",
        closeModal: true,
      },
    })
    .then(numero => {
      if (!numero) throw null;
        let stn = '502' + numero.toString();
        let msg = encodeURIComponent(`Onne Restaurant`);
            window.open('https://api.whatsapp.com/send?phone='+numero+'&text='+msg+url)
    })   

},
  convertDateNormal(date) {
    const [yy, mm, dd] = date.split(/-/g);
    return `${dd}/${mm}/${yy}`.replace('T00:00:00.000Z', '');
  },
  imprimirSelec:(nombreDiv)=>{
    var contenido= document.getElementById(nombreDiv).innerHTML;
    var contenidoOriginal= document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
  },
  shareApp:async()=>{
    const shareData = {
      title: 'MERCADOS EFECTIVOS',
      text: `App para Vendedor ()`,
      url: window.location.origin
    }

    try {
        await navigator.share(shareData)
        //resultPara.textContent = 'MDN shared successfully'
    } catch(err) {
        //resultPara.textContent = 'Error: ' + err
        console.log('Error al compartir: ' + err);
    }
  },
  GetDataNit: async (idNit,idCliente,idDireccion)=>{

    return new Promise((resolve, reject) => {
      let nit = document.getElementById(idNit).value;                    
      let url = 'https://free.feel.com.gt/api/v1/obtener_contribuyente';
      
      axios.post(url,{nit: nit})
      .then((response) => {
          let json = response.data;
          console.log(response.data);
          
          //document.getElementById(idCliente).value = json.descripcion;
          //document.getElementById(idDireccion).value = json.direcciones.direccion;    

          resolve(json);
      }, (error) => {
          console.log(error);
          reject();
      });



    });

  },
  instalationHandlers: (idBtnInstall)=>{
    //INSTALACION APP
    let btnInstalarApp = document.getElementById(idBtnInstall);
    btnInstalarApp.hidden = true;

    let capturedInstallEvent;
    window.addEventListener('beforeinstallprompt',(e)=>{
      e.preventDefault();
      btnInstalarApp.hidden = false;
      capturedInstallEvent = e;
    });
    btnInstalarApp.addEventListener('click',(e)=>{
      capturedInstallEvent.prompt();
    capturedInstallEvent.userChoice.then((choice)=>{
        //solicita al usuario confirmacion para instalar
    })
  })
  //INSTALACION APP
  },
  Confirmacion: function(msn){
      return swal({
          title: 'Confirme',
          text: msn,
          icon: 'warning',
          buttons: {
              cancel: true,
              confirm: true,
            }})
  },
  Aviso: function(msn){
      swal(msn, {
          timer: 1500,
          icon: "success",
          buttons: false
          });

      try {
          navigator.vibrate(500);
      } catch (error) {
          
      }
  },
  AvisoError: function(msn){
      swal(msn, {
          timer: 1500,
          icon: "error",
          buttons: false
          });
      try {
          navigator.vibrate([100,200,500]);
      } catch (error) {
          
      }
  },
  FiltrarListaProductos: function(idTabla){
      swal({
        text: 'Escriba para buscar...',
        content: "input",
        button: {
          text: "Buscar",
          closeModal: true,
        },
      })
      .then(name => {
        if (!name) throw null;
          funciones.FiltrarTabla(idTabla,name);

          //'tblProductosVentas'
      })
  },
  setMoneda: function(num,signo) {
      num = num.toString().replace(/\$|\,/g, '');
      if (isNaN(num)) num = "0";
      let sign = (num == (num = Math.abs(num)));
      num = Math.floor(num * 100 + 0.50000000001);
      let cents = num % 100;
      num = Math.floor(num / 100).toString();
      if (cents < 10) cents = "0" + cents;
      for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
      return (((sign) ? '' : '-') + signo + ' ' + num + ((cents == "00") ? '' : '.' + cents)).toString();
  },
  loadScript: function(url, idContainer) {
      return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = url;
  
        script.onload = resolve;
        script.onerror = reject;
           
        document.getElementById(idContainer).appendChild(script)
      });
  },
  loadCss: function(url, idContainer) {
      return new Promise((resolve, reject) => {
        var link = document.createElement('link');
        //script.async = true;
        link.href = url;
        link.rel = "stylesheet"
  
        link.onload = resolve;
        link.onerror = reject;
           
        document.getElementById(idContainer).appendChild(link)
      });
  },
  loadView: (url, idContainer)=> {
      return new Promise((resolve, reject) => {
          
          let contenedor = document.getElementById(idContainer);

          axios.get(url)
          .then((response) => {
              contenedor.innerHTML ='';
              contenedor.innerHTML = response.data;
              resolve();
          }, (error) => {
              console.log(error);
              reject();
          });
    
        });
  },
  hablar: function(msn){
      var utterance = new SpeechSynthesisUtterance(msn);
      return window.speechSynthesis.speak(utterance); 
  },
  crearBusquedaTabla: function(idTabla,idBusqueda){
  var tableReg = document.getElementById(idTabla);
  var searchText = document.getElementById(idBusqueda).value.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
 
    // Recorremos todas las filas con contenido de la tabla
      for (var i = 1; i < tableReg.rows.length; i++)
              {
                cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                  found = false;
                  // Recorremos todas las celdas
                  for (var j = 0; j < cellsOfRow.length && !found; j++)
                  {
                    compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
                }
            }
  },
  FiltrarTabla: function(idTabla,idfiltro){
  var tableReg = document.getElementById(idTabla);
  let filtro = document.getElementById(idfiltro).value;

  var searchText = filtro.toLowerCase();
    var cellsOfRow="";
    var found=false;
    var compareWith="";
 
    // Recorremos todas las filas con contenido de la tabla
      for (var i = 1; i < tableReg.rows.length; i++)
              {
                cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                  found = false;
                  // Recorremos todas las celdas
                  for (var j = 0; j < cellsOfRow.length && !found; j++)
                  {
                    compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
                }
            }
      //funciones.scrollUp(1000, 'easing');
  },
  OcultarRows: function(idTabla){
  var tableReg = document.getElementById(idTabla);
      // Recorremos todas las filas con contenido de la tabla
      for (var i = 1; i < tableReg.rows.length; i++)
      {
          if(i>15){
              tableReg.rows[i].style.display = 'none';
          }
      }
  },
  NotificacionPersistent : (titulo,msn)=>{

  function InicializarServiceWorkerNotif(){
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () =>
     navigator.serviceWorker.register('sw.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed'));
    };
    
    requestPermission();
  }
  
  if ('Notification' in window) {};
  
  function requestPermission() {
    if (!('Notification' in window)) {
      alert('Notification API not supported!');
      return;
    }
    
    Notification.requestPermission(function (result) {
      //$status.innerText = result;
    });
  }

  InicializarServiceWorkerNotif();
  
  const options = {
      body : titulo,
      icon: "../favicon.png",
      vibrate: [1,2,3],
    }
    //image: "../favicon.png",
       if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
        console.log('Persistent Notification API not supported!');
        return;
      }
      
      try {
        navigator.serviceWorker.getRegistration()
          .then(reg => 
                  reg.showNotification(msn, options)
              )
          .catch(err => console.log('Service Worker registration error: ' + err));
      } catch (err) {
        console.log('Notification API error: ' + err);
      }
    
  },
  limpiarTexto: (texto) =>{
    var ignorarMayMin = true;
    var reemplazarCon = " pulg";
    var reemplazarQue = '"';
    reemplazarQue = reemplazarQue.replace(/[\\^$.|?*+()[{]/g, "\\$&"),
    reemplazarCon = reemplazarCon.replace(/\$(?=[$&`"'\d])/g, "$$$$"),
    modif = "g" + (ignorarMayMin ? "i" : ""),
    regex = new RegExp(reemplazarQue, modif);
    return texto.replace(regex,reemplazarCon);
  },
  ObtenerUbicacion: async(idlat,idlong)=>{
  let lat = document.getElementById(idlat);
  let long = document.getElementById(idlong);
  
  try {
      navigator.geolocation.getCurrentPosition(function (location) {
          lat.innerText = location.coords.latitude.toString();
          long.innerText = location.coords.longitude.toString();
      })
  } catch (error) {
      funciones.AvisoError(error.toString());
  }
  },
  ComboSemana :(letnum)=>{
    let str = '';
    if(letnum=="LETRAS"){
      str =  `<option value="LUNES">LUNES</option>
              <option value="MARTES">MARTES</option>
              <option value="MIERCOLES">MIERCOLES</option>
              <option value="JUEVES">JUEVES</option>
              <option value="VIERNES">VIERNES</option>
              <option value="SABADO">SABADO</option>
              <option value="DOMINGO">DOMINGO</option>
              `
    }else{
      str =  `<option value="1">LUNES</option>
              <option value="2">MARTES</option>
              <option value="3">MIERCOLES</option>
              <option value="4">JUEVES</option>
              <option value="5">VIERNES</option>
              <option value="6">SABADO</option>
              <option value="7">DOMINGO</option>
              `
    };

    return str;
    
  },
  getDiaSemana:(numdia)=>{
    switch (numdia) {
      case 0:
        return 'DOMINGO';
        break;
      case 1:
        return 'LUNES';
        break;
      case 2:
        return 'MARTES';
        break;
      case 3:
        return 'MIERCOLES';
        break;
      case 4:
        return 'JUEVES';
        break;
      case 5:
        return 'VIERNES';
        break;
      case 6:
        return 'SABADO';
        break;
    
      default:
        break;
    }
  },
  ComboMeses: ()=>{
  let str =`<option value='1'>Enero</option>
            <option value='2'>Febrero</option>
            <option value='3'>Marzo</option>
            <option value='4'>Abril</option>
            <option value='5'>Mayo</option>
            <option value='6'>Junio</option>
            <option value='7'>Julio</option>
            <option value='8'>Agosto</option>
            <option value='9'>Septiembre</option>
            <option value='10'>Octubre</option>
            <option value='11'>Noviembre</option>
            <option value='12'>Diciembre</option>`
  return str;
  },
  ComboAnio: ()=>{
  let str =`<option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
            <option value='2025'>2025</option>
            <option value='2026'>2026</option>
            <option value='2027'>2027</option>
            <option value='2028'>2028</option>
            <option value='2029'>2029</option>
            <option value='2030'>2030</option>`
  return str;
  },
  getFecha(){
    let fecha
    let f = new Date(); let d = f.getDate(); let m = f.getUTCMonth()+1; let y = f.getFullYear();
   
    di = d;
    var D = '0' + di;
    let DDI 
    if(D.length==3){DDI=di}else{DDI=D}
    
    ma = m;
    var MA = '0' + ma;
    let DDM 
    if(MA.length==3){DDM=ma}else{DDM=MA}


    fecha = y + '-' + DDM + '-' + DDI;
    return fecha;
  },
  quitarCaracteres: ( texto, reemplazarQue, reemplazarCon, ignorarMayMin) =>{
    var reemplazarQue = reemplazarQue.replace(/[\\^$.|?*+()[{]/g, "\\$&"),
    reemplazarCon = reemplazarCon.replace(/\$(?=[$&`"'\d])/g, "$$$$"),
    modif = "g" + (ignorarMayMin ? "i" : ""),
    regex = new RegExp(reemplazarQue, modif);
    return texto.replace(regex,reemplazarCon);
  },
  devuelveFecha: (idInputFecha)=>{
    let fe = new Date(document.getElementById(idInputFecha).value);
    let ae = fe.getFullYear();
    let me = fe.getUTCMonth()+1;
    let de = fe.getUTCDate() 
    let fret = ae + '-' + me + '-' + de;
    return fret;
  },
  modalCantidad:(idContainer)=>{
    let container = document.getElementById(idContainer)
    const v = `
    <div class="modal fade" id="ModalCantidad" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <label class="modal-title text-danger h3" id="">Nueva Cantidad</label>
                    <button class="btn btn-danger btn-md" align="right" id="btnCalcEliminarItem">
                      <i class="fal fa-trash-alt"></i>
                      Quitar item
                    </button>
                </div>

                <div class="modal-body">

                    <div class="row">
                        <div class="col-2">
                            <h1 class="text-danger fw-700">Cant:</h1>
                        </div>
                        <div class="col-8 text-center">
                            <h1 class="text-danger fw-700" id="lbCalcTotal">0</h1>
                        </div>
                        <div class="col-2"></div>
                    </div>
                    
                    <br>

                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc1">1</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc2">2</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc3">3</button>
                        </div>
                    </div>
                    
                    <br>

                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc4">4</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc5">5</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc6">6</button>
                        </div>
                    </div>
                    
                    <br>

                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc7">7</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc8">8</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc9">9</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-4">
                    
                        </div>
                        <div class="col-4">
                            <button class="btn btn-xl btn-circle btn-info" id="btnCalc0">0</button>
                        </div>
                        <div class="col-4">
                    
                        </div>
                    </div>

                    <br><br><br>

                    <div class="row">
                        <div class="col-4">
                            <button class="btn btn-danger btn-md" id="btnCalcCancelar">Cancelar</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary btn-md" id="btnCalcLimpiar">Limpiar</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-success btn-md" id="btnCalcAceptar">Aceptar</button>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </div>
    </div>
    `
    container.innerHTML = v;
    //inicia los listeners
    let total = document.getElementById('lbCalcTotal');
    total.innerText = "";
    let btnCalcAceptar = document.getElementById('btnCalcAceptar');
    let btnCalcLimpiar = document.getElementById('btnCalcLimpiar');
    let btnCalcCancelar = document.getElementById('btnCalcCancelar');
    let btnCalcEliminarItem = document.getElementById('btnCalcEliminarItem');

    let b0 = document.getElementById('btnCalc0');
    let b1 = document.getElementById('btnCalc1');
    let b2 = document.getElementById('btnCalc2');
    let b3 = document.getElementById('btnCalc3');
    let b4 = document.getElementById('btnCalc4');
    let b5 = document.getElementById('btnCalc5');
    let b6 = document.getElementById('btnCalc6');
    let b7 = document.getElementById('btnCalc7');
    let b8 = document.getElementById('btnCalc8');
    let b9 = document.getElementById('btnCalc9');

    b0.addEventListener('click',()=>{total.innerText = total.innerText + "0"})
    b1.addEventListener('click',()=>{total.innerText = total.innerText + "1"})
    b2.addEventListener('click',()=>{total.innerText = total.innerText + "2"})
    b3.addEventListener('click',()=>{total.innerText = total.innerText + "3"})
    b4.addEventListener('click',()=>{total.innerText = total.innerText + "4"})
    b5.addEventListener('click',()=>{total.innerText = total.innerText + "5"})
    b6.addEventListener('click',()=>{total.innerText = total.innerText + "6"})
    b7.addEventListener('click',()=>{total.innerText = total.innerText + "7"})
    b8.addEventListener('click',()=>{total.innerText = total.innerText + "8"})
    b9.addEventListener('click',()=>{total.innerText = total.innerText + "9"})
    btnCalcLimpiar.addEventListener('click',()=>{total.innerText = ""})

    btnCalcAceptar.addEventListener('click',async ()=>{
        let n = Number(total.innerText);
        
        fcnUpdateRowPedido(GlobalSelectedId,GlobalSelectedCosto,GlobalSelectedPrecio,GlobalSelectedEquivale,n);
        
        total.innerText = "";
        
        $("#ModalCantidad").modal('hide');
    })

    btnCalcCancelar.addEventListener('click',()=>{
        $("#ModalCantidad").modal('hide');
    });

    btnCalcEliminarItem.addEventListener('click',()=>{
      funciones.Confirmacion('¿Está seguro que desea Eliminar Este Item?')
      .then((value)=>{
        if(value==true){
          fcnDeleteRowPedido(GlobalSelectedId);
          $("#ModalCantidad").modal('hide');
        }
      })
    });

  },
  solicitarClave: function(){
    return new Promise((resolve,reject)=>{
        swal({
          text: 'Escriba su contraseña de usuario',
          content: {
            element: "input",
            attributes: {
              placeholder: "Escribe tu contraseña",
              type: "password",
            },
          },
          button: {
            text: "Verificar",
            closeModal: true,
          },
        })
        .then(name => {
          if (!name) throw null;
              resolve(name);
        })
        .catch(()=>{
          reject('no');
        })
    })     
  },
  getHora:()=>{
    let hoy = new Date();
    let hora = hoy.getHours();
    let minuto = hoy.getMinutes();
    return `${hora.toString()}:${minuto.toString()}`;
  },
  slideAnimationTabs: ()=>{
      //inicializa el slide de las tabs en censo
      $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
          var $old_tab = $($(e.target).attr("href"));
          var $new_tab = $($(e.relatedTarget).attr("href"));

          if($new_tab.index() < $old_tab.index()){
              $old_tab.css('position', 'relative').css("right", "0").show();
              $old_tab.animate({"right":"-100%"}, 300, function () {
                  $old_tab.css("right", 0).removeAttr("style");
              });
          }
          else {
              $old_tab.css('position', 'relative').css("left", "0").show();
              $old_tab.animate({"left":"-100%"}, 300, function () {
                  $old_tab.css("left", 0).removeAttr("style");
              });
          }
      });

      $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
          var $new_tab = $($(e.target).attr("href"));
          var $old_tab = $($(e.relatedTarget).attr("href"));

          if($new_tab.index() > $old_tab.index()){
              $new_tab.css('position', 'relative').css("right", "-2500px");
              $new_tab.animate({"right":"0"}, 500);
          }
          else {
              $new_tab.css('position', 'relative').css("left", "-2500px");
              $new_tab.animate({"left":"0"}, 500);
          }
      });

      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          // your code on active tab shown
      });
  }
};

//export default funciones;