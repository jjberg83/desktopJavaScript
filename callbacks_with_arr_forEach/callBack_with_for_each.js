// FIRST EXAMPLE: CALLBACK WITH ANYNOMOUS FUNCTION
let klubber = ["Liverpool", "Manchester City", "Leicester City"];

klubber.forEach(function(klubbene, plassering) {
    console.log(`${klubbene} is placed ${plassering + 1}. in the Premier League`);
});

// SECOND EXAMPLE: CALLBACK WITH FUNCTION DEFINED OUTSIDE

let people = ["Mike", "Stacy", "Andy", "Rick"];

people.forEach(numberFriends);

function numberFriends(friends, index) {
    console.log(`${index + 1}. ${friends}`);
}

// NOTHING TO DO WITH CALLBACKS REALLY, JUST LEARNING ABOUT THE FOR_VAR_IN LOOP
let trykkerier = {
    1: "Printers",
    2: "Kort og Godt",
    3: "AllKopi/Netprint",
}

function sjekkObjekt(objektet) {
    for (var forsteDel in objektet) { // THIS IS WHAT I REFER TO AS FOR_VAR_IN LOOP
        console.log(forsteDel + ":_" + objektet[forsteDel]);
    }
}

sjekkObjekt(trykkerier);