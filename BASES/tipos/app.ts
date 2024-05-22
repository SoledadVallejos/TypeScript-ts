(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones

  // ? enum { power = 0}

  enum fuerza {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100
  }

   const fuerzaFlash: fuerza = fuerza.flash;
   const fuerzaSuperman: fuerza = fuerza.superman;
   const fuerzaBatman: fuerza = fuerza.batman;
   const fuerzaAcuaman: fuerza = fuerza.acuaman;
 



  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada'; // regresa
  }

  function pedir_ayuda():void {
    console.log('Auxilio!!!'); //no regresa nada
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = ( poder as string).length; //castear a tipo string
  console.log(largoDelPoder);

// Enums

/* Pregunta 10:
Dada la siguiente enumeración, ¿Qué valor tiene "d"? */

enum enumeracion {
  a=10,
  b,
  c=9,
  d
}

//val d: 10 : Como "c" se iguala a 9, el siguiente valor es 10, no importa que se repita el valor de la enumeración.



})()

