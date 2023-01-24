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
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    // Write your code here
let output =[];
arr=arr.sort(function(a, b){return a-b});

while(arr.length>0){
    let first =arr[0];
    output.push(arr.length);
arr.forEach(function(element,index,array){
    array[index]= element-first;    
})
// arr.forEach(function(){})
let newArray=[];
for(var i=0;i<arr.length;i++){
if(arr[i]!=0){newArray.push(arr[i])}
}
arr=newArray;
// let newArray= arr.map(function(elem){
// if(!(elem===arr[0])){
//     return elem;}  
// });
}
return output;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
