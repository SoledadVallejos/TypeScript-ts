(()=>{
    

    let flash: {name: string, age?: number, powers: string[], getName?: () => string }= { // F no recibe argumento y retorn a string y es opcional
        name: 'Pritty Rubio',
        age: 7,
        powers: ['Dormilon', 'Comelon','Amasador'],
    }

     flash = {
        name: 'Pitito',
        //age: 7.0,
        powers: ['Amasador'],
        getName(){            
            return this.name
        }
    }

    console.log(flash);
    

})()