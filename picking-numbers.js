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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    console.log(a);

    a = a.sort( (a,b) => { return a-b})
    console.log(a);

    var longArr=[];
    for ( var i = 0; i < a.length; i++) {
        var arr = a.filter((num)=>{
            if((num-a[i])==1||(num-a[i])==0){
                return num
            }
        })
        
        console.log(arr)

        longArr.push(arr.length)
    }
    console.log(longArr);

    longArr.sort((a,b)=>{
        return b-a
    })
    console.log(longArr[0]);

    return longArr[0]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
