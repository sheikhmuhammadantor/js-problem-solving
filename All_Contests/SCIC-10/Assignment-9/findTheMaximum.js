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
    
    console.log(Math.max(...arr));
}

// -------------------------------------------------------------------------------------------------------
/*
Given an array of integers, find the maximum element.

Input Format

The first line contains an integer n (1 ≤ n ≤ 1000).

The second line contains n space-separated integers (-10^4 ≤ arr[i] ≤ 10^4).

Constraints

N/A

Output Format

A single integer, the maximum element in the array.

Sample Input 0

5
1 3 5 2 4
Sample Output 0

5
Sample Input 1

4
-1 -2 -3 -4
Sample Output 1

-1

*/ 
// ---------