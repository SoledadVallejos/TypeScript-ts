(()=>{
  
  // Objetos
  
  type Carro = {
    carroceria: string,
    modelo: string
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void // function q no retorna nada - opcional
  
  }
  const batimovil: Carro = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  
  const bumblebee: Carro = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  
  type Villa = {
    nombre: string,
    edad: number | undefined,
    mutante: boolean,
  }
  
  const villanos: Villa[]  = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  
  type Charles = {
    poder: string,
    estatura: number
  }
  
  const charles: Charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
   type Apocalipsis = {
    lider: boolean,
    miembros: string[]
   }
  
  const apocalipsis: Apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Charles | Apocalipsis // mystique tiene q tener los 2 tipos
  
  mystique = charles;
  mystique = apocalipsis;
  
  // ¿El siguiente código de TypeScript es válido?
  
  /* let mutable: [string | string[] ];
   
  mutable = ["Hola","Hola"];
  mutable = "hola"; */
  
  // FALSO --> Si te fijas, en la declaración estamos diciendo que es una "Tupla" y no una unión de tipos, recuerda que la unión de tipos no lleva llaves cuadradas.
  
  
  // Multiples tipos
  let mutable: number | string[];
  
  mutable = ["Adios","Hola"];
  mutable = 123;
  
  

})
