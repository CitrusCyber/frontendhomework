function arrayandmaths(array , math){
    let resultArray = []
    for(let i = 0; i < array.length; i++){
        const result = math(array[i])
        resultArray.push(result)
    }
    return resultArray
}
const numbers = [1 , 2 , 3 , 4 , 5 ,6 , 7 , 8]
function doubleNumbers(num){
    return num * 2
}
const resultDoubleNumbers = arrayandmaths(numbers, doubleNumbers)
console.log(resultDoubleNumbers)