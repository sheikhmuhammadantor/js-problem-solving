'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const s = readLine();

    // code here
    console.log(s.split('').reverse().join(''));
}

// -------------------------------------------------------------------------------------------------------
/*
Given a string, reverse it and print the result.

Input Format

A single line containing a string s (1 ≤ |s| ≤ 1000).

Constraints

N/A

Output Format

The reversed string.

Sample Input 0

hello
Sample Output 0

olleh
Sample Input 1

racecar
Sample Output 1

racecar

*/ 
// ---------