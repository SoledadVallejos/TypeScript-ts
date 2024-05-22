(()=>{

    // el signo "upper" es obligatorio y no puede ser seguido de de un opcional 

    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        
        if (upper) {
            return `${firstName} ${lastName || 'No data'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'No data'}`
        }
    }

    const name = fullName('Tony', 'El gordo', true);
    console.log(name);
    
})()