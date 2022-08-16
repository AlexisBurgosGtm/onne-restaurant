function getView(){

    let view = {
        body:()=>{
            return `
                <div class="row">



                </div>
            
            `
        }
    }

    root.innerHTML = view.body();

    
};

function addListeners(){


};


function initView(){

    getView();
    addListeners();

};


