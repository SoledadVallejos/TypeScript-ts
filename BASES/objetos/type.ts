(()=>{

    type Hero = { // obliga para poner reglas al objeto FACILITA SU USO, LA MISMA FIRMA DEL OBJETO en demas usos dek tipo
        name : string;
        age? : number;
        powers: string[];
        getName?: () => string; // F no recibe argumento y retorn a string y es opcional
    }    

    let flash: Hero = { 
        name: 'Pritty Rubio',
        age: 7,
        powers: ['Dormilon', 'Comelon','Amasador'],
    };
    
    let negrita: Hero = { 
        name: 'Coky Negrita',
        age: 7,
        powers: ['Comelona','Amasador'],
    };


})()