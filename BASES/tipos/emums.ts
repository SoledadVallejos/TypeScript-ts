(()=>{
    //enumeraciones

    enum AudioLevel {
        min, 
        medium,
        max = 10 //puedo asignarle un valor, sino lo toma z como se lee un array [0] [1] [2]
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);
    
    
})()