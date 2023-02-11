//Exercise
//defensive programming
function letterFinder(word, match) {
try{
    if (word.length<2 || match.length!=1 || typeof(word)!="string" || typeof(match)!="string"){
        throw new RangeError("Please pass correct arguments to the function.")
    }else{
        for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log('Found the', match, 'at', i)
        } else {console.log('---No match found at', i)}
        }
        }
}catch(e){
console.log(e)
}
}

letterFinder("Omar",5)
console.log("The code continue")