const instructor = "Grant"


function sum() {
    let number = 24
    if (number >= 21) {
        console.log("you are allowed in!")
    } else if (number < 0) {
        console.log("you are not a human!")
    } else { console.log('get lost') }
}
//for (start; stop; howWeGetThere;) {code to be exeuted}
for (let i = 100; i > 20; i-=2) {
    console.log(i)
}

const person = {
    name: "Kareem",
    location: "Miami",
    learningToCode: false,
    friends: ["kylin", "zay", "bayo"]
}

let fruits = ['Apple', 'Banana', 'Peaches']
console.log(fruits[0])// bracket notation

console.log(person['name']) // Bracket notation
console.log(person.friends[0]) //dot notation

const paragraph = document.getElementById('test')
function textChanger(){
    paragraph.innerHTML = 'I have changed the text via '
}
