let classEmpleados = {
    comboboxVendedores : async(idContainer)=>{
        return new Promise((resolve, reject) => {
            let combobox = document.getElementById(idContainer);
        
            let str = ""; 
            axios.get('/empleados/vendedores?empnit=' + GlobalEmpnit + '&app=' + GlobalSistema)
            .then((response) => {
                const data = response.data;        
                data.recordset.map((rows)=>{
                    str += `<option value="${rows.CODVEN}">${rows.NOMVEN}</option>`
                })            
                combobox.innerHTML = str;
               resolve(); 
            }, (error) => {
                reject();
            });
        });
    }

}