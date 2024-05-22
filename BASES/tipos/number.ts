(()=>{
    let avanger: number = 10;

    console.log(avanger);

    const villano: number = 20;

    if (avanger < villano) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }

    avanger = Number('55A');

    console.log({avanger});
    

    
})()