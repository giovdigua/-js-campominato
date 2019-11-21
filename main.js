
// 1) create an array of 16 mines with random number in range 1- 100
var mines = generateMines(16,1,100);
console.log(mines);

// 2)Main logic games -- ask to the user a number in range 1 100 while dosen't hit a mines


alert('Welcome on minefield clone');
alert('The game scope it\'s choose a number and dosen\'t hit a mine');
//Variable that check if the user dosen'y hit a mine(He's live!!)
var alive = true

do{
    //Variable that contain the attempt of the user

    var prof=0;
    //check if try it's a number in valid range
    //while (prof== NaN &&((prof<1)&&(prof>100))) {
    do {
        prof = prompt('Enter a number between 1 and 100');
    } while (isNaN(prof) || ((prof<1)||(prof>100)));


    if (hit(mines,prof)) {
        alive = false;
        alert('Game Over!You died!You stepped on a mine!');
    }else{
        alert('You\'re lucky! Continue the game.');

    }

}while (alive)

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
    return array;

}

//function that check if the user hit the number(mines in this game)
function hit(list,number){
    var hitIt = false
    for (var i = 0; i < list.length && hitIt == false; i++) {
        if (number == list[i]) {
            hitIt = true;
        }
    }
    return hitIt;
}
