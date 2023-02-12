'use strict';

const fs = require('fs');

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

/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    var obj={}
    var obj2={}
    if(a[0]==a[1]){return 1}
    for ( var i = 0; i < a.length; i++) {
        if ( !obj[a[i]]) {
            obj[a[i]] = i
        } else {
            obj2[a[i]] = i - obj[ a[i]]
            obj[ a[i]] =  i - obj[ a[i]]
        }
    }
    var x = Object.values( obj2)
    x.sort( ( a, b) => { return a - b})
    if ( x[0]) {
        return x[0]
    } else { return -1}
}    



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
