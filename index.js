// Code your solution in this file!

let returnFirstTwoDrivers = function(arrayOfDrivers) {
    let firstTwoDrivers = []
 
    for (let index = 0; index < arrayOfDrivers.length; index++) {
        if (index <= 1) {
            firstTwoDrivers.push(arrayOfDrivers[index])
        }
    }

    return firstTwoDrivers
}

function returnLastTwoDrivers(arrayOfDrivers) {
    let lastTwoDrivers = []

    for (let index = arrayOfDrivers.length - 2; index < arrayOfDrivers.length; index++) {
        lastTwoDrivers.push(arrayOfDrivers[index])
    }
    return lastTwoDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    const fareMultiplier = function (fare) {
        return fare * multiplier
    }

    return fareMultiplier
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}