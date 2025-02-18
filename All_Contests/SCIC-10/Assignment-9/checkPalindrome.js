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
    const isPalindrome = s === s.split('').reverse().join('');
    console.log(isPalindrome ? "Yes" : "No");
}

// -------------------------------------------------------------------------------------------------------
/*
Given a string, determine if it is a palindrome. A palindrome reads the same backward as

forward.

A palindrome is a string that reads the same from left to right and right to left. “aa”

is palindrome but “ab” not

Input Format

A single line containing a string s (1 ≤ |s| ≤ 1000).

Constraints

N/A

Output Format

"Yes" if the string is a palindrome, "No" otherwise.

Sample Input 0

madam
Sample Output 0

Yes
Sample Input 1

hello
Sample Output 1

No

*/ 
// ---------