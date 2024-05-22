(()=>{

    // el signo "?" significa que es opcional

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No data'}`
    }

    const name = fullName('Tony');
    console.log(name);
    
})()