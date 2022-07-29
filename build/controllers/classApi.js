let api = {
    getEmpresas:async(idContainer)=>{
        return new Promise((resolve,reject)=>{
            let container = document.getElementById(idContainer);
            container.innerHTML = GlobalLoader;
            
            let strdata = '';
    
            axios.post('/empleados/empresas', {  
                sucursal: GlobalSucursal
            })
            .then((response) => {
                const data = response.data.recordset;
                data.map((rows)=>{
                        strdata = strdata + `<option value='${rows.EMPNIT}'>${rows.NOMBRE}`
                })
                container.innerHTML = strdata;
                resolve();
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                strdata = '';
                reject();
            });  
        })
    },
    x_getMeseros: async(idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
            
        let strdata = '';

        axios.post('/empleados/vendedores', {  
            sucursal: GlobalSucursal
        })
        .then((response) => {
            const data = response.data.recordset;
            data.map((rows)=>{
                    strdata = strdata + `
                <div class="col-sm-6 col-xl-3">
                    <div class="p-3 bg-info-300 rounded overflow-hidden position-relative text-white mb-g"  onclick="getClaveMesero('${rows.NOMBRE}','${rows.CLAVE}');">
                        <div class="">
                            <h3 class="display-6 d-block l-h-n m-0 fw-500">
                                ${rows.NOMBRE}
                                <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                            </h3>
                        </div>
                        <i class="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                    </div>
                </div>
                    `
            })
            container.innerHTML = strdata;

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');

        });  
    },
    x_getMesas: async(idContainer)=>{
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
                <div class="col-sm-6 col-xl-3 col-md-3 col-lg-3">
                    <div class="card card-rounded shadow  bg-${color}-300 hand"><div class="card-body">
                        <div class="p-3 rounded overflow-hidden position-relative text-white mb-g" onclick="selectMesa(${rows.ID},'${rows.NOMBRE}');">
                            <div class="">
                                <h3 class="display-6 d-block l-h-n m-0 fw-500">
                                    ${rows.NOMBRE}
                                    <small class="m-0 l-h-n">Código: ${rows.CODIGO}</small>
                                </h3>
                            </div>
                            <i class="fal fa-comment position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1" style="font-size:6rem"></i>
                        </div>
                    </div></div>
                </div>
                    `
            })
            container.innerHTML = strdata;

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');

        });  
    },
    getComandaProductos: async(idContainer)=>{
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
            
        let strdata = '';

        axios.post('/comandas/productos', {  
            sucursal: GlobalSucursal
        })
        .then((response) => {
            const data = response.data.recordset;
            data.map((rows)=>{
                strdata = strdata + `
                    <tr>
                        <td>${rows.DESPROD}<br>
                            <small class="text-info">${rows.DESPROD2}</small>
                        </td>
                        <td class="">
                            <b>${funciones.setMoneda(rows.PRECIO,'Q')}</b>
                            <br>
                            <small class="text-danger"><b>${rows.CODMEDIDA}</b></small>
                        </td>
                        <td>
                            <button class="btn btn-md btn-info btn-circle" onclick="addProduct('${rows.CODPROD}','${rows.DESPROD}','${rows.CODMEDIDA}',${rows.EQUIVALE},${rows.COSTO},${rows.PRECIO})">
                                +
                            </button>
                        </td>
                    </tr>
                    `
            })
            container.innerHTML = strdata;

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');

        });  
    },
    insertTempComanda: async(idmesa,codprod,desprod,codmedida,cantidad,equivale,costo,precio,exento,obs,cuenta)=>{
        let totalunidades = Number(cantidad) * Number(equivale);
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/agregarproducto', {
                empnit:GlobalSucursal,
                usuario:GlobalUser,
                coddoc:'COMANDA',
                idmesa:idmesa,
                codprod:codprod,
                desprod:desprod,
                codmedida:codmedida,
                cantidad:cantidad,
                equivale:equivale,
                totalunidades:totalunidades,
                costo:costo,
                precio:precio,
                totalcosto:costo,
                totalprecio:precio,
                exento:exento,
                obs:obs,
                cuenta:cuenta
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    resolve('insertado');
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    },
    getTotalCuenta: async(idmesa,idLbTotal,idContainer,cuenta)=>{
       
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let lbtotal = document.getElementById(idLbTotal);
        lbtotal.innerText = '--'

        let strdata = '';
        let st = ''; let classST = '';
        let btnOpciones = '';

        axios.post('/comandas/totalcuenta', {  
            sucursal: GlobalSucursal,
            idmesa:idmesa,
            cuenta:cuenta
        })
        .then((response)=>{
            const data = response.data.recordset;
            let totalp = 0; let totalc = 0;
            data.map((rows)=>{
                switch (rows.DESPACHADO) {
                    case 'AN':
                        st = 'Pendiente de enviar'; classST ='text-info';
                        btnOpciones = `<button class="btn btn-sm btn-circle btn-warning" onclick="getProductoPedidoOpciones(${rows.ID},${rows.COSTO},${rows.PRECIO},${rows.CANTIDAD},${rows.EQUIVALE})">+</button>`;
                        break;
                    case 'NO':
                        st = 'Solicitado'; classST ='text-danger';
                        btnOpciones ='-';
                        break;
                    case 'NO':
                        st = 'Despachado'; classST ='text-success';
                        btnOpciones ='-';
                        break;    
                    default:
                        break;
                }
                
                totalp += Number(rows.TOTALPRECIO);
                totalc += Number(rows.TOTALCOSTO);
                strdata += `<tr id=${rows.ID}>
                                <td>
                                    ${rows.DESPROD}
                                    <br>
                                    <small><b class="${classST}">${st}<b></small>
                                </td>
                                <td>
                                    ${funciones.setMoneda(rows.TOTALPRECIO,'Q')}
                                    <br>
                                    <small>Cant: <b class="text-danger">${rows.CANTIDAD}<b> ${rows.CODMEDIDA} </small>
                                </td>
                                <td>
                                    ${btnOpciones}
                                </td>
                            </tr>`
            })

            lbtotal.innerText = funciones.setMoneda(totalp,'Q');
            container.innerHTML = strdata;
            if(totalp==0){
                api.statusMesa(idmesa,'NO')
            }else{
                api.statusMesa(idmesa,'SI')
            }

        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            lbtotal.innerText = 'Q 0.00'
        });  
    },
    updateTempComanda: async(id,costo,precio,cantidad,equivale,obs)=>{
        
        let totalunidades = Number(cantidad) * Number(equivale);
        let totalcosto = Number(costo) * Number(cantidad);
        let totalprecio = Number(precio) * Number(cantidad)
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/editarproducto', {
                id:id,
                cantidad:cantidad,
                totalunidades:totalunidades,
                totalcosto: totalcosto,
                totalprecio:totalprecio,
                obs:obs
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    resolve(data);
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    },
    deleteTempComanda: async(id)=>{
        
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/eliminarproducto', {
                id:id
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    resolve(data);
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    },
    solicitarComanda: async(idmesa)=>{
        
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/confirmarproductos', {
                idmesa:idmesa,
                sucursal:GlobalSucursal
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]>0){
                    resolve(data);
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    },
    statusMesa: async(idMesa,ocupada)=>{
        
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/statusmesa', {
                id:idMesa,
                ocupada:ocupada
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    console.log('mesa ocupada ' + ocupada)
                    resolve(data);
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    },
    getPedidosPendientes: async(idLbTotal,idContainer,status)=>{
       
        let container = document.getElementById(idContainer);
        container.innerHTML = GlobalLoader;
        let lbtotal = document.getElementById(idLbTotal);
        lbtotal.innerText = '--'

        let strdata = '';
        let st = ''; let classST = '';
        let btnOpciones = ``;

        axios.post('/comandas/pedidospendientes', {  
            sucursal: GlobalSucursal,
            status:status
        })
        .then((response)=>{
            const data = response.data.recordset;
            let totalp = 0; 
            data.map((rows)=>{
                totalp += 1;
                if(status=='SI'){btnOpciones='-';}else{
                    btnOpciones=`<button class="btn btn-md btn-info btn-circle"
                    onclick="getOpcionPedido(${rows.ID})">
                    +
                    </button>`
                }
                strdata += `<tr id=${rows.ID}>
                                <td>
                                    ${rows.DESPROD}
                                    <br>
                                    <small><b class="text-info">MESA: ${rows.DESMESA}<b></small>
                                </td>
                                <td>
                                    <h3 class="text-danger">${rows.CANTIDAD}</h3>
                                    <small><b class="text-danger"><b>${rows.CODMEDIDA}</b></small>
                                </td>
                                <td>
                                    ${btnOpciones}
                                </td>
                            </tr>`
            })

            lbtotal.innerText = `Items ${totalp}`;
            container.innerHTML = strdata;
            
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            lbtotal.innerText = '0'
        });  
    },
    confirmarDespacho: async(id)=>{
        
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/confirmardespacho', {
                id:id,
                sucursal:GlobalSucursal
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    resolve(data);
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    },
    solicitarCuenta: async(idMesa)=>{
        
        return new Promise((resolve,reject)=>{
            axios.post('/comandas/solicitarcuenta', {
                id:idMesa,
                sucursal:GlobalSucursal
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    resolve(data);
                }else{reject();}
                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(error);
            });

        })

    }
}