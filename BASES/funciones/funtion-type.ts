(()=>{

    const addNumbers = ( a: number, b: number) => a +b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    //let myFunction: Function; // de tipo funcion

    
    let myFunction: (x:number, y:number) => number // funcion de type number
    myFunction = addNumbers; // asigno , no ejecuto
    console.log(myFunction(1,2));

/*     let myFunction: (x:string) => string // funcion de type string
    myFunction = greet;
    console.log(myFunction('Pritty')); */

    
   /*  let myFunction: () => string // funcion de type string
    myFunction = saveTheWorld;
    console.log(myFunction); */
    
})()