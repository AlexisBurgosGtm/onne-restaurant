let classEmpleados = {
    comboboxVendedores : async(idContainer)=>{
        return new Promise((resolve, reject) => {
            let combobox = document.getElementById(idContainer);
        
            let str = ""; 
            axios.get('/empleados/vendedores?sucursal=' + GlobalCodSucursal)
            .then((response) => {
                const data = response.data;        
                data.recordset.map((rows)=>{
                    str += `<option value="${rows.CODIGO}">${rows.NOMBRE}</option>`
                })            
                combobox.innerHTML = str;
               resolve(); 
            }, (error) => {
                reject();
            });
        });
    }

}