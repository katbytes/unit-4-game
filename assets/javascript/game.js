$(document).ready(function () { // Global Variables

// Crystal Images
crystals = ['assets/images/crystal-red.jpg',
'assets/images/crystal-blue.jpg',
'assets/images/crystal-yellow.jpg',
'assets/images/crystal-green.jpg'];

var counter = 0;
var wins = 0;
var losses = 0;

// Determining Win & Loss Counter (JQuery - Replacing current score in the HTML via Element ID for wins & losses)
$('#win').text(wins);
$('#loss').text(losses);

newCrystals();
newGame();

function newCrystals() {
var numbers = []
while (numbers.length < 4) {

// Math.ceil Rounds # to an Integer
// Determining a Random # 
// This # is the Wining # (If User Gusses Correctly)
var randomNumber = Math.ceil(Math.random() * 15); // (Math.random() * (max - min)) + min; ?
var found = false;
for (var i = 0; i < numbers.length; i++) {
if (numbers[i] == randomNumber) {
found = true;
break
}
}
if (!found) numbers[numbers.length] = randomNumber;
}
// Kat - Test in the Console
//console.log(newCrystals);		
for (i = 0; i < numbers.length; i++) {
var imageCrystal = $('<img>');
imageCrystal.attr('data-num', numbers[i]);
imageCrystal.attr('src', crystals[i]);
imageCrystal.attr('alt', 'crystals');
imageCrystal.addClass('crystalImage')
$('#crystals').append(imageCrystal);
}
}

function newGame() {

counter = 0;
$('#yourScore').text(counter);

function randomIntFromInterval(min, max) {
return Math.floor(Math.random() * (max - min) + 1);
}

var numberToGuess = randomIntFromInterval(19, 120);

$('.value').text(numberToGuess);
$('.crystalImage').on('click', function () {
counter = counter + parseInt($(this).data('num'));

$('#yourScore').text(counter);
// Determining User Wins
if (counter == numberToGuess) {
$('#status').text('You won!!!!');  // Winning like Charlie Sheen
wins++;
$('#win').text(wins);
console.log(wins)
$('#crystals').empty();
newCrystals();
newGame();
// Determining User Losses      
} else if (counter > numberToGuess) {
$('#status').text('You lost!'); // I'm a Loser like Beck
losses++;
$('#loss').text(losses);
console.log(losses)
$('#crystals').empty();
newCrystals();
newGame();
}
});
}

});