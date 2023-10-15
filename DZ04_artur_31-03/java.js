var something = ['name' , 'John' , 'lastname' , 'Black' , 'age' , '23']
var somethingObject = {}
for (var i = 0; i < something.length; i+=2) {
    var key = something[i];
    var value = something[i + 1];
    somethingObject[key] = value;
}
console.log(somethingObject)


function getAvg(numbers){
    var summa = 0
    for(var i = 0; i < numbers.length; i++){
        var number = numbers[i]
        summa += number
    }
    var avg = summa / numbers.length
}
var massive = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
getAvg(massive)


function getIndex(key){
    if(typeof key === 'string'){
        console.log(true)
    }else{
        console.log(false)
    }
}
var value = "Arturrr"
var anothervalue = 42
console.log(getIndex(value))
console.log(getIndex(anothervalue))