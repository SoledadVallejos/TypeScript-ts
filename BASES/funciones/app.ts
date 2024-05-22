(()=>{

  
//Colocar los tipos de datos

// Funciones Básicas
function sumar( a: number, b: number ): number {
  return a + b;
}

const contar = ( heroes: string[]): number => { // regresa un number pero lo heroes son de tipo string 
  return (heroes.length);
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar: boolean = true): void => { // como hay un if q lo valua se lo considera como boolean Y como no regresa nada void
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas: string, ...restPerson: string[] ): string => {
  return `${personas} ${ restPerson.join(", ")}`;
}


// Tipo funcion

const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] )=> {} // solo agrego el tipo

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n: number, s: string, b: boolean, a: string[]) => void; // void porque no devuelve nada
noHaceNadaTampoco = noHaceNada

})()
