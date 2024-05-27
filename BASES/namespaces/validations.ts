
namespace Validations {
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false
    }

    export const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf() )) ? false : true;
    }
}

console.log(Validations.validateText('fer'));


// La idea d elos namespace --> tener agrupado todo lo que se cree
