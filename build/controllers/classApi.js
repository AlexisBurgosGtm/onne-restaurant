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
    insertTempComanda: async(idmesa,codprod,desprod,codmedida,cantidad,equivale,costo,precio,exento,obs,cuenta,codempleado)=>{
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
                cuenta:cuenta,
                codempleado:codempleado
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
                        btnOpciones = `<button class="btn btn-md btn-circle btn-warning hand shadow" onclick="getProductoPedidoOpciones(${rows.ID},${rows.COSTO},${rows.PRECIO},${rows.CANTIDAD},${rows.EQUIVALE})">
                                            <i class="fal fa-edit"></i>
                                        </button>`;
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
                                    <small><b class="${classST}">${st}</b></small>
                                    <br>
                                    <small class="negrita">${rows.OBS}</small>
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
            GlobalTotalCosto = totalc;
            GlobalTotalVenta = totalp;
        }, (error) => {
            funciones.AvisoError('Error en la solicitud');
            lbtotal.innerText = 'Q 0.00';
            GlobalTotalCosto = 0;
            GlobalTotalVenta = 0;
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
    getCorrelativo: (coddoc)=>{
        
        return new Promise((resolve,reject)=>{
            axios.post('/tipodocumentos/correlativo', {
                sucursal:GlobalSucursal,
                coddoc:coddoc
            })
            .then((response) => {
                const data = response.data.recordset;
                if(response.data.rowsAffected[0]==1){
                    let correlativo =0;
                    data.map((r)=>{
                        correlativo = Number(r.CORRELATIVO);
                    })
                        resolve(correlativo);
                }else{reject(0);}

                
            }, (error) => {
                funciones.AvisoError('Error en la solicitud');
                reject(0);
            });

        })

    }
}