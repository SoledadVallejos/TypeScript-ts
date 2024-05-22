(()=> {
    // rest argument , el resto de argumentos

    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName( ' John','Parket', 'Cosme', 'Fulanitoo');

    console.log(superman);
    
})()