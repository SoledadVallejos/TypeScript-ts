(()=>{
    //never , no debe de terminar exitosamente. Una vez q lee ese never el codigo deja de ejecutarse

    const error = ( message: string):never =>{ //nunca regresa nada o "revienta ante un error"
        throw new Error(message)
    }

    error('Auxilio');

})()