(()=>{

    let avanger: any = 123;
    let exists;
    let power;

    avanger = 'Dr Pitufo';
    // console.log(avanger.charAt(0));
    console.log(( avanger as string).charAt(0)); //o trata cmo string pero no lo declara cmo tal, sigue siendo any

    avanger = 123.3456743;
    console.log( (<number>avanger).toFixed(2)); // casteo cmo number, simil al as

    console.log(exists);
    console.log(power);
    
})()