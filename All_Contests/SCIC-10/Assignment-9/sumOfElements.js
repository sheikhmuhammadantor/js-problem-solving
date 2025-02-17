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
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    // code here
    console.log(arr.reduce((acc, curr) => acc + curr, 0));
}

// -------------------------------------------------------------------------------------------------------
/*
Given an array of integers, print the sum of its elements.

Input Format

The first line contains an integer n (1 ≤ n ≤ 1000), the size of the array.

The second line contains n space-separated integers (-10^4 ≤ arr[i] ≤ 10^4).

Constraints

N/A

Output Format

A single integer represents the sum of the elements.

Sample Input 0

5
1 2 3 4 5
Sample Output 0

15
Explanation 0

here the example 1+2+3+4+5=15

Sample Input 1

2
9999 -9999
Sample Output 1

0

*/ 
// ---------