function filterandmap(bookarray){
    var booksy = bookarray.filter(book => book.includes('y' && 'Y'))
    var otherbooks = bookarray.filter(book => !book.includes('y' && 'Y'))
    var mapbooky = booksy.map(book => `${book} Книги с буквой  "y"`)

    console.log("Книги с буквой y")
    mapbooky.forEach(book => console.log(book))

    console.log("Остальные книги")
    otherbooks.forEach(book => console.log(book))
}

var books = [
    "WorldWar",
    "EvgeniyOnegin",
    "Yvotzal",
    "sALAM",
    "Yvorov",
    "Ymazai",
    "Yvetzal"
]
filterandmap(books)

var plus = document.getElementById('plusbutton')
var minus = document.getElementById('minusbutton')
plus.addEventListener("click" , function (){
    var currentValue = parseInt(Input.value)
    Input.value = currentValue + 1
})
minus.addEventListener("click" , function (){
    var currentValue = parseInt(Input.value)
    if(currentValue > 0){
        Input.value = currentValue - 1
    }

})
