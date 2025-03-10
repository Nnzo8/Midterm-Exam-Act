const prompt = require('prompt-sync')();//for input module

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Take input from the user
const inputString = prompt('Enter a string to reverse: ');
const reversedString = reverseString(inputString);
console.log('Reversed string:', reversedString);
