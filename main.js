//function for random number
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}

//function for generate mines, choosing numbers of mine , min random number  and max random number.Default numbers of mines 5
function generateMines(maxNumberOfMines = 5,minRandomNumber,maxRandomNumber){
    var array = [];
    var numberOfIteraction = 0;
    while(array.length < maxNumberOfMines) {
        var number = generaRandom(minRandomNumber, maxRandomNumber);


        if(!array.includes(number)) {
            array.push(number);
        }
        numberOfIteraction++;
    }

}
