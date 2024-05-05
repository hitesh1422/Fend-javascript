var array = [1,2,3,4,5,6,7,8]
var target = 5;
for (var i = 0;i<array.length;i++){
    for(var x = i+1; x<array.length;x++){
    if (array[i]+array[x]==5){
        console.log(array[i],array[x]);
    }
}
}