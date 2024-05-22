(()=> {

    //clases

    class Avenger {
        //creo un contructor padre
        constructor( name = 'No name', power = 0 ) {
            this.name = name;
            this.power = power;
        }

    }

    class FlyingAvenger extends Avenger { // extiendo del constructor padre

        constructor( name, power ) {
            super( name, power );// llamo al constructor del padre y paso data del padre 
            this.flying = true;
        }
    }




    const hulk = new Avenger('Hulk', 9001 );
    const falcon = new FlyingAvenger('Falcon', 50 );

    console.log( hulk  );
    console.log( falcon );

})()