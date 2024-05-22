(()=>{
    //valor de void significa vacio!
    //Usado para especificar que mi funcion no regresa nada 
    function callBatman():void {
        return; //no regrresa nada "void"
    };

    const callSuper = ():void => {
        return;
    }

    const a = callBatman();
    console.log(a);
    
    
})()