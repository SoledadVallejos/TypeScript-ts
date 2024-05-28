// Con la letra T defino que es un tipo de dato generico

// Basada de la informaicon de entrada , tendre la misma informacion de saliad

export const printObject = ( argument: any ) => {
    console.log( argument )
}


export function genericFunction<T>( argument: T ):T { // recibe algo d etipo y devuelve algo de tipo
    return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;