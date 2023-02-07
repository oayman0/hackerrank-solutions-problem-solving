
// console.log(b)
//     for (var i=b[0];i>=a[-1];i--){


    function getTotalX(a, b) {
    a=a.sort((a,b)=>{return b-a})
    console.log(a)
    b=b.sort((a,b)=>{return b-a})
        var arr=[];
        var final=0;
        for( var lg of b){
        for (sm of a){
            arr.push(lg/sm);
            arr.push(sm)
        }
        arr.push(lg)}
        console.log(arr)
        
        var set1={}
        for (var z of arr){
            if(!set1[z]){
                set1[z]=true
            }
        }
        console.log(set1)
        for( var setElem in set1){
        var countA=0
        var countB=0
        for(var sm of a){
            if(setElem%sm==0){
        countA++
            }
        }
        for(var lg of b){
            if(lg%setElem==0){
        countB++
            }
        }
        console.log(countA,countB)
        if (countA===a.length && countB===b.length){
        final++
        }
        }
        console.log(final)
        return final
        }//end of function
        var a= [1]
        var b= [72,48]
        getTotalX(a,b);