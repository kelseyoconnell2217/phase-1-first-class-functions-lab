const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    const fareMultiplier = function(fare){
        return multiplier * fare
    }
    return fareMultiplier;
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, theFunction){
    return theFunction(arrayOfDrivers)
}