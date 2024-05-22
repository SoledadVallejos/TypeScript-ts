(()=>{

    type Hero = { 
        name : string;
        age? : number;
        powers: string[];
        getName?: () => string; 
    }    

   // las variables pueden ser de varios tipos y tambien de un tipo personaliado que se haya creado en este caso Hero

   let myCustomVariable: (string |number | Hero) = 'Fernando';
   console.log(typeof myCustomVariable);

   myCustomVariable = 20;
   console.log(typeof myCustomVariable);


   myCustomVariable = {
    name : 'Mendy',
    age: 4,
    powers: ['Naranja', 'Comelona']
   }
   console.log(typeof myCustomVariable);

   console.log(myCustomVariable);



})()