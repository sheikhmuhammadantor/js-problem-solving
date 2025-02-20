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

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }
    
}

// -------------------------------------------------------------------------------------------------------
/*
Given a dictionary (object) with key-value pairs, return the value associated with a

given key.

Input Format

The first line contains an integer n (1 ≤ n ≤ 1000), the number of key-value pairs.

The next n lines contain an array of strings, where each string is in the format "key value" (key is a string, value is an integer).

The last line contains a key (string) to lookup.

Constraints

N/A

Output Format

The value corresponding to the given key, or "Not Found" if the key doesn't exist.

Sample Input 0

3 
name1 10
name2 20
name3 30
name2
Sample Output 0

20
Explanation 0

The key-value pairs are ["name1 10", "name2 20", "name3 30"]. The lookup key is "name2", so the output is 20.

Sample Input 1

2
key1 5
key2 15
key3
Sample Output 1

Not Found  
Explanation 1

The key-value pairs are ["key1 5", "key2 15"]. The lookup key "key3" is not included in the array, so the output should be "Not Found".

Sample Input 2

4
a 1
b 2
c 3
d 4
c
Sample Output 2

3

*/ 
// ---------