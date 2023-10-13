var array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
for(i = 0; i < array.length; i++){
    var newarray = String(array[i])
    var options = newarray[0];
    if(options == 3 || options == 5){
        console.log(newarray)
    }
}

var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var result = [];
for (var i = 0; i < tags.length; i++){
    var a = tags[i];
    if(result[a] != undefined)
        ++result[a];
    else{
        result[a] = 1;
    }
}
var object = {
    result: result
}
console.log(object)
console.log(array.sort((a ,b ) => a - b))
console.log(result.sort((a, b) => a - b ))