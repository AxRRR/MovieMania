export function getAge(ageToGet, yearOfDeath = null){
    let sendYear = null;

    // If the Actor is dead... we change the operation.
    if(yearOfDeath !== null){
        sendYear = yearOfDeath - ageToGet;
    }
    // If still alive...
    else{
        const CurrentDate = new Date();
        const CurrentYear = CurrentDate.getFullYear();

        sendYear = CurrentYear - ageToGet;
    }
    return sendYear;
}