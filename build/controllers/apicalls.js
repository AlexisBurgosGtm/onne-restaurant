let api = {
    empleadosLogin : (sucursal,user,pass)=>{

        axios.post('/empleados/login', {
            app:GlobalSistema,
            codsucursal: sucursal,
            user:user,
            pass:pass       
        })
        .then((response) => {
            const data = response.data.recordset;
            data.map((rows)=>{
                if(rows.USUARIO==user){
                    GlobalCodUsuario = rows.CODIGO;
                    GlobalUsuario = rows.USUARIO;
                    GlobalTipoUsuario = rows.TIPO;
                    GlobalCoddoc= rows.CODDOC;
                    GlobalCodSucursal = sucursal;
                    GlobalSistema = sucursal;
                    
                    classNavegar.inicio(GlobalTipoUsuario);
                    
                }else{
                    GlobalCodUsuario = 9999
                    GlobalUsuario = '';
                    GlobalTipoUsuario = '';
                    GlobalCoddoc= '';
                    funciones.AvisoError('Usuario o Contraseña incorrectos')
                }        
            })
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
        });

    },
    clientesVendedor: async(sucursal,codven,dia,idContenedor)=>{
    
        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let strdata = '';

        axios.post('/clientes/listavendedor', {
            app:GlobalSistema,
            sucursal: sucursal,
            codven:codven,
            dia:dia   
        })
        .then((response) => {
            const data = response.data.recordset;
            
            data.map((rows)=>{
                
                    strdata = strdata + `<tr>
                                <td>${rows.NOMCLIE}
                                    <br>
                                    <small>Cod: ${rows.CODIGO}</small>
                                </td>
                                <td>${rows.DIRCLIE}
                                    <br>
                                    <small>${rows.DESMUNI}</small>
                                </td>
                                <td>
                                    <button class="btn btn-info btn-sm btn-circle" onclick="getMenuCliente('${rows.CODIGO}','${rows.NOMCLIE}','${rows.DIRCLIE}','${rows.TELEFONO}','${rows.LAT}','${rows.LONG}','${rows.NIT}');">
                                        +
                                    </button>
                                </td>
                            </tr>`
            })
            container.innerHTML = strdata;
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
        });
        
        
    },
    pedidosVendedor: async(sucursal,codven,fecha,idContenedor,idLbTotal)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';

        let strdata = '';

        axios.post('/ventas/listapedidos', {
            app:GlobalSistema,
            sucursal: sucursal,
            codven:codven,
            fecha:fecha   
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.IMPORTE);
                    strdata = strdata + `<tr>
                                <td>
                                    ${rows.CODDOC + '-' + rows.CORRELATIVO}
                                </td>
                                <td>${rows.NOMCLIE}
                                    <br>
                                    <small>${rows.DIRCLIE + ', ' + rows.DESMUNI}</small>
                                </td>
                                <td>
                                    ${funciones.setMoneda(rows.IMPORTE,'Q')}
                                </td>
                                <td>
                                    <button class="btn btn-info btn-sm btn-circle">
                                        +
                                    </button>
                                </td>
                            </tr>`
            })
            container.innerHTML = strdata;
            lbTotal.innerText = funciones.setMoneda(total,'Q ');
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            lbTotal.innerText = 'Q 0.00';
        });
           
    },
    reporteDinero: async(sucursal,codven,anio,mes,idContenedor,idLbTotal)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';

        let strdata = '';
        let tbl = `<table class="table-responsive table-hover table-striped">
                    <thead class="bg-trans-gradient text-white"><tr>
                        <td>Fecha</td>
                        <td>Importe</td></tr>
                    <tbody>`;

        let tblfoot = `</tbody></table>`;

        axios.post('/ventas/reportedinero', {
            app:GlobalSistema,
            sucursal: sucursal,
            codven:codven,
            anio:anio,
            mes:mes   
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.TOTALVENTA);
                    strdata = strdata + `<tr>
                                            <td>
                                                ${rows.FECHA.toString().replace('T00:00:00.000Z','')}
                                            </td>
                                            <td>
                                                ${funciones.setMoneda(rows.TOTALVENTA,'Q')}
                                            </td>
                                        </tr>`
            })
            container.innerHTML = tbl + strdata + tblfoot;
            lbTotal.innerText = funciones.setMoneda(total,'Q ');
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            lbTotal.innerText = 'Q 0.00';
        });
           
    },
    reporteProductos: async(sucursal,codven,anio,mes,idContenedor,idLbTotal)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';

        let strdata = '';
        let tbl = `<table class="table-responsive table-hover table-striped">
                    <thead class="bg-trans-gradient"><tr>
                        <td>Fecha</td>
                        <td>Importe</td></tr>
                    <tbody>`;

        let tblfoot = `</tbody></table>`;

        axios.post('/ventas/reportedinero', {
            app:GlobalSistema,
            sucursal: sucursal,
            codven:codven,
            anio:anio,
            mes:mes   
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.TOTALVENTA);
                    strdata = strdata + `<tr>
                                            <td>
                                                ${rows.FECHA}
                                            </td>
                                            <td>
                                                ${funciones.setMoneda(rows.TOTALVENTA,'Q')}
                                            </td>
                                        </tr>`
            })
            container.innerHTML = tbl + strdata + tblfoot;
            lbTotal.innerText = funciones.setMoneda(total,'Q ');
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            lbTotal.innerText = 'Q 0.00';
        });
           
    },
    reporteMarcas: async(sucursal,codven,anio,mes,idContenedor,idLbTotal)=>{

        let container = document.getElementById(idContenedor);
        container.innerHTML = GlobalLoader;
        
        let lbTotal = document.getElementById(idLbTotal);
        lbTotal.innerText = '---';

        let strdata = '';
        let tbl = `<table class="table-responsive table-hover table-striped">
                    <thead class="bg-trans-gradient"><tr>
                        <td>Fecha</td>
                        <td>Importe</td></tr>
                    <tbody>`;

        let tblfoot = `</tbody></table>`;

        axios.post('/ventas/reportedinero', {
            app:GlobalSistema,
            sucursal: sucursal,
            codven:codven,
            anio:anio,
            mes:mes   
        })
        .then((response) => {
            const data = response.data.recordset;
            let total =0;
            data.map((rows)=>{
                    total = total + Number(rows.TOTALVENTA);
                    strdata = strdata + `<tr>
                                            <td>
                                                ${rows.FECHA}
                                            </td>
                                            <td>
                                                ${funciones.setMoneda(rows.TOTALVENTA,'Q')}
                                            </td>
                                        </tr>`
            })
            container.innerHTML = tbl + strdata + tblfoot;
            lbTotal.innerText = funciones.setMoneda(total,'Q ');
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            strdata = '';
            container.innerHTML = '';
            lbTotal.innerText = 'Q 0.00';
        });
           
    }
}
