var words = [['Lufthansa', 'Name of the German airline'], ['Banana', 'Yellow fruit'], ['Javascript', 'Programming language'], ['Ganges', 'Indian holy river'], ['Whale', 'largest living creature on Earth'], ['Maple', 'Canadian flag contain?'], ['Elephant', 'Which mammal cannot jump?'], ['Greece', 'first Olympic Games'], ['Siberia', 'cold part of Russia']];
var letterLines = document.querySelector('#word-lines');
//Choose random word-hint pair and create lines for the letters
function random(words){
     rnd = Math.floor(Math.random() * Math.floor(words.length));
    var currentWord = words[rnd][0];
    for (var i = 0; i<currentWord.length; i++) {
        var div = document.createElement('div');
        letterLines.appendChild(div);
        div.classList.add('line');
    }
    return currentWord;
};
//generate word
var word = random(words);
var input = document.querySelector('#input-field');
var guess = document.querySelector('#button-guess');
var lives
lives = document.querySelector('#lives');
var maxLives = 6;
lives.textContent = `You have ${maxLives} tries.`;
var showLetter = document.querySelectorAll('.line');
var allLetters = word.length;
var ourLetters = 0;
let history="";
guess.addEventListener('click', game);
input.addEventListener('keyup', ent); 
function ent(e) {
    if (e.keyCode === 13) {
        game();
    }
};
function game() {
    var letterFound = false;
    history.split('');
    var letters = /^[A-Za-z]+$/;
    var correct = [];
    if (history.indexOf(input.value.toUpperCase())==-1) {
        if (input.value.match(letters)) {
            for (var i = 0; i < word.length; i++) {
                if (input.value.toUpperCase() == word[i].toUpperCase()) {
                    // Print letter to the screen
                    var letterContainer = document.createElement('div');
                    var myLetter = document.createTextNode(input.value.toUpperCase());
                    
                    if (showLetter[i].firstChild == undefined) {
                       showLetter[i].appendChild(letterContainer);
                        letterContainer.appendChild(myLetter);
                        letterContainer.classList.add('container');
                    }
                    letterFound = true;
                    correct.push(input.value.toUpperCase());
                } else if (correct.length <= 0){
                    letterFound = false;
                }
            };
        } else {
            alert('Enter a valid letter!');
        }
		if (letterFound == false) {
			document.querySelector('.wrong').textContent += input.value.toUpperCase();
            maxLives-=1;
            if (maxLives == 0) {
                alert('You ran out of tries!');
                guess.removeEventListener('click', game);
                input.removeEventListener('keyup', ent);
            }
            lives.textContent = `You have ${maxLives} tries.`;
        } else {
            ourLetters+=1;
            if (ourLetters == allLetters) {
                alert(`The word was: ${word.toUpperCase()}!`);
                guess.removeEventListener('click', game);
            }
        }
    }
    history += input.value.toUpperCase();
    input.value = '';
};

//Show hint
function giveHint(){
   document.querySelector('.hint').textContent = words[rnd][1];
}
var hint = document.querySelector('#button-hint');
hint.addEventListener('click', giveHint);