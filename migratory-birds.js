function migratoryBirds(arr) {
    // Write your code here
arr=arr.sort((a,b)=>{return a-b});
var obj={};
arr.forEach(function(item){
if (!obj[item]){obj[item]=1}else{
obj[item]+=1    
}    
})
    

}