'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    // code here
    if (n < 0) {
        console.log('Number is negative');
    } else if (n % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

// ----------------------------------------------------------------------------------------
/*
Given an integer, determine whether it is even or odd.

Input Format

A single integer n (-10^9 ≤ n ≤ 10^9).

Constraints

N/A

Output Format

"Even" if the number is even, "Odd" if the number is odd.

If the integer is negative print "Number is negative"

Sample Input 0

4
Sample Output 0

Even
Sample Input 1

7
Sample Output 1

Odd
Sample Input 2

-3
Sample Output 2

Number is negative

*/
// ----------