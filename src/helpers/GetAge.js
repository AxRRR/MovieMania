export function getAge(ageToGet, yearOfDeath = null){
    let sendAge = null;

    // If the Actor is dead... we change the operation.
    if(yearOfDeath !== null){
        sendAge = yearOfDeath - ageToGet;
    }
    // If still alive...
    else{
        const CurrentDate = new Date();
        const CurrentYear = CurrentDate.getFullYear();

        sendAge = CurrentYear - ageToGet;
    }
    return sendAge;
}