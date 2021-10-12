
// Parant Class
class Animal {
    constructor(nameA, age, image, sound) {
        this.nameA = nameA,
        this.age = age,
        this.image = image,
        this.sound = sound
    }
    eats() {
        return this.nameA + " eats food"
    }
}


// First child Class
class Cats extends Animal {
    constructor(nameA, age, image, sound, height) {
        super(nameA, age, image, sound)
        this.height = "The height of cat is " + height
     }
    eats() {
        return  "cats eats mouse"
    }
    Animalsound() {
        return "cat sounds is meow"
    }
}


// Second child Class
class Dogs extends Animal {
    constructor(nameA, age, image, sound, width) {
        super(nameA, age, image, sound)
        this.width = "The width of dog is " + width
    }
    eats() {
        return "dogs eats chicken"
    }
    Animalsound() {
        return "dogs sounds is woof"
    }
}



// Third child Class
class Fish extends Animal {
    constructor(nameA, age, image, sound, color) {
        super(nameA, age, image, sound)
        this.color = color
    }
    eats() {
        return "fish eats flakes"
    }
    
}


// Objects 
const cat1 = new Cats("laly", 10, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvjnCvH5M5qyu8-3iOCS7_OokCJfjvnRDFA&usqp=CAU", "meow", "23kg")
const dog1 = new Dogs("popo", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKDSv9C9N0TFrJG0rVHyQgIlIdr7UTF2AfA&usqp=CAU", "woof", "10rem")
const fish1 = new Fish("meme", 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihSBe5wuERa1KsF7oyGVu_DsgTISHQ8-N_g&usqp=CAU", "", "red")

let content = document.getElementById("content")
content.innerHTML += `
    <img src="${cat1.image}" onclick="moreInfo(cat1)" alt="">
    <img src="${dog1.image}" onclick="moreInfo(dog1)" alt="">
    <img src="${fish1.image}" onclick="moreInfo(fish1)" alt="">
`

function moreInfo(animal) {
    document.querySelector(".lists").innerHTML = `
        <li>${animal.nameA}</li>
        <li>${animal.age}</li>
        <li>${ animal.sound ? animal.sound : 'No sound' } </li>
        <li>${ animal.height ? animal.height : 'No height' } </li>
        <li>${ animal.width ? animal.width : 'No width' } </li>
    `
}